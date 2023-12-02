// -------------------------------THIS KEYWORD----------------------------------------------
/*const company = {
    name: "pratham suthar",
    username: "prathamsuthar123",
    password: "password",

    welcomecomapanymessage: function employee() {
        console.log(`${this.name} welocme to google company have a nice day`);
        // console.log(this);
    }

}

// company.welcomecomapanymessage();
// company.name = "france";
// company.welcomecomapanymessage();

console.log(this);


// =================THIS KEYWORD IS NOT ALLOW IN FUNCTION ONLY ALLOW WITH OBJECT================

function example(){
    const nam ="pratham suthar";
    // console.log(this.nam);
    console.log(nam);
}

example();*/

// ===========================Arrows function=========================================

// syntax------->

// varibale = (par1,par2) => {}

// Explicant arrows function 
const value = (num1, num2) => {
    return num1 + num2;
}
console.log(value(5, 7));


// implicant arrows fumction
const jom = (num1, num2) => (num1 + num2);
console.log(jom(4, 5));


// Arrows function with object used
const tom = (num1, num2) => ({ 
    username: "pratham",
    id:"100000002"
 });
 
 console.log(tom(1,5));