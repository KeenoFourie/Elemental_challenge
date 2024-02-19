$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.carousel-slide');
    let dots = $('.dot');
    
    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.removeClass('active');
        slides.eq(currentSlide).addClass('active');
        dots.removeClass('dot-active');
        dots.eq(currentSlide).addClass('dot-active');
    }
    
    function changeSlide(offset) {
        showSlide(currentSlide + offset);
    }
    
    $('.right-arrow').on('click', function () {
        changeSlide(1);
    });
    
    $('.dots-container').on('click', '.dot', function () {
        const dotIndex = $(this).index();
        showSlide(dotIndex);
    });
    
    for (let i = 0; i < slides.length; i++) {
        $('.dots-container').append('<div class="dot"></div>');
    }
    
    dots = $('.dot');
    showSlide(currentSlide);
});
