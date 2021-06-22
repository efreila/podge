// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(() => {
  console.log("log from social-login.js");
  const podgeApp = new PodgeApp(window.location.href);

  // if (podgeApp.isLoginPage()) console.log("hello from login :)");
});

// var getCreateAccountForm = function (html) {
//   if (!!html) {
//     var forms = html.find("form");
//   } else {
//     var forms = $("form:visible");
//   }

//   var loginForms = [];
//   for (var i = 0; i < forms.length; i++) {
//     var form = $(forms[i]);
//     action = form.attr("action");

//     if (action && action.indexOf("account") !== -1) {
//       loginForms.push(form);
//     }
//   }
//   return loginForms;
// };
