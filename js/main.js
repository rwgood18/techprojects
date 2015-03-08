document.getElementById('cat-clicker').onclick = function () {
	document.getElementById('cat-list').style.display = "block";
}

$(document).ready(function(){
    $("#p1").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if ($("#slides").attr("src") != 'img/page-mock.png') {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", 'img/page-mock.png');
	        	$("#slides").removeClass('opaque');
	        }, 250);
	    }
    });
});

$(document).ready(function(){
    $("#p2").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if ($("#slides").attr("src") != 'img/nano-resume.png') {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", 'img/nano-resume.png');
	        	$("#slides").removeClass('opaque');
	        }, 250);
    	}
    });
});

$(document).ready(function(){
    $("#p3").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if ($("#slides").attr("src") != 'img/arcade-game.png') {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", 'img/arcade-game.png');
				$("#slides").removeClass('opaque');
	        }, 250);
	    }
    });
});

$(document).ready(function(){
    $("#p4").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if ($("#slides").attr("src") != 'img/web-opto.png') {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", 'img/web-opto.png');
	        	$("#slides").removeClass('opaque');
	        }, 250);
    	}
    });
});

$(document).ready(function(){
    $("#p5").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if ($("#slides").attr("src") != 'img/map.png') {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", 'img/map.png');
	        	$("#slides").removeClass('opaque');
	        }, 250);
    	}
    });
});

$(document).ready(function(){
    $("#p6").mouseover(function(){
    	$("#slides").removeClass('un-opaque');
    	if (true) {
	    	$("#slides").addClass('opaque');
	        setTimeout(function(){ 
	        	$("#slides").attr("src", '' transition pointer);
	        	$("#incomplete").css("display", "block");
	        	$("#slides").removeClass('opaque');
	        }, 250);
    	}
    });
});