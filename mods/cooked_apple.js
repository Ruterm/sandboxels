//В этом моде я добавил печёное яблоко
elements.cooked_apple = {
    color: "#bf5026",
    behavior: behaviors.POWDER,
    temp: 20,
    category: "food",
    state: "solid",
    tempHigh: 345,
    stateHigh: "ash",
    tempLow: -30,
    stateLow: "iced_apple",
    density: 475
};

elements.iced_apple = {
	color: "#f7a37e",
	behavior: behaviors.WALL,
	temp: -20,
	category: "states",
	state: "solid",
	tempHigh: 10,
	stateHigh: "cooked_apple",
	density: 745
};

elements.apple = {
	color: "#c74040",
	behavior: behaviors.POWDER,
	temp: 20,
	category: "food",
	state: "solid",
	tempHigh: 568,
	stateHigh: "ash",
	density: 545 
};
		
	
