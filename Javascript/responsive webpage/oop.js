 //project oriented programming.
 //we can write an object literal using a constructor functon or ES6 classes.
 //constructor function
 //NB when writing using a constructor function, the names of the constructor function must start with a capital letter.
 function Person(firstName, lastName, dob) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.dob = new Date(dob);
 }
 Person.prototype.getBirthYear = function() {
     return this.dob.getFullYear();
 }
 Person.prototype.getFullName = function() {
     return ` ${this.firstName}${this.lastName}`
 }

 const person1 = new Person('kabute ', 'muthoni', '05-31-2002')

 const person2 = new Person('anne', 'gathoni', '03-14-2004')

 const person3 = new Person('mercy', 'njeri', '12-06-2000')
 console.log(person1)
     //constructor functions show a prefix of the objects name.
 function Economics(business, politics, mathematics, comensment) {
     this.business = business
     this.politics = politics
     this.mathematics = mathematics
     this.comensment = new Date(comensment)
 }
 const units = new Economics('microeconomics', 'propety law', 'calculus', '09/19/2022')
 console.log(units)

 //whem the constructor is run in the console, the methods appear in the code. to avoid this, you put the invalid methods to a prototype.

 function color(dull, favorite, flashy, ) {
     this.favorite = favorite
     this.dull = dull
     this.flashy = flashy
 }

 const mercy = new color('beige', 'white', 'pink')
 const grace = new color('grey', 'black', 'purple')
 console.log(grace);
 //you can add the methods that you don't want to appear in the constructor console in the prototype.

 //template strings
 const kabute = {}
 console.log(kabute)

 function me(name, school, course, dream, hobby, birth) {
     this.name = name
     this.school = school
     this.course = course
     this.dream = dream
     this.hobby = hobby
     this.birth = birth
 }


 const gracie = new me('Muthoni', 'UON', 'economics', 'clothing line', 'coding', '05-31-2002')
 console.log(gracie)
     //class
 class Perpetua {
     constructor(name, school, course, birth) {
         this.name = name
         this.school = school
         this.course = course
         this.birth = new Date(birth)
     }
 }
 const perp = new Perpetua('Nduta', 'JKUAT', 'computer science', '05-04-2000')

 console.log(perp)

 class Today {
     constructor(tarehe, feeling, obsession) {
         this.tarehe = new Date(tarehe)
         this.feeling = feeling
         this.obsession = obsession
     }
     getFullYear() {
         return this.tarehe.getFullYear
     }
 }
 const Todays = new Today('08-08-2020', 'sad', 'myself')
 console.log(Todays)