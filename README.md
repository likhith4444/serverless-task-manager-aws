# Serverless Task Manager Project

This project demonstrates a complete serverless web application built on AWS. The application consists of a static frontend hosted on Amazon S3, a backend built with AWS Lambda, and a REST API managed by API Gateway. The API is integrated with the frontend so that tasks are fetched and displayed on the webpage.

## Project Overview

- **Frontend:**  
  A simple HTML page (`index.html`) hosted on an S3 bucket configured for static website hosting. The page includes JavaScript that calls the REST API to fetch a list of tasks and displays them as a list.

- **Backend:**  
  An AWS Lambda function (`TaskHandler`) that returns a static JSON array of tasks. The function is written in Node.js and integrated with API Gateway.

- **API Gateway:**  
  A REST API (`TaskAPI`) with a `/tasks` resource and GET method that invokes the Lambda function. CORS is enabled to allow cross-origin calls from the S3-hosted frontend.

## Architecture

1. **S3 (Frontend):**  
   - Static website hosting enabled.
   - `index.html` uploaded and serves as the entry point.

2. **API Gateway (REST API):**  
   - New REST API named `TaskAPI` is created.
   - A resource `/tasks` is defined with a GET method.
   - CORS is enabled on `/tasks` so that the frontend can fetch data without issues.
   - API is deployed to a stage (e.g., `dev`).

3. **AWS Lambda (Backend):**  
   - Function `TaskHandler` is created using Node.js.
   - The function returns a JSON array:
     ```json
     [
       { "id": 1, "task": "Learn AWS" },
       { "id": 2, "task": "Build a serverless app" }
     ]
     ```
   - API Gateway is set to invoke this function when a GET request is made to `/tasks`.

## Setup and Deployment Steps

1. **Day 1: Frontend Setup**
   - Created the `index.html` file with a basic structure.
   - Initialized the project repository and committed the initial file using GitHub Desktop.
   - Created an S3 bucket and enabled static website hosting.
   - Uploaded `index.html` to S3 and verified that the static website loads.

2. **Day 2: Backend and API Setup**
   - Created the `TaskHandler` Lambda function in the AWS console.
   - Wrote and deployed the Lambda function code.
   - Tested the Lambda function in the console.
   - Created a new REST API in API Gateway, added the `/tasks` resource, and integrated it with the Lambda function.
   - Enabled CORS on the `/tasks` resource.
   - Deployed the API to a stage (e.g., `dev`) and verified the API response by accessing the full endpoint:
     ```
     https://<api-id>.execute-api.<region>.amazonaws.com/dev/tasks
     ```

3. **Day 3: Frontend Integration, Testing, and Documentation**
   - Updated `index.html` to include JavaScript that fetches tasks from the API and displays them.
   - Committed these changes to the repository.
   - Re-uploaded the updated `index.html` to the S3 bucket.
   - Performed end-to-end testing by verifying the site (after a hard refresh) shows a list of tasks:
     - **Learn AWS**
     - **Build a serverless app**
   - Updated the project documentation with a summary of the steps and testing outcomes.

## Testing and Verification

- **S3 Frontend:**  
  Visit the S3 website endpoint (e.g., `http://my-task-manager-syco.s3-website.us-east-2.amazonaws.com/`) to see the updated page.
  
- **API Verification:**  
  Access the API endpoint `https://<api-id>.execute-api.us-east-2.amazonaws.com/dev/tasks` in your browser or via Postman to confirm the JSON output.

- **Browser Developer Tools:**  
  Use the Console and Network tabs to verify that the fetch request is made correctly and that no CORS errors or JavaScript issues occur.

## Future Enhancements

- Implement functionality to add, update, and delete tasks.
- Integrate a database like DynamoDB for persistent storage.
- Enhance the frontend using a modern framework like React or Vue.js.
- Set up a CI/CD pipeline using AWS CodePipeline for automated deployments.


