
window.addEventListener('contextmenu', e => {
	e.preventDefault();

	let context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = `
	<i class="fas fa-sync-alt" onclick="location.reload();"></i>
	<i class="fas fa-print" onclick="print();"></i>
	`;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '5px'
});

window.addEventListener('click', e => {
	context_menu = document.getElementById('contextmenu');
	context_menu.innerHTML = ``;

	contextmenu.style.top = e.clientY;
	contextmenu.style.left = e.clientX;
	contextmenu.style.padding = '0px';
});

function goto_top() {
	scrollTo(0, 0)
}

