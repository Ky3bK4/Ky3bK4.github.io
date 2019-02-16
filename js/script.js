$(document).ready(function(){
    $(".image").hover(
        ()=>{
            $(".cup-left").addClass('active-left');
            $(".cup-right").addClass('active-right');
            $(".postcard h1").addClass('active-h1');
        },
        ()=>{
            $(".cup-left").removeClass('active-left');
            $(".cup-right").removeClass('active-right');
            $(".postcard h1").removeClass('active-h1');
        });


    $(".top-header .btn").mPageScroll2id();
});