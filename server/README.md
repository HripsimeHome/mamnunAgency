# Server Documentation

## How to Start the Server

##### To start the server, follow these steps:

1. Start the MySQL server.

2. **Install the required modules for the server:**

   - Open the server folder in the terminal (`/server`).
   - Run the command:
     ```bash
     npm install
     ```

3. **Update the database configuration in the `config.env` file:**

   - Ensure that the following variables have the correct values:
     - `DB_USERNAME`: database username
     - `DB_PASSWORD`: database password
     - `DB_HOST`: database host
     - `DB_NAME`: database name
     - `CLIENT_HOST`: client host (e.g., https://www.mamnun-agency.com/)
     - `GMAIL_USERNAME`: Gmail address used to send password change notifications
     - `GMAIL_PASSWORD`: Gmail password, which can be generated using this link: https://myaccount.google.com/apppasswords

4. **Start the Node.js server:**

   - To start the server, run the command:
     ```bash
     npm start
     ```
   - To run in development mode, use:
     ```bash
     npm run dev
     ```

5. **Check the terminal output:**
   - After starting, you should see the following text in the terminal:
     ```
     Database & tables created!
     ```

## File Structure

#### server.js

###### This file is responsible for setting up and running the Node.js server, connecting to the database, and handling critical errors such as uncaught exceptions and rejected promises.

**Handling Uncaught Exceptions**

    process.on("uncaughtException", (err) => {
      process.exit(1);
    });

- _uncaughtException_: This block of code catches uncaught exceptions that occur in synchronous code. If such an exception occurs, the server process exits with code 1, indicating an error.

**Database Connection**

    db.sync({ force: false })
      .then(() => {
        console.log("Database & tables created!");
      })
      .catch((error) => console.error("Unable to connect to the database:", error));

- _db.sync({ force: false })_: Synchronizes models with the database. The parameter force: false indicates that existing tables will not be recreated. If synchronization is successful, the message "Database & tables created!" is displayed. In case of an error, an error message is shown.

**Starting the Server**

    const port = process.env.PORT || 5000;
    const server = app.listen(port, () =>
      console.log(`App is running on port ${port}`)
    );

- _port_: Sets the port on which the server will run. The port is taken from environment variables or defaults to 5000.
- _app.listen(port, ...)_: Starts the server on the specified port and logs a message to the console that the server is successfully running.

---

#### app.js

###### This file contains the main configuration code for running the Express.js application, including setting up various middleware and routes. The application uses several popular libraries for security, request rate limiting, and error handling.

**Initializing the Express Application**

    export const app = express();

Creates an instance of the Express application and exports it for use in other parts of the application.

**Security and Middleware**

    // add headers for security
    app.use(helmet());

- _Helmet_: Sets various HTTP headers to enhance the security of the application.

  app.use(cors());

- _CORS_: Allows your application to handle requests from other domains.

  app.use(express.json());
  app.use(bodyParser.text({ type: "/" }));

- _Body-parser_ and _express.json()_: These middleware are used to parse incoming requests in JSON and text formats.

  // limit requests
  const limiter = rateLimit({
  max: 100,
  windowMs: 60 _ 60 _ 1000,
  message: "Too many requests from this IP, please try again in an hour",
  });
  app.use("/api", limiter);

- _Rate Limiter_: Limits the number of requests from a single IP address to prevent server overload and protect against attacks.

  // disabling html sending
  app.use(xss());

- _XSS Protection_: Protects against XSS attacks by filtering user input.

  // prevent multiple parameters
  app.use(
  hpp({
  whitelist: [],
  })
  );

- _HPP_: Protects against attacks with multiple parameters by allowing only unique parameters in requests.

**Serving Static Files**

    app.use("/api", express.static("public"));

Serves static files from the **public** directory.

**Defining Routes**

    app.use("/api/v1/users", userRouter);

Defines the main routes for handling API requests such as users, equipment, locations, and properties. Each route is connected to the corresponding routing module.

**Handling Non-existent Routes**

    app.all("*", (req, res, next) => {
      next(new AppError(`Can't find ${req.originalUrl} in this server`, 404));
    });

This middleware handles all requests that were not caught by previously defined routes. If a route is not found, a 404 error is generated with an appropriate message.

**Global Error Handling**

    app.use(globalErrorHandler);

This integrates a global error handler that processes all errors occurring in the application and sends the appropriate response to the client.

---

#### config.env

The **config.env** file contains environment variables used for configuring various aspects of your application. These variables allow flexible configuration of the project without changing the source code. Here is a brief description of each variable:

PORT=5000
The port on which your application server runs. In this case, the server will run on port 5000.

NODE_ENV=development
Variable defining the mode of operation for the application. In this case, it is set to development, which means the application is running in development mode. This affects logs, errors, and other development-specific parameters.

- DB_USERNAME=sql12728968
  The username for connecting to the database.
- PASSWORD=1fNEZtyeKy
  The password for connecting to the database.
- DB_HOST=sql12.freesqldatabase.com
  The database host address to which your application connects.
- DB_NAME=sql12728968
  The name of the database to connect to.
- JWT_SECRET=this-is-non-programming-code
  A secret key for signing and validating JSON Web Tokens (JWT). This key should be complex and random to ensure the security of tokens.
- PAGE_SIZE=24
  Page size for pagination in database or API queries. Defines the number of items displayed on one page.

---

#### /src

The **src** folder contains the main source code of the project. This directory holds all the modules and utilities necessary for the application's operation.

---

#### /src/constants

The **constants** directory is used for storing immutable values and constants applied in the application. These might include error messages, numeric values such as time intervals, or other constants that are frequently used in the code and should be centralized.

---

#### /src/controllers

The **controllers** directory contains controllers that manage the logic for handling requests and responses. Controllers describe how the application should respond to certain routes (e.g., creating, reading, updating, deleting data). These files implement the core business logic of your application.

---

#### /src/controllers/errorController.ts

## This file contains functions and logic for handling errors occurring in the application. It includes a global error handler and several helper functions for dealing with various types of errors. These functions help determine how to handle errors based on the environment (development or production) and error type (e.g., validation errors, database errors, JWT errors, etc.).

#### /src/definitions

The **definitions** directory is used for storing TypeScript type definitions and interfaces applied in the project. This can include type declaration files for models, DTOs (Data Transfer Objects), interfaces for services, and other types that help structure and type the data in the application.

---

#### /src/models

The **models** directory contains database model files. Models represent the structure of database tables and manage interactions between application code and data. Models describe the properties of entities, their data types, and relationships between different models.

---

#### /src/routes

The **routes** directory holds the routes for your application. Routes define how client requests are mapped to controllers.

---

#### /src/utils

The **utils** directory contains helper functions and utilities used in various parts of the application. These functions might include error handling, date manipulation, string manipulation, and other reusable logic blocks that are independent of business logic.

---

#### /src/sharp.ts

This file provides a function for resizing images using the **sharp** library.

- resizeImage(file: string, toFile: string, sizes: [number, number]):
  - **Parameters**:
    - **file**: Path to the source image file.
    - **toFile**: Path to save the resized image.
    - **sizes**: Array containing width and height for resizing (default [800, 500]).
  - **Description**: This function uses sharp to resize the image to the specified dimensions and saves it to the specified path. If an error occurs, it logs an error message to the console.

---

#### /src/multer.ts

This file defines configurations for file uploads using the **multer** library.

- multerStorage:
  - **Description**: File storage configuration. Depending on the route and file type (video or image), the destination folder and filename are determined.
  - **multerFilter**:
    **Description**: Filter that checks the type of uploaded file (only images and videos are allowed). If the file type is unsupported, an error is returned.
  - **uploadImage**:
    - **Description**: Configures multer for uploading images and videos.
    - **File size limit** — 5 MB.

---

#### /src/files.ts

This file contains a function for deleting files from the file system.

- deleteFiles(files: string[]):
  - **Parameters**:
    - **files**: Array of strings containing paths to the files to be deleted.
  - **Description**: The function iterates through each file in the array and removes it using **fs.unlink**. If an error occurs while deleting a file, it logs an error message to the console.

---

#### /src/crypto.ts

This file provides a utility for creating hashed tokens using the crypto library.

- createHashedToken(token: string):
  - **Parameters**:
    - **token**: The token string to be hashed.
  - **Description**: This function hashes the given token using the SHA-256 algorithm and returns it as a hexadecimal string.

---

#### /src/catchAsync.ts

This file provides a wrapper function for asynchronous functions to simplify error handling.

**catchAsync(fn: AsyncFuncType<Promise<void>>):**

- **Parameters:**
  - **fn**: An asynchronous function that takes Request, Response, and NextFunction from Express.
  - **Description**: This wrapper function catches errors occurring in the asynchronous function and passes them to `next`, thus avoiding the need to use try/catch blocks in every route.

---

#### /src/appError.ts

This file contains a custom error class used for creating and handling errors in the application.

**IAppError**:

- **Description**: An interface defining the structure of the custom error.
- **AppError**:
  - **Constructor Parameters**:
    - **message**: The error message.
    - **statusCode**: HTTP status code (default is 500).
    - **errors**: Additional error details as an object (default is an empty object).
  - **Description**: This class extends the built-in Error class, adding additional properties such as **statusCode**, **status**, **isOptional**, and **errors**. It also automatically captures the error stack for easier debugging.

---

#### /src/db.ts

The **db.ts** file handles the setup and management of the database connection using Sequelize ORM. It loads connection parameters from environment variables and initializes the database connection used throughout the application.

**Loading Configuration from .env File**

    dotenv.config({ path: "./config.env" });

- This **config** function call loads environment variables from the **config.env** file into the current process. This provides access to variables such as **DB_NAME**, **DB_HOST**, **DB_USERNAME**, and **PASSWORD** via `process.env`.

Initializing Connection Variables

    const dbName = process.env.DB_NAME || "";
    const dbHost = process.env.DB_HOST || "";
    const dbPassword = process.env.PASSWORD || undefined;
    const dbUsername = process.env.DB_USERNAME || "";

- _dbName_: The name of the database to connect to, taken from the DB_NAME environment variable.
- _dbHost_: The database host address specified in the DB_HOST environment variable.
- _dbPassword_: The password for connecting to the database, taken from the PASSWORD environment variable. If not specified, it defaults to undefined.
- _dbUsername_: The username for connecting to the database, taken from the DB_USERNAME environment variable.

**Setting Up the Database Connection**

    const db = new Sequelize(dbName, dbUsername, dbPassword, {
      host: dbHost,
      dialect: "mysql"
    });

**Sequelize**: Creates an instance of Sequelize representing the database connection.

**Exporting the Connection**

    export { db };

_export { db }_: Exports the created database connection for use in other parts of the application.

---

#### package.json

The **package.json** file contains metadata about your project and a list of all dependencies required for its operation. It also specifies scripts for running, building, and testing the project, the project version, author, and other important settings such as the main entry point of the application.

#### package-lock.json

The **package-lock.json** file locks the exact versions of all installed dependencies and their dependencies. This ensures that all developers have the same dependency structure when reinstalling packages, contributing to project stability and predictability.

#### tsconfig.json

The **tsconfig.json** file contains configuration for the TypeScript compiler (tsc). It specifies compilation settings such as ECMAScript version, source file paths, module usage, strict typing support, and the output directory for compiled files.

#### nodemon.json

The **nodemon.json** file contains configuration for the Nodemon utility, which automatically restarts the server when source files change. It allows setting file watch paths, restart commands, and environment parameters.

#### public

The **public** directory contains static files served directly by the server.

#### dist

The **dist** directory (short for "distribution") contains compiled project files ready for deployment. It includes JavaScript files compiled from TypeScript.

#### @types

The **@types** directory contains TypeScript declaration files for external modules and packages that do not have built-in types. These files allow TypeScript to type-check and provide code completion for libraries used in the project.

#### node_modules

The **node_modules** directory contains the project's installed dependencies. These are all the libraries and modules necessary for your application to function, downloaded from npm (Node Package Manager). This directory should not be manually edited and is typically excluded from version control (e.g., in .gitignore).

## Authentication

#### Authentication in the Node.js server application is implemented using Bearer tokens.

This method ensures that access to protected resources is granted only to authorized users. For each request to protected routes, the client sends the token in the **Authorization** header.

## Administrator Signup

To sign up an administrator, follow these steps:

1. **Send a POST request** to the following route:
2. **Include a JSON body** with the following structure:

```json
{
  "email": "someEmail@gmail.com", // This email can be used for resetting the password
  "password": "somePassword",
  "passwordConfirm": "somePassword"
}
```
