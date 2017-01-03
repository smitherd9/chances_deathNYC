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

What Are The Chances? --Death in NYC was built using React, Redux, NodeJS, Express, Unirest and C3-js. Body Parser middleware was also used.

Dev dependencies include Chai and Mocha for testing and Travis is used for continuous integration.



