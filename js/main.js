$(document).ready(function() {
	let mode = sessionStorage.getItem('mode');
	setDarkMode(mode == 'dark');

	$('.moon').click(function() {
		setDarkMode(true);
		sessionStorage.setItem('mode', 'dark');
	});
	$('.sun').click(function() {
		setDarkMode(false);
		sessionStorage.setItem('mode', 'light');
	});
});

function setDarkMode(isDarkMode) {
	$('body').removeClass(isDarkMode ? 'light-mode' : 'dark-mode');
	$('body').addClass(isDarkMode ? 'dark-mode' : 'light-mode');
}