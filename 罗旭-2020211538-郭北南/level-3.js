function Animal(){
    　　　　this.species = "动物";
    　　}
function Cat(name,color){
        　　this.name = name;
        　　this.color = color;
}
Cat.prototype = new Animal();
var cat1 = new Cat("大毛","黄色");  
console.log(cat1.species);

//拷贝
function Animal(){}
Animal.prototype.species = "动物";
function Cat(name,color){
        　　this.name = name;
        　　this.color = color;
}
function extend(Child, Parent) {
    　　　　 var p = Parent.prototype;
    　　　　 var c = Child.prototype;
    　　　　 for (var i in p) { 
                c[i] = p[i];
    　　　　 }
}
extend(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species);