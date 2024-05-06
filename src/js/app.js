export default class Render {

	render() {
		const bottom = document.querySelector('.collapse');

		bottom.addEventListener('click', () => {
			const entry = document.querySelector('.entry');
			entry.classList.toggle('active');
		});
	}
}


