document.getElementById('anchor-link').addEventListener('click', function(event) {
    event.preventDefault();

    let screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        document.querySelector('.games__mini').scrollIntoView({ behavior: "smooth" });
    } else {
        document.querySelector('.games__about').scrollIntoView({ behavior: "smooth" });
    }

});
