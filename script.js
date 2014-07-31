var Game = {
	//is going to be our map
	display: null,

	//the script to init the game
	init: function(){
		this.display = new ROT.Display({ height: 10, width: 20 });
		document.body.appendChild(this.display.getContainer()) 
		this._generateMap();
	}
}

Game.map = {};
Game._generateMap = function() {
    var digger = new ROT.Map.Digger();
 
    var digCallback = function(x, y, value) {
        if (value) { return; } /* do not store walls */
 
        var key = x+","+y;
        this.map[key] = "·";
    }
    digger.create(digCallback.bind(this));
    this._drawWholeMap();
}

Game._drawWholeMap = function() {
    for (var key in this.map) {
        var parts = key.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        this.display.draw(x, y, this.map[key]);
    }
}

//document
  //.getElementsByTagName('body')[0]
  //.appendChild(myMap); 

  