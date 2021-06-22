// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(() => {
  console.log("log from social-login.js");
  const podgeApp = new PodgeApp(window.location.href);
  const loginForm = podgeApp.getLoginForm();
  console.log(loginForm);

  // if (podgeApp.isLoginPage()) console.log("hello from login :)");
});
