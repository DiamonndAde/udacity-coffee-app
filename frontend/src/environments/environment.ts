/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: "http://127.0.0.1:5000", // the running FLASK api server url
  auth0: {
    url: "dev-6ercarhu.us", // the auth0 domain prefix
    audience: "CoffeeApi", // the audience set for the auth0 app
    clientId: "TP6sTtOL0qLe7Z64pbS36L1SPgI0LafR", // the client id generated for the auth0 app
    callbackURL: "http://localhost:8100", // the base url of the running ionic application.
  },
};
