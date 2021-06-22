// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(() => {
  console.log("log from social-login.js");
  const podgeApp = new PodgeApp(window.location.href);
  const forms = podgeApp.getForms();
  console.log(forms);
  console.log("new new");

  // if (podgeApp.isLoginPage()) console.log("hello from login :)");
});
