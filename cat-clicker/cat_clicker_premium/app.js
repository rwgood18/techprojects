    
var model = {
    currentCat: null,
    cats:  [
             {name: "Alpha", 
                image: "img/kitty.jpg", 
                count: 0}, 
             {name: "Bravo", 
                image: "img/kitty2.jpg", 
                count: 0},
             {name: "Charlie", 
                image: "img/kitty3.jpg", 
                count: 0}, 
             {name: "Romeo", 
                image: "img/kitty4.jpg", 
                count: 0}, 
             {name: "Victor", 
                image: "img/kitty5.jpg", 
                count: 0}
    ]
}

var octopus = {
    init: function() {
        model.currentCat = model.cats[0];
        listView.init();
        catView.init();

    },
    
    getCurrentCat: function () {
        return model.currentCat;
    },

    setCurrentCat: function (cat) {
        model.currentCat = cat;
    },

    getCats: function () {
        return model.cats; 
    },

}

var catView = {
    init: function() {
        this.catElem = document.getElementById("cat");
        this.catImageElem = document.getElementById('cat_img'); 
        this.catNameElem = document.getElementById('name');
        this.countElem = document.getElementById('count');

        var current = octopus.getCurrentCat.count;
        console.log(octopus.getCurrentCat());
        this.catImageElem.addEventListener('click', (function (current) {
            return function () {
                octopus.getCurrentCat().count++;
                catView.render();
            }
        })(current));

        catView.render();
    },

    render: function() {

        catView.catNameElem.innerHTML = octopus.getCurrentCat().name;
        this.catImageElem.src = octopus.getCurrentCat().image;
        this.countElem.innerHTML = octopus.getCurrentCat().count;
    }
}
var listView = {
    init: function() {
        //
        for (var i = 0; i < octopus.getCats().length; i++) { 
            //console.log(octopus.getCats()[i].name);
            var cat = octopus.getCats()[i];
            var catdiv = document.createElement("li");
                name = catdiv.innerHTML = octopus.getCats()[i].name;
            document.getElementById("list").appendChild(catdiv);
            catdiv.addEventListener('click', (function(cat) {
                    return function () {
                        //console.log("current cat is set", cat);
                        octopus.setCurrentCat(cat);
                        catView.render();
                    }
                })(cat));             
        }
    }
}
octopus.init();  