const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
  
    },
    get mains(){
  
    },
    get desserts(){
  
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishprice){
      const dish ={
        name: dishName,
        price: dishprice
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return this._courses[courseName][randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'mango', 5.00);
  menu.addDishToCourse('appetizers', 'apple', 4.00);
  menu.addDishToCourse('appetizers', 'pineapple', 3.00);
  
  menu.addDishToCourse('mains', 'mondogo', 8.00);
  menu.addDishToCourse('mains', 'garbanzo', 10.00);
  menu.addDishToCourse('mains', 'paisa', 12.00);
  
  menu.addDishToCourse('desserts', 'chocolate', 6.00);
  menu.addDishToCourse('desserts', 'vanilla', 5.00);
  menu.addDishToCourse('desserts', 'mangitoso', 20.00);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);