document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const splashContent = document.querySelector(".splash-content");

  // Animasi awal untuk konten splash screen (misalnya, fade in)
  gsap.from(splashContent, {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power4.inOut",
  });

  // Setelah beberapa detik, animasikan splash screen untuk menghilang
  gsap.to(splashScreen, {
    opacity: 0,
    duration: 1,
    delay: 2, // Sesuaikan durasi tampilan splash screen di sini (dalam detik)
    ease: "power4.inOut",
    onComplete: () => {
      splashScreen.style.display = "none"; // Sembunyikan splash screen setelah animasi selesai
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulasi splash screen selesai setelah 3 detik
  setTimeout(function () {
    document.querySelector(".navbar").classList.add("show");
    document.getElementById("splash-screen").style.display = "none";

    // Reposition pill after navbar is shown
    const activeLink = document.querySelector(".navbar .nav-link.active");
    if (activeLink) {
      movePill(activeLink);
    }
  }, 3000); // 3000 ms = 3 detik
});

document.addEventListener("DOMContentLoaded", function () {
  // Pilih semua item menu di dalam navbar
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Tambahkan event listener untuk setiap item menu
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Tutup navbar collapse setelah item diklik
      if (navbarCollapse.classList.contains("show")) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});

const navLinks = document.querySelectorAll(".navbar .nav-link");
const pillBg = document.querySelector(".navbar .pill-bg");
const navbarContainer = document.querySelector(".navbar .container");

function movePill(link) {
  const linkRect = link.getBoundingClientRect();
  const containerRect = navbarContainer.getBoundingClientRect();

  // Get computed padding of the link
  const style = window.getComputedStyle(link);
  const paddingLeft = parseFloat(style.paddingLeft);
  const paddingRight = parseFloat(style.paddingRight);

  // Get computed padding of the pill
  const pillStyle = window.getComputedStyle(pillBg);
  const pillPaddingLeft = parseFloat(pillStyle.paddingLeft);
  const pillPaddingRight = parseFloat(pillStyle.paddingRight);

  // Calculate text width by subtracting horizontal padding of link
  const textWidth = linkRect.width - paddingLeft - paddingRight;

  // Calculate pill width by adding pill padding
  const pillWidth = textWidth + pillPaddingLeft + pillPaddingRight;

  // Calculate left position to center pill on text + padding
  const leftPos =
    linkRect.left -
    containerRect.left +
    paddingLeft / 2 +
    textWidth / 2 +
    pillPaddingLeft / 2 -
    pillWidth / 2;

  gsap.to(pillBg, {
    duration: 0.5,
    left: leftPos,
    width: pillWidth,
    overwrite: true,
    ease: "power3.out",
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
    movePill(this);
  });

  // Initial position on load if there's an active link
  if (link.classList.contains("active")) {
    gsap.set(pillBg, {
      width: link.offsetWidth,
      left: link.offsetLeft,
    });
    movePill(link);
  }
});

// Handle active class on scroll (optional, if you're using scrollspy)
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (
      targetElement &&
      targetElement.offsetTop <= scrollPosition + window.innerHeight / 2 &&
      targetElement.offsetTop + targetElement.offsetHeight >
        scrollPosition + window.innerHeight / 2
    ) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      movePill(link);
    }
  });
});
