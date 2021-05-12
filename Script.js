//Array
let names = new Array("Emmanuel", "Frank", "Isaac", "Freedom", "Maya", "Orlando");
let foods = ["Jollof", "Tuo zaafi", "Spaghetti", "Waakye"];
console.log(names[2]);
console.log(foods[3]);

//if/else
const school = "Github";
const student = "Nana";
if(school == "Github"){
    console.log("Hola " + student) 
}else{
    console.log("Please leave her you are not welcome")
};

//if/else/else if
let reminder;
let time = new Date().getHours();
if (time == 10) {
    reminder = "Good morning";
} else if(time == 12) {
    reminder = "Good afternoon";
} else if(time == 8) {
    reminder = "Good evening";
}else{
    console.log("bless up how are you");
};

 //switch statement
switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
      console.log("Looking forward to the Weekend"); 
  };
//loops
//forloop
  let i;
  for(i =1;i<= 100;i++){
      console.log(i);
  };
//while loop
  let K = 1;
  while (K < 8){
  K++
  };

//function
function add(c, d){
    console.log(c +d)
};
add(20, 500);
