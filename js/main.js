var data = { images:
    ['img/page-mock.png', 
    'img/nano-resume.png',
    'img/arcade-game.png',
    'img/web-opto.png',
    'img/map.png',
    'img/app.png'],
}

function ViewModel () {
    $(document).ready(function () {
        maybe();
    });

    maybe = function () {
        if (localStorage.getItem('entered') == 'true') {        
            $(".caution").removeClass('show');
            $(".caution").addClass('hide');
        }
    }

    enter = function () {
        localStorage.setItem('entered', true);
        maybe();        
    }

    catShow = function () {
        $("#cat-list").toggleClass('hide');
        $("#cat-list").toggleClass('show');
    };

    changeSlide = function (num) {
        $("#slides").removeClass('un-opaque');
        if ($("#slides").attr("src") != data.images[num]) {
            $("#slides").addClass('opaque');
            setTimeout(function(){ 
                $("#slides").attr("src", data.images[num]);
                $("#slides").removeClass('opaque');
            }, 250);
        }
    };
}

ko.applyBindings(new ViewModel());