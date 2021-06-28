window.podgeApp.addSocialLoginButtonPlaceholders = () => {
  //   window.podgeApp.replaceCustomDivs();

  const forms = document.querySelectorAll(
    "form[action='/account/login']",
    "form[action='/account']"
  );

  forms.forEach((item) => {
    const placeholderDiv = document.createElement("div");
    placeholderDiv.className = "podge-social-login";
    item.appendChild(placeholderDiv);
  });
};

// window.podgeApp.replaceCustomDivs = () => {
//   const customSocialLoginDivs = document.querySelectorAll(
//     ".podge-social-login"
//   );

//   customSocialLoginDivs?.forEach((item) => {
//     item.replaceWith("Replaced Item");
//   });
// };

// Runs when document has loaded (function is declared in bootstrap.js)
podgeDocReady(async () => {
  window.podgeApp.addSocialLoginButtonPlaceholders();
});
