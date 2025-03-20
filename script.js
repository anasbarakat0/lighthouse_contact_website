// Contact data
const contactItems = [
    {
      icon: "fa-solid fa-globe",
      title: "Website",
      detail: "lighthouse-hub.com",
      url: "https://lighthouse-hub.com",
    },
    {
      icon: "fa-solid fa-location-dot",
      title: "Location",
      detail: "maps.google.com",
      url: "https://maps.app.goo.gl/RZYsT2vbMD8Ka5yH70",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      detail: "cws.lighthouse@gmail.com",
      url: "mailto:cws.lighthouse@gmail.com",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      detail: "+963113110293",
      url: "tel:+963113110293",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Mobile",
      detail: "+963949879873",
      url: "tel:+963949879873",
    },
    {
      icon: "fa-solid fa-comment-sms",
      title: "SMS",
      detail: "963949879873",
      url: "sms:963949879873",
    },
    {
      icon: "fa-brands fa-whatsapp",
      title: "WhatsApp",
      detail: "+963949879873",
      url: "https://wa.me/963949879873",
    },
    {
      icon: "fa-brands fa-instagram",
      title: "Instagram",
      detail: "LightHouse Coworking Space",
      url: "https://www.instagram.com/mhd_anas_barakat",
    },
    {
      icon: "fa-brands fa-facebook",
      title: "Facebook",
      detail: "LightHouse Coworking Space",
      url: "https://www.facebook.com/",
    },
    {
      icon: "fa-brands fa-telegram",
      title: "Telegram",
      detail: "@Anas_ba_15",
      url: "https://t.me/Anas_ba_15",
    },
  ];
  
  // Function to generate contact cards
  function generateContactCards() {
    const grid = document.getElementById("contact-grid");
    contactItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("contact-card");
  
      card.innerHTML = `
        <div class="icon-container">
          <i class="icon ${item.icon}"></i>
        </div>
        <div class="content">
          <div class="title">${item.title}</div>
          <div class="detail">${item.detail}</div>
        </div>
        <i class="arrow fa-solid fa-chevron-right"></i>
      `;
  
      card.addEventListener("click", () => window.open(item.url, "_blank"));
      grid.appendChild(card);
    });
  }
  
  // Initialize the app
  document.addEventListener("DOMContentLoaded", generateContactCards);