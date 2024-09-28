
document.querySelector('input').addEventListener('input', (e) => {
    let search = e.target.value.toLowerCase();
    document.querySelectorAll('section').forEach(section => {
        section.style.display = section.innerText.toLowerCase().includes(search) ? '' : 'none';
    });
});



