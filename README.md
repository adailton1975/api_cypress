# cypress_cucumber

## Description
This project uses Cypress and the Cypress Cucumber preprocessor for testing. It includes a login feature that allows users to log in and interact with the application.

## Installation Instructions
### Prerequisites
- Node.js
- npm

### Steps to Install Dependencies
Run the following command to install the necessary dependencies:
```
npm install
```

## Usage
To run the tests, use one of the following commands:
```
npx cypress open
```
or
```
npx cypress run
```

## Features
- **Login Feature**: 
  - Valid Login Scenario:
    - Given I am on the login page
    - When I enter valid credentials
    - And I should be logged in
    - And I search for a product
    - And I add the product to the cart
    - Then I should see the product in the cart

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions.

## License
This project is licensed under the ISC License.
