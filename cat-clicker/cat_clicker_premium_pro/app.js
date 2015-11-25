var model = {
    admin: false,
    currentCat: null,
    cats:  [
             {name: "Alpha", 
                image: "data:image/jpeg;base64,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", 
                count: 0}, 
             {name: "Bravo", 
                image: "http://www.dilaf.com/wp-content/uploads/2013/02/cute_cat_picture-3-1024x640.jpg", 
                count: 0},
             {name: "Charlie", 
                image: "http://stuffpoint.com/cats/image/41633-cats-cute-cat.jpg", 
                count: 0}, 
             {name: "Romeo", 
                image: "http://www.pageresource.com/wallpapers/wallpaper/animal-cute-cat-and-dog-cuddling-cats-dogs_309803.jpg", 
                count: 0}, 
             {name: "Victor", 
                image: "https://i0.wp.com/images.wallpapersmela.com/2014/01/cute-cat-wallpapers.jpg", 
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
            var cat = octopus.getCats()[i];
            var catdiv = document.createElement("li");
                name = catdiv.innerHTML = octopus.getCats()[i].name;
            document.getElementById("list").appendChild(catdiv);
            catdiv.addEventListener('click', (function(cat) {
                    return function () {
                        octopus.setCurrentCat(cat);
                        catView.render();
                    }
                })(cat));             
        }
    }
}

var adminView = {
    init: function () {
        document.getElementById("parameters").style.display = "block";
        this.catName = document.getElementById("cat_name");
        this.catURL = document.getElementById("cat_url");
        this.catClicks = document.getElementById("cat_clicks");

        adminView.render();
    },

    render: function () {
        this.catName.value = octopus.getCurrentCat().name;
        this.catURL.value = octopus.getCurrentCat().image;
        this.catClicks.value = octopus.getCurrentCat().count;
    },

    save: function () {
        console.log(this.catName);
        catView.catNameElem.innerHTML = this.catName.value;
        catView.catImageElem.src = this.catURL.value;
        catView.countElem.innerHTML = this.catClicks.value;

        this.cancel();
    },

    cancel: function () {
        document.getElementById("parameters").style.display = "none";
    }
}
octopus.init();  