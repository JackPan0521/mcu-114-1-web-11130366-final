function openMenu() {
  var menuBtn = document.getElementById("menu");

  if (menuBtn && menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else if (menuBtn) {
    menuBtn.className = "nav-menu";
  }
}

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 70,
      sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      "header nav a[href*=" + sectionId + "]"
    );

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);
