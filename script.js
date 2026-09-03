// Fade in the blueprint grid backdrop shortly after load.
window.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.querySelector(".grid-backdrop");
  requestAnimationFrame(() => {
    backdrop.style.transition = "opacity 1.2s ease";
    backdrop.style.opacity = "1";
  });
});

// Highlight the current section in the top nav while scrolling.
const sections = document.querySelectorAll("main .section, .hero, .contact");
const navLinks = document.querySelectorAll(".topbar__nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute("href") === `#${id}` ? "" : "";
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});

// Resume link: point this at your actual resume file once you add one
// to the repo (e.g. resume.pdf), or remove the link from index.html.
const resumeLink = document.getElementById("resume-link");
if (resumeLink) {
  resumeLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Add your resume.pdf to the project folder and update this link's href in index.html.");
  });
}
