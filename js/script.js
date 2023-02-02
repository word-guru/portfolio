//Header
const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active')
		menu.classList.toggle('active')
	})

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active')
			menu.classList.toggle('active')
		})
	})
}

//Text home
let glowInTexts = document.querySelectorAll(".glowIn");

glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");

  glowInText.textContent = "";

  letters.forEach((letter, i) => {
    let span = document.createElement("span");

    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});

//Scroll
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', e => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
});

const createSelectedSection = (root) => {
	const nav = root.querySelector('nav');

	root.querySelectorAll('.observe').forEach(s => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
					let id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).classList.add('active');
				}
			})
		}, {}).observe(s);
	})
}

createSelectedSection(document.querySelector('#page'));