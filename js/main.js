document.getElementById('cat-clicker').onclick = function () {
	document.getElementById('cat-list').style.display = "block";
}


$(document).ready(function(){
    $("#p4").mouseover(function(){
    	console.log($("#slides").src);
        $("#slides").attr("src", 'img/web-opto.png');
    });
});

$(document).ready(function(){
    $("#p3").mouseover(function(){
    	console.log($("#slides").src);
        $("#slides").attr("src", 'img/arcade-game.png');
    });
});
