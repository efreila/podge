window.podgeApp.addSocialLoginButtonsToLoginPage = () => {
  const loginForm = document.querySelector("form[action='/account/login']");
  const testBtn = document.createElement("button");
  testBtn.innerHTML = "LOGIN";
  loginForm.appendChild(testBtn);
};

window.podgeApp.addSocialLoginButtonsToRegisterPage = () => {
  const registerForm = document.querySelector("form[action='/account']");
  const testBtn = document.createElement("button");
  testBtn.innerHTML = "REGISTER";
  registerForm.appendChild(testBtn);
};

window.podgeApp.addSocialLoginButtons = () => {
  window.podgeApp.replaceCustomDivs();

  if (window.location.href.indexOf("login") !== -1) {
    window.podgeApp.addSocialLoginButtonsToLoginPage();
  } else if (window.location.href.indexOf("register") !== -1) {
    window.podgeApp.addSocialLoginButtonsToRegisterPage();
  }
};

window.podgeApp.replaceCustomDivs = () => {
  const customSocialLoginDivs = document.querySelectorAll(
    ".podge-social-login"
  );

  customSocialLoginDivs?.forEach((item) => {
    item.replaceWith("Replaced Item");
  });
};

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(() => {
  console.log("log from social-login.js");
  window.podgeApp.addSocialLoginButtons();
});
