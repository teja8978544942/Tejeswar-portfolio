
import streamlit as st
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder, OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib
import numpy as np

# --- 1. DATA LOADING AND PREPARATION ---

# Function to load and cache the data
@st.cache_data
def load_data():
    # Load the dataset
    df = pd.read_csv('https://raw.githubusercontent.com/teja8978544942/telco-customer-churn-analysis/main/WA_Fn-UseC_-Telco-Customer-Churn.csv')
    
    # Drop customerID
    df = df.drop('customerID', axis=1)

    # Convert TotalCharges to numeric, coercing errors to NaN
    df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')

    # Impute missing TotalCharges with the median
    median_total_charges = df['TotalCharges'].median()
    df['TotalCharges'].fillna(median_total_charges, inplace=True)

    # Convert SeniorCitizen to object
    df['SeniorCitizen'] = df['SeniorCitizen'].astype(object)

    return df

df = load_data()
df_for_display = df.copy() # Keep a copy for displaying raw data

# Separate features (X) and target (y)
X = df.drop('Churn', axis=1)
y = df['Churn'].apply(lambda x: 1 if x == 'Yes' else 0)

# --- 2. MODEL TRAINING PIPELINE ---

# Identify categorical and numerical features
categorical_features = X.select_dtypes(include=['object']).columns
numerical_features = X.select_dtypes(include=['int64', 'float64']).columns

# Create preprocessing pipelines for both numerical and categorical data
numerical_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(handle_unknown='ignore')

# Create a preprocessor object using ColumnTransformer
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numerical_transformer, numerical_features),
        ('cat', categorical_transformer, categorical_features)
    ])

# Define the model
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Create the full pipeline
pipeline = Pipeline(steps=[('preprocessor', preprocessor),
                           ('classifier', model)])

# Train the model on the entire dataset
pipeline.fit(X, y)

# --- 3. STREAMLIT APP INTERFACE ---

st.set_page_config(page_title="Telco Churn Predictor", layout="wide")

# App Title
st.title('Telco Customer Churn Prediction')
st.write("This app predicts whether a customer is likely to churn based on their account information. Use the sidebar to enter customer details.")

# --- SIDEBAR FOR USER INPUT ---
st.sidebar.header('Customer Details')

def user_input_features():
    gender = st.sidebar.selectbox('Gender', ('Male', 'Female'))
    senior_citizen = st.sidebar.selectbox('Senior Citizen', (0, 1), format_func=lambda x: 'Yes' if x == 1 else 'No')
    partner = st.sidebar.selectbox('Partner', ('Yes', 'No'))
    dependents = st.sidebar.selectbox('Dependents', ('Yes', 'No'))
    tenure = st.sidebar.slider('Tenure (months)', 0, 72, 24)
    phone_service = st.sidebar.selectbox('Phone Service', ('Yes', 'No'))
    multiple_lines = st.sidebar.selectbox('Multiple Lines', ('Yes', 'No', 'No phone service'))
    internet_service = st.sidebar.selectbox('Internet Service', ('DSL', 'Fiber optic', 'No'))
    online_security = st.sidebar.selectbox('Online Security', ('Yes', 'No', 'No internet service'))
    online_backup = st.sidebar.selectbox('Online Backup', ('Yes', 'No', 'No internet service'))
    device_protection = st.sidebar.selectbox('Device Protection', ('Yes', 'No', 'No internet service'))
    tech_support = st.sidebar.selectbox('Tech Support', ('Yes', 'No', 'No internet service'))
    streaming_tv = st.sidebar.selectbox('Streaming TV', ('Yes', 'No', 'No internet service'))
    streaming_movies = st.sidebar.selectbox('Streaming Movies', ('Yes', 'No', 'No internet service'))
    contract = st.sidebar.selectbox('Contract', ('Month-to-month', 'One year', 'Two year'))
    paperless_billing = st.sidebar.selectbox('Paperless Billing', ('Yes', 'No'))
    payment_method = st.sidebar.selectbox('Payment Method', ('Electronic check', 'Mailed check', 'Bank transfer (automatic)', 'Credit card (automatic)'))
    monthly_charges = st.sidebar.slider('Monthly Charges ($)', 18.0, 120.0, 70.0)
    total_charges = st.sidebar.slider('Total Charges ($)', 18.0, 8700.0, 1400.0)

    data = {
        'gender': gender,
        'SeniorCitizen': senior_citizen,
        'Partner': partner,
        'Dependents': dependents,
        'tenure': tenure,
        'PhoneService': phone_service,
        'MultipleLines': multiple_lines,
        'InternetService': internet_service,
        'OnlineSecurity': online_security,
        'OnlineBackup': online_backup,
        'DeviceProtection': device_protection,
        'TechSupport': tech_support,
        'StreamingTV': streaming_tv,
        'StreamingMovies': streaming_movies,
        'Contract': contract,
        'PaperlessBilling': paperless_billing,
        'PaymentMethod': payment_method,
        'MonthlyCharges': monthly_charges,
        'TotalCharges': total_charges
    }
    features = pd.DataFrame(data, index=[0])
    return features

input_df = user_input_features()

# Display user input
st.subheader('Customer Profile for Prediction:')
st.write(input_df)

# --- 4. PREDICTION AND DISPLAY ---

# Predict button
if st.button('Predict Churn'):
    # Make prediction
    prediction = pipeline.predict(input_df)
    prediction_proba = pipeline.predict_proba(input_df)

    st.subheader('Prediction Result')
    churn_status = 'Yes' if prediction[0] == 1 else 'No'
    
    if churn_status == 'Yes':
        st.error(f'This customer is likely to **Churn**.')
    else:
        st.success(f'This customer is likely to **Not Churn**.')

    st.subheader('Prediction Probability')
    st.write(f"**Probability of Not Churning (0):** {prediction_proba[0][0]:.2f}")
    st.write(f"**Probability of Churning (1):** {prediction_proba[0][1]:.2f}")

# --- Optional: Display Raw Data ---
if st.checkbox('Show raw Telco dataset'):
    st.subheader('Raw Data')
    st.write(df_for_display)

