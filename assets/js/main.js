// Scroll doux pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
	const targetId = link.getAttribute("href");
	const target = document.querySelector(targetId);
	if (!target || targetId === "#") return;
	e.preventDefault();
	target.scrollIntoView({ behavior: "smooth" });
  });
});

// Apparition progressive des sections au scroll (si supporté)
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
	(entries) => {
	  entries.forEach((entry) => {
		if (entry.isIntersecting) {
		  entry.target.classList.add("is-visible");
		  observer.unobserve(entry.target);
		}
	  });
	},
	{ threshold: 0.12 }
  );

  document
	.querySelectorAll(".zc-section")
	.forEach((section) => section.classList.add("zc-observe"));

  document
	.querySelectorAll(".zc-observe")
	.forEach((el) => observer.observe(el));
}
