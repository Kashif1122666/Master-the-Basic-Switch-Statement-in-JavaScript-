// Chapter -39: switch statments: how to start them

// use of switch statment 
// IN Javascript , if/else statment and switch statment are used to control the flow of a program based on 
// a specific condition.

// If/else vs switch
// The main difference between the two is that an if/else statment evalute a condition and execute a
// block of code if the condition is true , while a switch statment evalutes an expression and executes the 
// code associated with the matching case statment.

// Example program with if/else
// let x = 15;
// if (x > 10) {
//     console.log("x is greater than 10");
// } else {
//    console.log("x is less than or equal t0 10"); 
// }

// Example program with switch
// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("today is monday");
//         break;
//     case "Tuesday":
//         console.log("today is tuesday");  
//     default:
//         console.log("today is neither monday nor tuesday");
// }

// same program with if-else
// let day = "Monday";
// if (day === "Monday") {
//    console.log("today is monday");
//  } else if( day === "Tuesday") {
//        console.log("today is tuesday");
//  } else {
//     console.log("today is neither monday nor tuesday");
//    }


// Advantages of switch
// 1. one advantage of using switch statment is that it can be more efficent than multiple if/else
// statment when testing a single expression against multiple possible values. 
// 2. additionally , a switch statment can make the code more readable and easier to follow, specially when 
// there are many possible condition to check.

// however, if/else statment offer more flexibility than switch statment, as they can evaluate complex
// expressions and conditions that cannot be easily represented in a switch statment. if/else statment also 
// allow for more fine - grained control over the flow of the program , as multiple conditon can be checked in 
// a spcific order.

// // when to use which
// overall , the choice between using an if/else statment and a switch statment depends on the specific
// needs of program and complexity of the conditions being evaluated. 

// Example program with switch
// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("today is monday");
//         break;
//     case "Tuesday":
//         console.log("today is tuesday");  
//     default:
//         console.log("today is neither monday nor tuesday");
// }

// //For now  just focus on first three lines 
// 1.Begin with the keyword switch . Bumping up against it is the variable that's being tested, inside
// paranthesis. Then there's an opening curly bracket.
// 2. The first posibility , that the variable day has the value "Monday" Begins with the 
// keyword case . Then the value that is being tried , "Monday" . Then a space an a colon.
// 3. The statment that executes if the test passes-if day does , in fact , have the value
// "Monday", This statment is indented , any number of statments can execute if the test passes.