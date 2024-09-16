
document.querySelectorAll('.dropdownBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        const dropdownOptions = this.nextElementSibling;
        if (dropdownOptions.style.display === 'block') {
            dropdownOptions.style.display = 'none';
        } else {
            dropdownOptions.style.display = 'block';
        }
    });
});

// W3 School 
window.onclick = function(event) {
    if (!event.target.matches('.dropdownBtn') && !event.target.closest('.dropdownOptions')) {
        const dropdowns = document.querySelectorAll('.dropdownOptions');
        dropdowns.forEach(dropdown => {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            }
        });
    }
}
