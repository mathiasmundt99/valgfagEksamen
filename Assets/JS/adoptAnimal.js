
document.querySelectorAll('.dropdownBtn').forEach(button => {
    button.addEventListener('click', function(event) {
        const dropdownOptions = this.nextElementSibling;
        dropdownOptions.style.display = dropdownOptions.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation();
    });
});

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

