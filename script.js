/*---------- Using javaScript ---------------*/
/*------------- I can use toggle-icon for dark-mode -----------*/
const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});