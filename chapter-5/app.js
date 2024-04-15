// Q-NO-1 
const value = parseFloat (prompt("Write First Number you Want to add here ? "));
const value1 = parseFloat (prompt("Write Second Number you Want to add here ? "));

const operator1 = value + value1;

let result2 = 0;
if(isNaN(value) || isNaN(value1)){
    alert("Wrong Input! Refresh the page again and provide data.......")
}

    alert( "sum of " +  value  +" And "   + value1  + " is " + operator1);


// Q-NO-2
const num1 = parseFloat( prompt("Enter Number-1: "));
const num2 = parseFloat( prompt("Enter Number-2: "));

const operator = prompt("Enter operator ( + , - , / , *) ");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("Wrong Input! Refresh the page again and provide data.......")
}else{

    if (operator == "+"){
        result = num1 + num2;
    }
    else if (operator =="-" ){
        result = num1 - num2;
    }
    else if (operator =="/" ){
        result = num1 / num2;
    }
    else if (operator =="*" ){
        result = num1 * num2;
    }
    alert( num1 + operator + num2 + " = " + result);
}

// Q-NO-3
const declariation = (""); 
const initial = parseFloat (prompt (" Enter The value"));
const hello = parseFloat( prompt (" Enter the Incerement Value"));
const add1 = parseFloat ( prompt (" Count Any Number in Incerement"));

const add2 = ( hello + add1);

const decerement = parseFloat (prompt (" Enter the Decerement Value"));
const add4 = parseFloat (prompt ("Dividing any Number in decerement Value"));
const add6 = (decerement / add4);





    

alert(" Value After Variable declariation is Undefined " + declariation + "\n" + " Intial Value: " + initial + "\n"+ " Value after incerement is: " + hello + " \n" + " Value After Addition is: " + add2 + "\n" + " Value after decerement is: " + decerement + "\n" + " The REminder is: " + add6);

// Q-NO-4
const ticket = parseFloat (prompt ("one Movie ticket is 600.PKR. how many tickets do you want?"));
const total = ticket * 600;

alert("Total cost to buy " + ticket + " tickets to a movie is " + total + "PKR");

// Q-NO-5
let num5 = parseFloat (prompt ("please enter a number",""));
for( let i=1; i<=10;  i++ ){

    document.write("<div>");
    document.write( num5 + " X " +  i   +   " = " + i*num5);
    document.write("</div>");

};






// // Q-NO-9

 //  MarkSheet
 // Exchange rates
 document.write("<h2>Total amount of US dollars and Saudi Riyals</h2>")
const usdToPKR = 104.80;
const sarToPKR = 28;

// Total amount of US dollars and Saudi Riyals
const totalUSD = 10;
const totalSAR = 25;

// Convert total currency to PKR in a single expression
const totalPKR = (totalUSD * usdToPKR) + (totalSAR * sarToPKR);

// Display the total currency in PKR
document.write("USDToPKR:" + usdToPKR + "<br>");
document.write("SARTOPKR:" + sarToPKR + "<br>");
document.write("TotalUSD:" + totalUSD + "<br>");
document.write("TotalSAR:" + totalSAR + "<br>");
document.write('<br>'+"Total Currency in PKR:", totalPKR);



// Q-NO-7
const ticket4 = parseFloat (prompt (" How many item-1 did you want ?"));
const total3 = ticket4 * 650;

const ticket5 = parseFloat (prompt (" how many item-1 are there ? "));
const total6 = ticket4-100;

// const ticket7 = parseFloat (prompt (" How many item-2 did you want ?"));
// const total8 = icket10 * 100;

// const ticket8 = parseFloat (prompt (" how many items-2 are there ? "));
// const total9 = icket11;

alert("price of item-1 " + total3 + " PKR" +  "\n" + "Quantity of item-1 " +" is "  + total6 )




