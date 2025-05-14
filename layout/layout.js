const mobileMenuButton = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenuButton.addEventListener("click", () => {
	navLinks.classList.toggle("show");

	const icon = mobileMenuButton.querySelector("i");
	icon.classList.toggle("fa-bars");
	icon.classList.toggle("fa-times");
});
