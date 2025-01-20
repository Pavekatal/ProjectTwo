document.getElementById('anchor-link').addEventListener('click', function(event) {
    event.preventDefault();

    let screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        document.querySelector('.games__mini').scrollIntoView({ behavior: "smooth" });
    } else {
        document.querySelector('.games__about').scrollIntoView({ behavior: "smooth" });
    }

});

// const runningBox = document.querySelector('.top__nav-box');

// function runningFunc() {
//     const totalWidth = runningBox.scrollWidth;
//     const containerWidth = runningBox.clientWidth;
//     let animationLine = (totalWidth / containerWidth) * 20; 
//     runningBox.style.animationDuration = `${animationLine}s`; 
// }

// let resizeTimeout;
// window.onresize = function() {
//     clearTimeout(resizeTimeot);
//     resizeTimeout = setTimeout(runningFunc, 200);
// };

// window.onload = runningFunc;