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
