module.exports = function(lineman) {

  return {
    js: {
      vendor: [
        "vendor/js/angular/angular.js",
        "vendor/js/jQuery.js",
        "vendor/js/underscore.js",
        "vendor/js/bootstrap/tooltip.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/controllers/home_controller.js",
        "app/js/controllers/login_controller.js"
      ]
    },

      less: {
          main: [
              "vendor/css/bootstrap/bootstrap.less",
              "app/css/bootstrap_override.less",
              "app/css/main.less"
          ],
          app: "app/css/**/*.less",
          vendor: "vendor/css/**/*.less",
          generated: "generated/css/app.less.css",
          compile: {
              options: {
                  paths: ["vendor/css/normalize.css", "vendor/css/**/*.css","", "app/css/**/*.less"]
              }
          }
      }

  };
};
