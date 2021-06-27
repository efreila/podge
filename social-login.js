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

  const currentUrl = window.location.href;

  if (window.podgeApp.isLoginPage(currentUrl)) {
    window.podgeApp.addSocialLoginButtonsToLoginPage();
  } else if (window.podgeApp.isRegisterPage(currentUrl)) {
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

window.podgeApp.fetchSocialLoginConfigurations = async () => {
  try {
    const response = await fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                  query GetSocialLoginConfigurations($hostname: String) {
                      socialLoginConfigurations(hostname: $hostname) {
                        id
                        isEnabled
                        provider
                      }
                    }
                    `,
        variables: {
          hostname: "podge-test.myshopify.com",
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (!window.podgeApp.data || typeof window.podgeApp.data == "undefined") {
      window.podgeApp.data = {};
    }

    window.podgeApp.data.socialLoginConfigs =
      data.data.socialLoginConfigurations;
  } catch (error) {
    console.error(error);
  }
};

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(async () => {
  console.log("Fetching social login configurations...");
  await window.podgeApp.fetchSocialLoginConfigurations();

  window.podgeApp.addSocialLoginButtons();
});
