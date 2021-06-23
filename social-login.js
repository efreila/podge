class PodgeAppSocialLogin {
  static instance;

  constructor() {
    if (PodgeAppSocialLogin.instance) {
      return PodgeAppSocialLogin.instance;
    }

    PodgeAppSocialLogin.instance = this;
  }

  addSocialLoginButtons() {
    const socialLoginButtonsAdded = this.replaceCustomDivs();

    if (socialLoginButtonsAdded) return;

    if (window.location.href.indexOf("login") !== -1) {
      this.addSocialLoginButtonsToLoginPage();
    } else if (window.location.href.indexOf("register") !== -1) {
      this.addSocialLoginButtonsToRegisterPage();
    }
  }

  replaceCustomDivs() {
    const customSocialLoginDivs = document.querySelectorAll(
      ".podge-social-login"
    );

    if (customSocialLoginDivs.length === 0) return false;

    customSocialLoginDivs.forEach((item) => {
      item.replaceWith("Replaced Item");
    });

    return true;
  }

  addSocialLoginButtonsToLoginPage() {
    const loginForm = document.querySelector("form[action='/account/login']");
    const testBtn = document.createElement("button");
    testBtn.innerHTML = "LOGIN";
    loginForm.appendChild(testBtn);
  }
  addSocialLoginButtonsToRegisterPage() {
    const registerForm = document.querySelector("form[action='/account']");
    const testBtn = document.createElement("button");
    testBtn.innerHTML = "REGISTER";
    registerForm.appendChild(testBtn);
  }
}

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(() => {
  console.log("log from social-login.js");
  const podgeApp = new PodgeApp(window.location.href);
  const podgeAppSocialLogin = new PodgeAppSocialLogin();

  podgeAppSocialLogin.addSocialLoginButtons();
});

//   if (customSocialLoginDivs) {
//     for (const item of customSocialLoginDivs) {
//       const formActionAttribute = form.getAttribute("action");

//       if (formActionAttribute?.indexOf("account") !== -1) {
//         loginForms.push(form);
//       }
//     }
//   }
