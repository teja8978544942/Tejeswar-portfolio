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
  { name: 'R', level: 70 },
  { name: 'Tableau', level: 95 },
  { name: 'Power BI', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'Statistics', level: 88 },
];

export const projects: Project[] = [
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation using Clustering',
    description: 'A project to segment a customer base using K-Means clustering to identify distinct marketing groups.',
    longDescription: 'This project involved analyzing a retail dataset to identify distinct customer segments. I performed data cleaning, feature engineering, and then applied K-Means clustering to group customers based on their purchasing behavior. The results provided actionable insights for targeted marketing campaigns, leading to a potential 15% increase in campaign effectiveness.',
    imageUrl: 'https://picsum.photos/600/400',
    imageHint: 'data chart',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Clustering'],
    codeSnippet: `from sklearn.cluster import KMeans
import pandas as pd

# Load dataset
data = pd.read_csv('customers.csv')
features = data[['Annual Income (k$)', 'Spending Score (1-100)']]

# Apply K-Means
kmeans = KMeans(n_clusters=5, init='k-means++', random_state=42)
y_kmeans = kmeans.fit_predict(features)

print("Customer segments created successfully.")`,
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance for Manufacturing',
    description: 'Built a model to predict equipment failure, reducing downtime and maintenance costs.',
    longDescription: 'In this project, I developed a classification model to predict machinery failures on a manufacturing floor. Using sensor data, I trained a Random Forest classifier to identify patterns preceding a failure. The model achieved an accuracy of 92%, allowing for proactive maintenance scheduling and a significant reduction in unexpected downtime.',
    imageUrl: 'https://picsum.photos/600/401',
    imageHint: 'factory machinery',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'Time Series'],
    codeSnippet: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# X: sensor data, y: failure status
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print(f"Model Accuracy: {accuracy:.2f}")`,
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis of Social Media Data',
    description: 'Analyzed Twitter data to gauge public sentiment towards a new product launch.',
    longDescription: 'This project focused on using Natural Language Processing (NLP) to analyze sentiment from a stream of tweets related to a new tech product. I used the Twitter API to collect data, preprocessed the text, and applied a pre-trained sentiment analysis model. The resulting dashboard in Tableau visualized the shift in public opinion over the first week of launch.',
    imageUrl: 'https://picsum.photos/600/402',
    imageHint: 'social media',
    tags: ['NLP', 'Python', 'Tableau', 'API'],
    codeSnippet: `from textblob import TextBlob

tweet = "This new phone is amazing! The camera is a huge improvement."

# Create a TextBlob object
blob = TextBlob(tweet)

# Get sentiment
sentiment = blob.sentiment
polarity = sentiment.polarity # -1 (negative) to 1 (positive)
subjectivity = sentiment.subjectivity # 0 (objective) to 1 (subjective)

print(f"Polarity: {polarity}, Subjectivity: {subjectivity}")`,
  },
    {
    id: 'sales-forecasting',
    title: 'Retail Sales Forecasting',
    description: 'Developed a time series model to forecast weekly sales for a retail chain.',
    longDescription: 'Using historical sales data, I built a SARIMA model to forecast weekly sales for the next quarter. The project involved decomposing the time series to identify trend and seasonality, tuning model parameters, and evaluating its performance using Mean Absolute Error. The forecast helped the inventory management team optimize stock levels.',
    imageUrl: 'https://picsum.photos/600/403',
    imageHint: 'retail store',
    tags: ['Time Series', 'R', 'Forecasting', 'SARIMA'],
    codeSnippet: `library(forecast)

# ts_data is a time series object of weekly sales
fit <- auto.arima(ts_data, seasonal=TRUE)
forecast_values <- forecast(fit, h=12) # Forecast 12 weeks ahead

plot(forecast_values)
print("Sales forecast generated.")`,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-steps-to-effective-data-cleaning',
    title: '5 Steps to Effective Data Cleaning',
    description: 'Data cleaning is a critical first step in any analysis. Here are 5 steps to ensure your data is ready for modeling.',
    author: 'Analyst Jane',
    date: '2023-10-26',
    imageUrl: 'https://picsum.photos/800/450',
    imageHint: 'clean data',
    content: 'Data cleaning is arguably one of the most important and time-consuming tasks in data analysis. Garbage in, garbage out, as they say. A solid foundation of clean data is essential for building accurate models and drawing reliable conclusions. This post breaks down the process into five manageable steps...\n\n1. **Handling Missing Values:** Decide whether to impute, remove, or flag missing data.\n2. **Correcting Structural Errors:** Look for typos, inconsistent capitalization, and other structural issues.\n3. **Filtering Unwanted Outliers:** Identify and handle outliers that could skew your analysis.\n4. **Validating Data:** Cross-check data with known sources and ensure it falls within expected ranges.\n5. **Standardizing and Normalizing:** Scale your data to prepare it for machine learning algorithms.',
  },
  {
    slug: 'choosing-the-right-visualization',
    title: 'Choosing the Right Chart for Your Data',
    description: 'A guide to selecting the most effective chart type to tell your data story.',
    author: 'Analyst Jane',
    date: '2023-11-15',
    imageUrl: 'https://picsum.photos/800/451',
    imageHint: 'charts graphs',
    content: 'A great visualization can make complex data instantly understandable. But choosing the wrong chart can be confusing or even misleading. This guide covers some of the most common chart types and when to use them.\n\n- **Bar Charts:** Best for comparing categories.\n- **Line Charts:** Ideal for showing trends over time.\n- **Scatter Plots:** Used to show the relationship between two variables.\n- **Pie Charts:** Use sparingly, but effective for showing parts of a whole.\n- **Heatmaps:** Great for visualizing correlations or matrix data.',
  },
];

export const resume: ResumeEntry[] = [
    {
        role: 'Data Analyst',
        company: 'Tech Solutions Inc.',
        period: '2021 - Present',
        description: 'Led data analysis initiatives for the marketing department, resulting in a 20% improvement in campaign ROI. Developed and maintained dashboards in Tableau to track key performance indicators.'
    },
    {
        role: 'Junior Data Analyst',
        company: 'Data Insights Co.',
        period: '2019 - 2021',
        description: 'Assisted senior analysts with data cleaning, exploratory data analysis, and report generation. Gained proficiency in SQL and Python for data manipulation and analysis.'
    }
];

export const education: ResumeEntry[] = [
    {
        role: 'M.S. in Data Science',
        company: 'University of Analytics',
        period: '2017 - 2019',
        description: 'Specialized in machine learning and statistical modeling. Completed a thesis on predictive modeling in e-commerce.'
    },
    {
        role: 'B.S. in Computer Science',
        company: 'State University',
        period: '2013 - 2017',
        description: 'Focused on software development and database management. Graduated with honors.'
    }
]
