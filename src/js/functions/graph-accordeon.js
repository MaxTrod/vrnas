export default class GraphAccordeon {
	constructor(selector, options) {
		let defaultOptions = {
			isOpen: () => {},
			isClose: () => {},
			speed: 300
		};

		this.options = Object.assign(defaultOptions, options);
		this.accordeon = document.querySelector(selector);
		this.control = this.accordeon.querySelector('.accordeon__control');
		this.content = this.accordeon.querySelector('.accordeon__content');
		this.event();
	}

	event() {
		console.log('event!');

		if (this.accordeon) {
			this.accordeon.addEventListener('click', (e) => {
				this.accordeon.classList.toggle('open');

				if (this.accordeon.classList.contains('open')) {
					this.open();
				} else {
					this.close();
				}
			});
		}
	}

	open() {
		this.accordeon.style.setProperty('--accordeon-time', `${this.options.speed / 1000}s`);
		this.accordeon.classList.add('is-open');
		this.control.setAttribute('aria-expanded', true);
		this.content.setAttribute('aria-hidden', false);
		this.content.style.maxHeight = this.content.scrollHeight + 'px';
		this.options.isOpen(this);
	}

	close() {
		this.accordeon.classList.remove('is-open');
		this.control.setAttribute('aria-expanded', false);
		this.content.setAttribute('aria-hidden', true);
		this.content.style.maxHeight = null;
		this.options.isClose(this);
	}
}
