window.onload = () => {
    document.querySelector(".menu_mobile").addEventListener("click", () => {
      document.querySelector(".menu nav ul").style.display === "flex"
        ? (document.querySelector(".menu nav ul").style.display = "none")
        : (document.querySelector(".menu nav ul").style.display = "flex");
    });
  };