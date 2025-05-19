export function headerScroll() {
	const header = document.querySelector('.header');
	document.addEventListener("scroll", function (e) {
		const scrollTop = window.scrollY;
		if (scrollTop > 0) {
			header.classList.add('--header-scroll');
		} else {
			header.classList.remove('--header-scroll');
		}
	});
}
document.querySelector('.header') ?
	window.addEventListener('load', headerScroll) : null


