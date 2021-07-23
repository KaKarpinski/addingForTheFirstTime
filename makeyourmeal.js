var menu = {
  _courses: {
      appetizers: [],
      mains: [],
      desserts: []
  },

  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get main(){
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
   this._courses.desserts = desserts;
  },
  

  get course(){
    return {appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish);
  },
  

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length)
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name }, ${main.name} and ${dessert.name}. The total price is ${totalPrice}`
  },
};


menu.addDishToCourse('appetizers', 'skrzydełka', 12);
menu.addDishToCourse('appetizers', 'imbirek', 5);
menu.addDishToCourse('appetizers', 'paluszki', 8);
menu.addDishToCourse('appetizers', 'sałateczka', 9);

menu.addDishToCourse('mains', 'schabowe', 21);
menu.addDishToCourse('mains', 'pierogi', 19);
menu.addDishToCourse('mains', 'deVolay', 26);
menu.addDishToCourse('mains', 'karczek', 22);

menu.addDishToCourse('desserts', 'ciasteczka', 13);
menu.addDishToCourse('desserts', 'monodeser', 14);
menu.addDishToCourse('desserts', 'shake', 9);
menu.addDishToCourse('desserts', 'śliwki w czekoladzie', 6);

const meal = menu.generateRandomMeal();
console.log(meal)