# What Are The Chances?  -- Death in NYC

[What are the Chances? -- Death in NYC](https://calm-sands-83203.herokuapp.com/) is an app designed to give users 
an idea of their likely cause of death based on data from NYC's Department of Health 
and Open Data API.

## Summary

What Are The Chances? -- Death in NYC searches NYC's Open Data API for 
data about leading causes of death in the city for the years 
2007 to 2014.  Users can choose to search for data by
ethnicity, sex or year.  The app then gets the leading cause
of death by the highest age adjusted death rate and returns 
that to the user.  It also generates a C3-js bar chart 
showing other leading causes of death and their age adjusted
death rates for the available years.

## Technologies Used

What Are The Chances? --Death in NYC was built using React, Redux, React Router, NodeJS, Express, Unirest and C3-js. Body Parser middleware was also used.

Dev dependencies include Chai and Mocha for testing and Travis is used for continuous integration.


## Screenshots



#### Home Screen
![ss-watc-d_home-desktop](https://cloud.githubusercontent.com/assets/17256531/24046150/f8c187aa-0af7-11e7-9a2f-5eae1e326157.png)


#### Search Screen
![ss-watc-d_search-desktop](https://cloud.githubusercontent.com/assets/17256531/24046155/fb8d4514-0af7-11e7-9992-65d24cc2e337.png)


#### Results Screen 
![results-screen1](https://cloud.githubusercontent.com/assets/17256531/24046161/003730fc-0af8-11e7-9b1c-814a3d46a5af.png)

#### C3.js Chart
![c3-chart](https://cloud.githubusercontent.com/assets/17256531/24046178/0bdb7c74-0af8-11e7-8491-139b51786cb1.png)


