const restaurantTable = require('./models/index').Restaurant;


let data = {
    name : 'Punjab Grill',
    location : 'Indore',
    cuisine : 'Indian',
    no_of_dishes : 35
}

const createRestaurant = async(data) => {
    const restaurant = await restaurantTable.create({
        name : data.name,
        location : data.location,
        cuisine : data.cuisine,
        no_of_dishes : data.no_of_dishes
    })

    //console.log(restaurant);
    return restaurant;
}

//createRestaurant(data);

const getRestaurants = async() => {
    const restaurant = await restaurantTable.findAll();
    console.log(restaurant);
    return restaurant;
}

const getRestaurantById = async(restaurantId) => {
    const restaurant = await restaurantTable.findOne({
        where:{
            id : restaurantId
        }
    });
    return restaurant;
}

const display = async() => {
    const allRestaurants = await getRestaurants();
    const restaurantById = await getRestaurantById(5);
    console.log(allRestaurants);
    console.log(restaurantById);
}

//display();

const updateRestaurant = async(restaurantId, data) => {
    const restaurant = await restaurantTable.update({
        name : data.name,
        location : data.location,
        cusine : data.cuisine,
        no_of_dishes : data.no_of_dishes
    },{
        where:{
            id : restaurantId
        }
    });

    return restaurant;
}

//updateRestaurant(2, data);

const deleteRestaurant = async(restaurantId) => {
    const restaurant = await restaurantTable.destroy({
        where:{
            id : restaurantId
        }
    });
}

deleteRestaurant(2);