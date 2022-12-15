const config = {
  translations: {
    en: {
      "Auth.form.button.login.strapi": "Log in via Riverside Admin",
      "Auth.form.welcome.subtitle": "Log in to your Riverside Admin account",
      "Settings.application.strapi-version": "strapi version",
      "Settings.application.strapiVersion": "strapi version",
      "Settings.permissions.users.listview.header.subtitle":
        "All the users who have access to the Riverside Admin panel",
      "app.components.LeftMenu.navbrand.title": "Riverside Admin",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
