# Tech-Quiz-Test-Suite
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)

  ## Description
  Enhance a fully functioning Tech Quiz application by integrating Cypress for both component and end-to-end testing. The application, built on the MERN stack, allows users to take a quiz of ten randomized tech questions and view their final score.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies](#technologies)
  - [Walkthrough Video](#walkthrough-video)
  - [URL Link](#url-link)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)

  ## Installation
  
  1. Git clone: https://github.com/jyotikanwarhr/CI-CD_setup

  2. Navigate to the project directory: cd Tech-Quiz-Test-Suite

  3. Right click the root package.json file and click open in integrated terminal

  4. Inside the terminal install the dependencies with the command: npm i

  5. After the dependencies are installed run the command: npm run build

  6. After dependencies are installed and your app is built run the application with two different commands in two different termianls because they need to run at the same time. In your first terminal run the command: npm run cypress and in a new terminal run the command: npm run start:dev this will allow you to run and test the application.

  ## Usage
1. To run the Tech Quiz test suite and application locally:

2. Start your application server in one terminal:

    npm run dev

3. In a separate terminal, launch Cypress:

    npm run cypress

4. When the Cypress window appears, select either E2E Testing or Component Testing.

5. Click Start E2E Testing in Electron or Start Component Testing in Electron to open the test runner.

6. In the test runner, choose the desired spec file to execute. Passing tests appear in green; failures in red.

7. To debug failing E2E tests, open cypress/e2e/quiz.cy.js, verify the correct cy.visit("http://localhost:3000") URL, and review fixtures in cypress/fixtures.

8. To adjust component tests, edit cypress/component/Quiz.cy.jsx, ensure components are mounted correctly (e.g., cy.mount(<Quiz />)), and update fixtures as needed.

  ## Technologies

 ### Frontend
 ![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![JavaScript Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Vite Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Backend
![Node.js Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Express.js Badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![npm Badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![Cypress Badge](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)

![Vitest Badge](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)

![Concurrently Badge](https://img.shields.io/badge/Concurrently-000000?style=for-the-badge&logo=concurrently&logoColor=white)

![Wait-on Badge](https://img.shields.io/badge/Wait--on-000000?style=for-the-badge&logo=wait-on&logoColor=white)


  ## Walkthrough Video
  A demo of the application can be found at the following link: 

  ## URL Link
  There is no URL link to this application
  
  ## Contributing
  No contributions are needed for this project

  ## Tests
The Tech Quiz Test Suite uses Cypress for component and end-to-end testing.
 
Run the full Cypress test suite:

npm run test

Component tests: cypress/component/Quiz.cy.jsx

End-to-end tests: cypress/e2e/quiz.cy.js

  ## License
  This project is licensed under the MIT license.
