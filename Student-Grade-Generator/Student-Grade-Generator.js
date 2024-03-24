function calculateGrade(grade){

   if(grade > 79 && grade <= 100){
   return "A"
   } else if (grade >= 60 && grade <= 79){
   return "B"
   }else if (grade >= 49 && grade <= 59){
   return "C"
   } else if (grade >= 40 && grade <= 49){
   return "D"
   } else if (grade < 40 && grade >= 0){
   return "E"
   } else {
   return "Should not exceed 100 and go lower than 0"
   }
   }
   
   let result = calculateGrade(95)
   console.log("Your grade is " + result)