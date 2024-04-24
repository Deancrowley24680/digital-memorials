# Digital Memorials

The aim of Digital Memorials is to modernise Ireland’s rich tradition of remembering those who have passed. Building upon what is already out there, each app produced from the developed architecture in this project will aim to create an original and custom space online that anyone can visit and contribute to. It can be a private area for people to remember their loved ones while also a community of people, uploading and collecting memories on the domain of the namesake.\

The current iteration based on this GitHub repo is avaialable @ https://www.john-smith.rip/

## Academic Title

A React, Cloud Based, Web Application for the 'Digital Memorials' Toolkit Service

## Features

Once users register an account, they have the ability to do the following:

* Create a Condolence on the Book of Condolences
* Add a Memory to the Memory Wall
* Leave Replies to Other Memories

## Technologies Used

These are the technologies used in this project:

### Front-End

* React: React is a powerful library for building user interfaces. It will be the main front-end technology.
* CSS: For structuring and styling the web pages.
* JavaScript/TypeScript: For scripting and adding interactivity to the web app.
* Node.js: Used to manage dependencies and run scripts through Node Package Manager. 

### Back-End

* Amazon Route 53: For domain registration and DNS management (e.g., “john-smith.rip”).
* AWS Amplify: Integrates with React for easy deployment and provides features like authentication, GraphQL API, analytics, etc.
* Amazon S3: For storing and retrieving the uploaded content, like images.
* Amazon API Gateway: For creating, publishing, maintaining, monitoring, and securing APIs.
* AWS Cognito: For user authentication and user management.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## References

The following is a list of online resources used to aid development:

* AWS React Tutorial: Setting up notes application using the same technologies. Fixes were uploaded to AWS forum. Found @ https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/
* GraphQL Schema Documentation: Setting up schema beyond tutorial. Found @ https://graphql.org/learn/schema/ & https://docs.aws.amazon.com/appsync/latest/devguide/schema-components.html
* AWS Amplify Documentation: Building the application using AWS Amplify integrations. Found @ https://docs.amplify.aws/react/start/
* GitHub Copilot: Troubleshooting and formatting files. Found @ https://github.com/features/copilot
* Other Documentation: Other websites were used briefly for reference / explanation. 
