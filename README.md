# What Are The Chances?  -- Death in NYC

What Are The Chances? -- Death in NYC is an app designed to give users 
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


#### Intro Screen
![introscreen](https://cloud.githubusercontent.com/assets/17256531/21616303/e8365550-d1ae-11e6-81c9-13e2e1ab39c4.PNG)


#### Home Screen
![homescreen](https://cloud.githubusercontent.com/assets/17256531/21616316/f6eb3b88-d1ae-11e6-8fd6-035ce91b70dc.PNG)


#### Search Screen
![searchscreen](https://cloud.githubusercontent.com/assets/17256531/21616320/fd1a9652-d1ae-11e6-8995-1c22534ba95c.PNG)


#### Results Screen 
![resultsscreen](https://cloud.githubusercontent.com/assets/17256531/21616325/01371ad0-d1af-11e6-9764-58ab60d49c55.PNG)


