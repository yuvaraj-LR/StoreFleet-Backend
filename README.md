# Storefleet-API

Storefleet-API is a backend project built using Node.js, Express, and MongoDB. It serves as the backend infrastructure for an online products delivery platform. This project is currently in the building stage and provides routes for user management, product management, and order processing.

## Features

- **User Management:** CRUD operations for managing user accounts, including registration, login, profile updates, and authentication using JWT tokens.
- **Product Management:** APIs for managing products, including CRUD operations for adding, updating, deleting, and fetching product details.
- **Order Processing:** APIs for placing and managing orders, including order creation, order status updates, and order history retrieval.

## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.
- **Express:** Web application framework for Node.js, providing robust features for building APIs.
- **MongoDB:** NoSQL database used for storing user data, product information, and order details.
- **Mongoose:** MongoDB object modeling tool for Node.js, providing a straightforward schema-based solution for interacting with MongoDB databases.
- **bcrypt:** Library for hashing passwords securely.
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens (JWT) for user authentication.
- **nodemailer:** Library for sending emails, used for functionalities like password reset and order confirmation.
- **validator:** Library for data validation and sanitization, ensuring data integrity and security.

## Installation

1. Clone the repository:
  
  ``` git clone https://github.com/your-username/Storefleet-API.git ```

2. Install dependencies:

  ``` npm i ```

3. Set up environment variables:

  ```
    PORT=3000
    mongoURI=MONGODB_LINK
    JWT_Secret=YOUR_SECERET_KEY
    JWT_Expire=1d
    COOKIE_EXPIRES_IN=1
    STORFLEET_SMPT_MAIL=YOUR_EMAIL
    STORFLEET_SMPT_MAIL_PASSWORD=YOUR_APP_PASSWORD
    SMPT_SERVICE=gmail
    STORFLEET_MAIL=YOUR_EMAIL
  ```

4. Start the server:

  ``` npm start ```



