$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/1.jpg' },
            { src: './images/2.jpg' },
            { src: './images/3.jpg' },
        ],
        overlay: true,
        transition: 'fade',
        animation: 'kenburns',
        delay: 6500,
        animationDuration: 22000,
        timer: false,
    });
});
