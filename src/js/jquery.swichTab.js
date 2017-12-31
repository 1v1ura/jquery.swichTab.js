(function($) {
    $.fn.swichTab = function(options) {
        var elements = this;
        var opts = $.extend({}, $.fn.swichTab.defaults, options);

        elements.each(function() {
            $(this).data('swichTab', new swichTab($(this), opts));
        });

        return this;
    };

    $.fn.swichTab.defaults = {
        cahngePanel: 'toggle',
        swiper: false,
        index: 0,
    };

    function swichTab(elm, opts) {
        var self = this,
            $swichtab = elm,
            $controller = elm.find('[data-swichtab="controller"]'),
            $target = elm.find('[data-swichtab="target"]');

        this.handleEvent = function() {
            // click event
            $controller.on("click", function(e) {
                var i = $(this).index();
                e.preventDefault();
                // cahngePanel
                if (opts.cahngePanel === 'toggle') {
                    $controller.removeClass("is-active");
                    $(this).addClass("is-active");
                    $target.removeClass("is-active").hide().eq(i).addClass("is-active").show();
                } else if (opts.cahngePanel === 'fade') {
                    $controller.removeClass("is-active");
                    $(this).addClass("is-active");
                    $target.removeClass("is-active").hide().eq(i).addClass("is-active").stop().fadeIn();
                }
            });

            // swiper
            if (opts.swiper === true) {
                self.swiper(elm);
            }
        };

        this.swiper = function(elm) {
            var targetLength = $target.length,
                currentIndex = $target.filter('is-active').index(),
                goToIndex = '',
                direction,
                position,
                y1,
                y2;

            function goToPrev() {
                if (currentIndex <= 0) {
                    goToIndex = (targetLength - 1) % targetLength;
                } else {
                    goToIndex = (currentIndex - 1);
                }
                $controller.removeClass('is-active').eq(goToIndex).addClass('is-active');
                $target.removeClass("is-active").hide().eq(goToIndex).addClass("is-active").stop().fadeIn();
                currentIndex = goToIndex;
            }

            function goToNext() {
                goToIndex = (currentIndex + 1) % targetLength;
                $controller.removeClass('is-active').eq(goToIndex).addClass('is-active');
                $target.removeClass("is-active").hide().eq(goToIndex).addClass("is-active").stop().fadeIn();
                currentIndex = goToIndex;
            }

            elm.on('touchstart', onTouchStart);
            elm.on('touchmove', onTouchMove);
            elm.on('touchend', onTouchEnd);

            function onTouchStart(event) {
                y1 = event.originalEvent.touches[0].clientY;
                position = getPositionX(event);
                direction = '';
            }

            function onTouchMove(event) {
                y2 = event.originalEvent.touches[0].clientY;
                if (Math.abs(y1 - y2) < 5) {
                    event.preventDefault();
                }

                if (position - getPositionX(event) > 100) {
                    direction = 'left';
                } else if (position - getPositionX(event) < -100) {
                    direction = 'right';
                }
            }

            function onTouchEnd(event) {
                if (direction == 'right') {
                    goToPrev();
                } else if (direction == 'left') {
                    goToNext();
                }
            }

            function getPositionX(event) {
                return event.originalEvent.touches[0].pageX;
            }
        };

        this.init = function() {
            $controller.eq(opts.index).addClass("is-active").show();
            $target.eq(opts.index).addClass("is-active").show();
            self.handleEvent();
        };

        return self.init();
    }
}(jQuery));