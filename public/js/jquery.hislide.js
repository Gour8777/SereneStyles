(function($) {
   
    var slide = function(ele,options) {
        var $ele = $(ele);
       
        var setting = {
            speed: 1000,
            interval: 2000,
        };
        
        $.extend(true, setting, options);
        
        var states = [
            { zIndex: 1, width: 120, height: 150, top: 69, left: 134, opacity: 0.2 },
            { zIndex: 2, width: 130, height: 170, top: 59, left: 0, opacity: 0.4 },
            { zIndex: 3, width: 170, height: 218, top: 35, left: 110, opacity: 0.7 },
            { zIndex: 4, width: 224, height: 288, top: 0, left: 263, opacity: 1 },
            { zIndex: 3, width: 170, height: 218, top: 35, left: 470, opacity: 0.7 },
            { zIndex: 2, width: 130, height: 170, top: 59, left: 620, opacity: 0.4 },
            { zIndex: 1, width: 120, height: 150, top: 69, left: 500, opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('z-index', state.zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);

$(document).ready(function() {
    $(".image-container").hover(function() {
        $(this).css("z-index", 5); // Bring the hovered image to the front
        $(this).find(".image-description").show(); // Show the description of the hovered image
    }, function() {
        $(this).css("z-index", 4); // Return the image to its original z-index
        $(this).find(".image-description").hide(); // Hide the description
    });
});
