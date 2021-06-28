window.podgeApp.addSocialLoginButtonPlaceholders = () => {
  const forms = document.querySelectorAll(
    "form[action='/account/login'], form[action='/account']"
  );

  forms.forEach((item) => {
    const placeholderDiv = document.createElement("div");
    placeholderDiv.className = "podge-social-login";
    item.appendChild(placeholderDiv);
  });
};

window.podgeApp.replacePlaceholderDivs = () => {
  window.podgeApp.addSocialLoginWidgetJS();
  window.podgeApp.addSocialLoginWidgetStyles();
};

window.podgeApp.addSocialLoginWidgetJS = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://d765dxpbqwh1m.cloudfront.net/SocialLoginWidget/podge-social-login-widget.esm.js";
  script.type = "module";

  document.head.appendChild(script);
};

window.podgeApp.addSocialLoginWidgetStyles = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://d765dxpbqwh1m.cloudfront.net/SocialLoginWidget/style.css";

  document.head.appendChild(link);
};

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(async () => {
  window.podgeApp.addSocialLoginButtonPlaceholders();
  window.podgeApp.replacePlaceholderDivs();
});
