# session-auth-nodejs

A session authorization service (for development).

## Getting Started

### NOTE: You must have a local database installed on your laptop that is compatible with the NPM package Sequelize. If you're not using Postgres, then be sure to NPM install, in this repository's root directory, the Sequelize driver needed for your particular local database. Currently, this repository has the 'pg' driver installed, so you may need to NPM uninstall this package ('pg'), and NPM install the driver you'll be needing. For more details, see https://sequelize.org/master/manual/getting-started.html.

1. Clone this repository.
2. In the root of this repository, run NPM install.
2. Create an .env file for your environment variables.
  - DB_NAME: Set equal to the database name you wish to connect to.
  - DB_USER: Set equal to the database username you wish to connect as.
  - DB_PASSWORD: Set equal to the database password for the username you wish to connect as.
  - DB_DIALECT: Set equal to the database dialect that makes sense for your set up. I used 'postgres'.


## Repository Structure

1. database
  - index.js: Instantiates the db connection.
  - models/session.js: Instantiates a Sequelize model that interacts with the database table.
2. server
  - index.js: Instantiates the server, plugs in the middleware, and sets up the routes.
  - api/authRouter.js: Handles interaction with the signup/login pages.
  - api/homeRouter.js: Handles interaction with the home page.
  - middleware/sessionAuth.js: Middleware functions for creating and verfying a session. 
  - lib/hash.js: Utility function for creating a hash.
3. views
  - layout.ejs: Reusable html template for all pages.
  - pages/index.ejs: Html for home page.
  - pages/login.ejs: Html for login page.
  - pages/signup.ejs: Html for signup page.
