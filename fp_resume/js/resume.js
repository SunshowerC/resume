$(function () {
    var $hello = $('.hello>h1');
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#1889c5', '#494a5f', '#4EB7E2', '#4BBFC3'],
        scrollingSpeed: 1000,
        navigation: true,
        navigationColor: "#aaa",
        verticalCentered: false,
        loopBottom: true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        afterLoad: function(archorLink, index) {
            switch (index) {
                case 1:
                    $hello.addClass('animate');
                    break;
                case 2:

                    $('.photo>img').animate({
                        width: '200px',
                        height: '200px'
                    },800,function(){
                        $('.photo>p').slideDown(1000);
                    });
                    
                    $(".contact>ul,.contact>.edu,.info").animate({
                        marginLeft:'0',
                        marginRight:'0'
                    },500);

                    break;
                case 3:
                    $('.bar-inner').each(function(index,elem){
                        $(elem).animate({
                            width: elem.innerHTML
                        })
                    });
                    break;
                case 4:
                    $('.product-item').addClass('animate');
                  
                    break;
                    
                    
            }


        },

        onLeave: function(index, nextIndex, direction) {
            switch (index){
                case 1:
                    $hello.removeClass('animate');
                    break;
                case 2:
                    setTimeout(function () {
                        // $('.photo>img,.contact>ul,.contact>.edu,.info').attr('style','');
                        $('.photo [style],.intro [style]').attr('style','')
                    },1000);

                    break;
                case 3:
                    $('.bar-inner').css('width','0');
                    break;
                case 4:
                    $('.product-item').removeClass('animate');
            }
        }

    });

    var ability = {
        'HTML': '80%',
        'CSS': '73%',
        'JavaScript': '65%',
        'SASS': '50%',
        'JQuery': '52%',
        'Bootstrap': '45%',
        'require.js': '40%',
        'Underscore.js': '35%',
        'Node.js':'16%'
    };

    function addSkillValue() {
        var skill = document.querySelector('.skill');
        var fragHtml = "";
        for (var i in ability) {
            fragHtml = fragHtml + '<div class="progress-bar">' +
                '<small class="progress-title">' + i + '</small>' +
                '<span class="bar-inner" style="width:0;">'+ability[i]+'</span>' +
                '</div>';
        }
        skill.innerHTML += fragHtml;
    }

    $('.product-item').on('animationend',function () {
        $(this).css('pointer-events','auto');
    });

    addSkillValue();

});