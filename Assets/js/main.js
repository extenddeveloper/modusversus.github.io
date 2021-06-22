 (function(){
    "use strick";
    
    jQuery(document).ready(function($){
        
        $(".search-box").hide();
        $(".header-search-bar").click(function(){
            $(".search-box").fadeToggle('slow');
        })
        
        var slider = $(".slider");
        
        slider.owlCarousel({
           items:1,
            nav:true,
            dots: true,
            animateIn:'fadein',
            animateOut:'fadeOut',
            transitionStyle : "fade",
            loop: true,
            navText:["<i class='fa fa-angle-double-left'></i>" , "<i class='fa fa-angle-double-right'></i>"],
            
        });
        
        slider.on('translate.owl.carousel', function(){
        
            });
        slider.on('translated.owl.carousel', function(){
            
        
            });
          $(".post-slider").owlCarousel({
           items:1,
            nav:true,
            dots: false,
            animate: true,
            transitionStyle : "fade",
            loop: true,
            navText:["<i class='fa fa-angle-double-left'></i>" , "<i class='fa fa-angle-double-right'></i>"],
            
        });
//        $(".single-post-slider").owlCarousel({
//           items:1,
//            nav:true,
//            dots: true,
//            animate: true,
//            transitionStyle : "fade",
//            loop: true,
//            navText:["<i class='fa fa-angle-double-left'></i>" , "<i class='fa fa-angle-double-right'></i>"],
//            
//        });
        $(".client-carousel").owlCarousel({
           items:6,
            nav:true,
            margin: 10,
            dots: false,
            loop: true,
            navText:["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
            
        });
       
        //            animateIn: 'fadeIn',
        
//        $(".homepage-slides").on("translate.owl.carousel", function(){
//            $(".single-slide-item h2, .single-slide-item p").removeClass("animated fadeInUp").css("opacity", "0");
//            $(".single-slide-item .slide-btn").removeClass("animated fadeInRight").css("opacity", "0");
//        });
//        
//          $(".homepage-slides").on("translated.owl.carousel", function(){
//               $(".single-slide-item h2, .single-slide-item p").addClass("animated fadeInUp").css("opacity", "1");
//              $(".single-slide-item .slide-btn").addClass("animated fadeInRight").css("opacity", "0");
//        });
        
        
//        $(".gallery-lightbox").magnificPopup({
//            type: 'image',
//            gallery:{
//            enabled: true
//        }
//        });
        
//        
//        $("ul#nav").slicknav({
//            prependTo:".responsive-menu-wrap"
//        });
//        
//        new WOW().init();
//        
//    });
    
    
//    jQuery(window).load(function(){
//        
//        jQuery(".homepage-slides-preloader-wrap").fadeOut(500);
//        
    });
    
}(jQuery));