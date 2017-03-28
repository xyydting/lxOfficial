//右侧滚动固定
    var scrollboxw = $(".news_fixed").width();
    var scrollboxl = $(".news_fixed").offset().left;
    var scrollboxt = $(".news_fixed").offset().top;
    console.log(scrollboxt);
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= scrollboxt) {
            $('.news_fixed').addClass('xs_news_left_fixed').css({
                'position': 'fixed',
                'top': 0 + 'px',
                "left": scrollboxl + 'px',
                'width': scrollboxw + 'px'
            })
        } else {
            $('.news_fixed').removeClass('xs_news_left_fixed').css({
                'position': 'static',
                "margin-top": 0 + 'px'
            });
        }
    });