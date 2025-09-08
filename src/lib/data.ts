
export type Skill = {
  name: string;
  level: number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  codeSnippet: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  content: string;
};

export type ResumeEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const skills: Skill[] = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Pandas', level: 80 },
  { name: 'Numpy', level: 75 },
  { name: 'Scikit-learn', level: 75 },
  { name: 'Power BI', level: 80 },
  { name: 'Streamlit', level: 70 },
];

export const projects: Project[] = [
  {
    id: 'store-performance-forecast',
    title: 'Store Performance Forecast Analysis',
    description: 'Developed a forecasting model using machine learning to predict store performance, creating a Streamlit app for data visualization and stakeholder insights.',
    longDescription: 'This project involved developing a forecasting model using machine learning to predict store performance. A Streamlit application was also created to provide data visualization and insights for stakeholders, making the results accessible and actionable.',
    imageUrl: 'https://picsum.photos/600/402',
    imageHint: 'data analytics',
    tags: ['Python', 'Machine Learning', 'Streamlit', 'Forecasting'],
    codeSnippet: `import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

# Dummy data for demonstration
data = {
    'date': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03']),
    'sales': [100, 120, 110]
}
df = pd.DataFrame(data)
df['day_of_week'] = df['date'].dt.dayofweek

X = df[['day_of_week']]
y = df['sales']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestRegressor()
model.fit(X_train, y_train)
print("Model trained for store performance forecast.")`,
  },
  {
    id: 'telco-customer-churn',
    title: 'Telco Customer Churn Analysis',
    description: 'Analyzed customer data to identify key churn drivers and built predictive models to provide actionable retention strategies.',
    longDescription: `
**The Challenge:** To understand the primary factors driving customer churn at a telecommunications company and to develop a model that could predict which customers were at high risk of leaving.

**My Approach & Key Findings:**
I conducted a thorough exploratory data analysis (EDA) using Python libraries like Pandas and Matplotlib to uncover patterns in the dataset. This involved cleaning the data, handling missing values, and visualizing relationships between variables.

- **Insight 1:** Customers on month-to-month contracts had a significantly higher churn rate compared to those on one or two-year contracts. This suggests a lack of long-term commitment is a major risk factor.
- **Insight 2:** Customers with higher monthly charges were more likely to churn, especially if they weren't subscribed to multiple premium services like Tech Support or Online Backup. This indicated a potential value-for-money issue.

**Model Development & Results:**
I built several classification models using Scikit-learn, including Logistic Regression and a Random Forest Classifier. The Random Forest model performed the best, achieving an accuracy of over 80% in identifying customers who would churn. The model's feature importance results confirmed that contract type and tenure were the most significant predictors.
`,
    imageUrl: 'https://picsum.photos/600/403',
    imageHint: 'analytics dashboard',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Predictive Modeling', 'Case Study'],
    codeSnippet: `import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, accuracy_score

# Load and preprocess data (assuming 'df' is pre-loaded)
# df.dropna(inplace=True)
# ... more preprocessing steps ...

# Feature Engineering
# df['tenure_group'] = pd.cut(df['tenure'], bins=[0, 12, 24, 60, 72], labels=['0-1', '1-2', '2-5', '5+'])

# Select features and target
# features = ['tenure', 'MonthlyCharges', 'Contract_Month-to-month']
# target = 'Churn'

# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# model = RandomForestClassifier(n_estimators=100, random_state=42)
# model.fit(X_train, y_train)

# y_pred = model.predict(X_test)
# print(f"Model Accuracy: {accuracy_score(y_test, y_pred):.2f}")

# # Plotting feature importance
# feature_imp = pd.Series(model.feature_importances_, index=X.columns).sort_values(ascending=False)
# sns.barplot(x=feature_imp, y=feature_imp.index)
# plt.xlabel('Feature Importance Score')
# plt.ylabel('Features')
# plt.title("Visualizing Important Features")
# plt.show()
`
  },
  {
    id: 'loan-default-prediction',
    title: 'Loan Default Prediction Analysis',
    description: 'Built a machine learning model to predict loan default risk, helping to identify high-risk applicants through data analysis and predictive modeling.',
    longDescription: `This project focuses on predicting loan default using a dataset of past loan applicants. The primary goal was to build a reliable classification model that can distinguish between applicants who are likely to repay a loan and those who are likely to default.

The process involved comprehensive data cleaning, exploratory data analysis (EDA) to uncover insights into factors affecting loan status, and feature engineering to prepare the data for modeling. I experimented with several classification algorithms, including Logistic Regression and Random Forest, to find the best-performing model. The final model provides a valuable tool for assessing credit risk and making data-informed lending decisions.`,
    imageUrl: 'https://picsum.photos/600/401',
    imageHint: 'financial analytics',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Analysis', 'Pandas'],
    codeSnippet: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report

# Load the dataset (assuming 'loan_data.csv' is available)
# loans = pd.read_csv('loan_data.csv')

# Preprocessing and Feature Engineering
# ... (categorical feature conversion, etc.)

# final_data = pd.get_dummies(loans, columns=cat_feats, drop_first=True)
# X = final_data.drop('not.fully.paid', axis=1)
# y = final_data['not.fully.paid']
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=101)

# Train a logistic regression model
# logmodel = LogisticRegression()
# logmodel.fit(X_train, y_train)

# predictions = logmodel.predict(X_test)
# print(classification_report(y_test, predictions))
`
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-steps-to-effective-data-cleaning',
    title: '5 Steps to Effective Data Cleaning',
    description: 'Data cleaning is a critical first step in any analysis. Here are 5 steps to ensure your data is ready for modeling.',
    author: 'Tejeswar Nadisetti',
    date: '2023-10-26',
    imageUrl: 'https://picsum.photos/800/450',
    imageHint: 'clean data',
    content: 'Data cleaning is arguably one of the most important and time-consuming tasks in data analysis. Garbage in, garbage out, as they say. A solid foundation of clean data is essential for building accurate models and drawing reliable conclusions. This post breaks down the process into five manageable steps...\n\n1. **Handling Missing Values:** Decide whether to impute, remove, or flag missing data.\n2. **Correcting Structural Errors:** Look for typos, inconsistent capitalization, and other structural issues.\n3. **Filtering Unwanted Outliers:** Identify and handle outliers that could skew your analysis.\n4. **Validating Data:** Cross-check data with known sources and ensure it falls within expected ranges.\n5. **Standardizing and Normalizing:** Scale your data to prepare it for machine learning algorithms.',
  },
  {
    slug: 'choosing-the-right-visualization',
    title: 'Choosing the Right Chart for Your Data',
    description: 'A guide to selecting the most effective chart type to tell your data story.',
    author: 'Tejeswar Nadisetti',
    date: '2023-11-15',
    imageUrl: 'https://picsum.photos/800/451',
    imageHint: 'charts graphs',
    content: 'A great visualization can make complex data instantly understandable. But choosing the wrong chart can be confusing or even misleading. This guide covers some of the most common chart types and when to use them.\n\n- **Bar Charts:** Best for comparing categories.\n- **Line Charts:** Ideal for showing trends over time.\n- **Scatter Plots:** Used to show the relationship between two variables.\n- **Pie Charts:** Use sparingly, but effective for showing parts of a whole.\n- **Heatmaps:** Great for visualizing correlations or matrix data.',
  },
];

export const resume: ResumeEntry[] = [
    {
        role: 'Data Science Job Simulation',
        company: 'British Airways',
        period: 'Certification',
        description: 'Completed a job simulation focusing on data science tasks relevant to the airline industry.'
    },
    {
        role: 'Technology Job Simulation',
        company: 'Deloitte',
        period: 'Certification',
        description: 'Engaged in a technology-focused job simulation to solve real-world business problems.'
    },
    {
        role: 'GenAI Powered Data Analytics Job Simulation',
        company: 'TATA Forage',
        period: 'Certification',
        description: 'A simulation of data analytics tasks using generative AI.'
    },
     {
        role: 'Data Analysis using Python',
        company: 'APSSDC',
        period: 'Certification',
        description: 'Completed certification on data analysis techniques using Python.'
    },
    {
        role: 'AI-ML Virtual Internship',
        company: 'AICTE EduSkills',
        period: 'Internship',
        description: 'Gained practical experience in AI and Machine Learning through a virtual internship.'
    },
    {
        role: 'AI and Career Empowerment',
        company: 'University of Maryland',
        period: 'Certification',
        description: 'Completed a program on AI applications and career development.'
    }
];

export const education: ResumeEntry[] = [
    {
        role: 'Bachelor of Technology, Computer Science',
        company: 'Aditya Institute of Technology and Management, Tekkali',
        period: '2022 - 2026',
        description: 'Pursuing a degree in Computer Science Engineering with a focus on data and technology.'
    },
    {
        role: 'Intermediate, MPC',
        company: 'Sri Chaitanya Junior College, Anakapalli',
        period: 'Intermediate Education',
        description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.'
    },
    {
        role: 'SSC',
        company: 'D.A.V. Public School, Anakapalli',
        period: 'Secondary Education',
        description: 'Completed secondary school certificate.'
    }
]
