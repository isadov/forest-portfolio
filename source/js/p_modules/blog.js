var siteModuleBlog = (function () {
    var flag = true;

    var init = function () {
        _setUpListners();
        _dataArticleOffsetDefine();
    };

    var _setUpListners = function () {
        $('.articles-name__item').on('click',_scrollBlog);
        $('.article-name__btn').on('click',_swipeArticleNameList);

        $(document).scroll(_articlesNameHighlight);
        $(window).resize(function() {
            clearTimeout(window.resizedFinished);
            window.resizedFinished = setTimeout(function(){
                _dataArticleOffsetDefine();
            }, 250);
        });
    };

    var _articlesNameHighlight = function() {
        var wrapperOffset = $('.wrapper').offset().top;
        var offset;
        for(var i = 0; i < $('.articles__item').length; i++) {
            offset = $('.articles__item').eq(i).offset();
            if(window.scrollY >= offset.top-400) {
                $('.articles-name__item').removeClass('articles-name__itemActive');
                $('.articles-name__item').eq(i).addClass('articles-name__itemActive');
            }else {
                break;
            }
        }
        if(window.scrollY > wrapperOffset) {
            $('.articles-name__list').addClass('articles-name__list-fixed');
        } else {
            $('.articles-name__list').removeClass('articles-name__list-fixed');
        }
    };

    var _dataArticleOffsetDefine = function () {
        var i = 0, offset;
        $('.articles-name__item').each(function(){
            offset = $('.articles__item').eq(i).offset();
            $('.articles-name__item').eq(i).attr('data-article-offset',offset.top);
            i++;
        })
    };

    var _scrollBlog = function () {
        var scrollBlogDeffered = $.Deferred();
        var offset = $(this).attr('data-article-offset');

        if (flag) {
            flag = false;
            $('body,html').animate({
                scrollTop: offset
            },500, function () {
                scrollBlogDeffered.resolve()
            });
        }
        scrollBlogDeffered.done(function(){
            flag = true;
        })
    };

    var _swipeArticleNameList = function () {
        $('.sidebar').toggleClass('sidebar__active');
        $('.article-name__btn').toggleClass('article-name__btn-active');
    };

    return  {
        init: init
    }

})();

siteModuleBlog.init();






