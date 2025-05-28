document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("languageSwitcher");

  if (!languageSwitcher) return;

  languageSwitcher.addEventListener("change", function () {
    const selectedLang = this.value;
    const content = translations[selectedLang];

    if (!content) return;

    // Hero Section
    const heroTitle = document.querySelector(".hero-text h1");
    const heroDesc = document.querySelector(".hero-text p");
    if (heroTitle) heroTitle.innerHTML = content.heroTitle;
    if (heroDesc) heroDesc.innerHTML = content.heroDesc;

    // About Section
    const aboutTitle = document.querySelector(".about-text h2");
    const aboutParas = document.querySelectorAll(".about-text p");
    if (aboutTitle) aboutTitle.innerHTML = content.aboutTitle;
    if (aboutParas.length >= 3) {
      aboutParas[0].innerHTML = content.aboutPara1;
      aboutParas[1].innerHTML = content.aboutPara2;
      aboutParas[2].innerHTML = content.aboutPara3;
    }

    // Features Section
    const featuresTitle = document.querySelector("#features h2");
    const featureBoxes = document.querySelectorAll(".feature-box");
    if (featuresTitle) featuresTitle.innerText = content.featuresTitle;
    content.features.forEach((feature, index) => {
      const box = featureBoxes[index];
      if (box) {
        const title = box.querySelector("h3");
        const desc = box.querySelector("p");
        if (title) title.innerText = feature.title;
        if (desc) desc.innerText = feature.desc;
      }
    });

    // Pricing Section
    const pricingTitle = document.querySelector("#pricing h2");
    const pricingCards = document.querySelectorAll(".pricing-card");
    if (pricingTitle) pricingTitle.innerText = content.pricingTitle;
    content.pricing.forEach((plan, index) => {
      const card = pricingCards[index];
      if (card) {
        const name = card.querySelector("h3");
        const price = card.querySelector(".price");
        const benefits = card.querySelectorAll("ul li");
        const button = card.querySelector(".price-btn");

        if (name) name.innerText = plan.name;
        if (price) price.innerHTML = `${plan.price}<span>/month</span>`;
        plan.benefits.forEach((b, i) => {
          if (benefits[i]) benefits[i].innerText = b;
        });
        if (button) button.innerText = plan.button;
      }
    });
  });
});
