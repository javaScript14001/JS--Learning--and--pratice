// ==================Immediately Invoked Function Expression========================

// syntax-------->

// (function () {
//     // …
//   })();

//   (() => {
//     // …
//   })();

//   (async () => {
//     // …
//   })();


// usedes of IIFE is Avoiding the pollution of global namespace


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// arrows function with IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


  

  