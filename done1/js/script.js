
$('.protfolio-item').isotope({
    itemSelector: '.item',
    layoutModel : 'fitRows'
});

$('.protfolio-menu ul li').click(function () {

    $('.protfolio-menu ul li').removeClass('active');
    $(this).addClass('active');


    var selector = $(this).attr('data-filter');
    $('.protfolio-item').isotope({
        filter : selector
    });

});