# NextJS - Login form using server actions, strapi, formik and yup.

## Getting Started

First we must perform an installation of Strapi, you can use the type of database you like, in the case of this project I used SQLite.

```bash
npm create-strapi-app project-name
# or
yarn create strapi-app project-name
# or
pnpm create strapi-app project-name
```

For the NextJS part of the project, just clone this repository and run the following commands in the terminal.

```bash
npm install
# or
yarn
# or
pnpm install
```

And then

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

At this point the project should start but not work if you try to set the login data you created in strapi, to do this just create the .env.local file in the root of our NextJS project and configure it as follows:

```sh
STRAPI_ENPOINT="Strapi api url"
# If you are working locally this is http://localhost:1337/api or http://127.0.0.1:1337/api
```

Once this is configured, you can test the login to receive the response given by strapi in the app.

You should receive the following responses.

```json
{
  "type": "AUTH_SUCCESS",
  "data": {
    "jwt": "your-sesion-jwt",
    "user": {
      "id": 1,
      "username": "username",
      "email": "example@example.com",
      "confirm": true,
      "blocked": false
    }
  }
}
```

Or

```json
{
  "type": "AUTH_ERROR",
  "error": {
    "status": 400,
    "message": "Invalid identifier or password"
  }
}
```

And that would be all, feel free to test or modify my code, and I apologize for my bad english.

See you next time! Chao!
