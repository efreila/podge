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

window.podgeApp.generateSocialLoginButtons = () => {
  const socialLoginConfigs = window.podgeApp?.data?.socialLoginConfigs;
  const socialLoginButtonsContainer = document.createElement("div");

  socialLoginConfigs.forEach((config) => {
    if (!config.isEnabled) return;

    window.podgeApp.generateSocialLoginButton(config);
  });
};

window.podgeApp.generateSocialLoginButton = (socialLoginConfig) => {
  switch (socialLoginConfig.provider) {
    case "GOOGLE":
      console.log("Adding Google social login button");
      window.podgeApp.createGoogleSocialLoginButton();
      break;

    default:
      break;
  }
};

window.podgeApp.createGoogleSocialLoginButton = () => {
  //Step 1: Add necessary meta tag
  const metaTag = document.createElement("meta");
  metaTag.name = "google-signin-client_id";
  metaTag.content =
    "945808926799-netcei3f5cp835o32p2bd62up528o460.apps.googleusercontent.com.apps.googleusercontent.com";

  //Step 2: Add necessary script tag
  //  window.podgeApp.loadScript("https://apis.google.com/js/platform.js?onload=renderButton", () => {
  window.podgeApp.loadScript("https://apis.google.com/js/platform.js", () => {
    console.log("Loaded Google API");
  });

  document.head.appendChild(metaTag);
};

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(async () => {
  console.log("Fetching social login configurations...");
  // Step 1: Fetch social login configuration data
  await window.podgeApp.fetchSocialLoginConfigurations();

  // Step 2: Generate social login buttons
  const socialLoginButtons = window.podgeApp.generateSocialLoginButtons();

  // Step 3: Append buttons
  window.podgeApp.addSocialLoginButtons(socialLoginButtons);
});
