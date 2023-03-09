
# Quiz App With Authentication using MERN stack

A Quiz App developed using MERN Stack.
In this App user can signup and login with both Email and Phone Number and after that can take a quiz with selected level and difficulty.


FRONTEND:

All frontend components developed using React.js.


Backend:

Node.js is used in Backend with Express framework .


Database:

MongoDB


Authentication Method:

JWT Authentication



Quiz Data Fetched From:

 [QuizAPI](https://quizapi.io/).



## Run Locally

Clone the project

  git clone --repo-url---


Go to the project directory


  cd --repo_name--



Install dependencies for Client And Server

  cd server
  npm install

  cd client
  npm install


Start the both server on seprate terminals
#server

  cd server
  node index.js


#client

  cd client
  npm start



  Deployment :


  As we can deploy this application using any cloud (AWS,Azure,GCP)
 
 1. For frontend you can simply create a production build (dist folder) and serve it staticly using AWS S3 bucket.(Make sure to change API endpoints while calling APIs).

 2.For Backend you can simply create a AWS EC2 server and serve your node application after logging in to your EC2 instance using SSH login and start or serve your node application with  pm2 package and nginx/apcahe server based on ypur choice.



 ### NOTE:  You can also create CI/CD pipeline for easy and automatic deployment whenver code is pushed for this you can use following services in AWS(Codepipeline,CodeDeploy,CodeBuild,EC2/Elasticbeanstalk).








  

  
