# Project-3-Data-Visualization
Group Project - April 2023

A Brief articulation of chosen topic and rationale:
Our topic is in the field of education. We will look at characteristics of public schools in the 
United States and create a dashboard to serve as a resource for families moving to or 
within the US. The product will allow users to easily visualize the locations, types, and 
staffing levels of/in schools across the country. Using data from the Department of 
Education, we will look at factors such as school type, student to teacher ratio, school level, 
total students and school locale. The data is from 2020-2021.

Link to data: https://catalog.data.gov/dataset/public-school-characteristics-2020-21

GeoJSON data link: https://data-nces.opendata.arcgis.com/datasets/nces::public-school-characteristics-2020-21.geojson?outSR=%7B%22latestWkid%22%3A4326%2C%22wkid%22%3A4326%7D

Summary Approach:
+ Reduced source table so the file is small enough to upload - Maryland_Public_High_2020-2021_Cleaned.csv 
+ Created sql database - public_school_db.sql 
+ Created Flask API - app.py and config.py 
+ Created html file for dashboard - index.html
+ Created js filea for dashboard: 
  - Interactive map using Leaflet - map_1.js
  - Summary pie chart - app2.js
  - Interactive bar charts - jonathan.js and app3.js

Info about Leaflet Map element (map_1.js) 
  + Base layer of openstreetmap.
  + Overlay Map of all Public High Schools in Maryland
  + Binded Popup with school's name, address, total number of enroled students and student/teacher ratio

Requirements - Group Project 3

For Project 3, you will work with your group to tell a story using data visualizations. Here are the specific requirements:
- Your visualization must include a Python Flask-powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). // SQL was chosen
- Your project should fall into one of the following three tracks:
  - A combination of web scraping and Leaflet or Plotly
  - A dashboard page with multiple charts that update from the same data //This option was chosen
  - A server that performs multiple manipulations on data in a database prior to visualization (must be approved)
- Your project should include at least one JS library that we did not cover. //Chart.js was chosen
- Your project must be powered by a dataset with at least 100 records.
- Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).
- Your final visualization should ideally include at least three views.

Technical Requirements for Project 3
Data and Delivery (25 points)
  - Data components used in the project are clearly documented. (5 points)
  - The dataset contains at least 100 unique records. (5 points)
  - A database is used to house the data (SQL, MongoDB, SQLite, etc.). (5 points)
  - The project is powered by a Python Flask API and includes HTML/CSS, JavaScript, and the chosen database. (10 points)
Back End (25 points)
  - The page created to showcase data visualizations runs without error. (7.5 points)
  - A JavaScript library not shown in class is used in the project. (7.5 points)
  - The project conforms to one of the following designs: (10 points)
    - A Leaflet or Plotly chart built from data gathered through web scraping
    - A dashboard page with multiple charts that all reference the same data
Visualizations (25 points)
- A minimum of three unique views present the data. (5 points)
- Multiple user-driven interactions (such as dropdowns, filters, or a zoom feature) are included on the final page. (5 points)
- The final page displays visualizations in a clear, digestible manner. (5 points)
- The data story is easy to interpret for users of all levels. (10 points)
Group Presentation (25 points)
- All group members speak during the presentation. (5 points)
- The content is relevant to the project. (5 points)
- The presentation maintains audience interest. (5 points)
- Content, transitions, and conclusions flow smoothly within any time restrictions. (10 points)
