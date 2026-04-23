document.getElementById('share-tw').addEventListener('click', function () {
    var url = window.location.href;
    var twShareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url);
    window.open(twShareUrl, 'twShareWindow', 'height=450, width=550, top=' + (window.innerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});

document.getElementById('prev').addEventListener('mouseover', function () {
    gsap.to('#left-arrow', { scale: 1.2, duration: 0.3 });
});

document.getElementById('prev').addEventListener('mouseout', function () {
    gsap.to('#left-arrow', { scale: 1, duration: 0.3 });
});

document.getElementById('next').addEventListener('mouseover', function () {
    gsap.to('#right-arrow', { scale: 1.2, duration: 0.3 });
});

document.getElementById('next').addEventListener('mouseout', function () {
    gsap.to('#right-arrow', { scale: 1, duration: 0.3 });
});

document.getElementById('home').addEventListener('mouseover', function () {
    gsap.to('#home', { scale: 1.2, duration: 0.3 });
});

document.getElementById('home').addEventListener('mouseout', function () {
    gsap.to('#home', { scale: 1, duration: 0.3 });
});
