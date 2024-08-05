document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.custom-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.3)";
        });

        button.addEventListener('mouseout', () => {
            button.style.boxShadow = "none";
        });
    });
});
