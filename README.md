#description of the main program
this program finds the solution of the linear equation ax+b=0, where a and b numbers are written in the input file like this:
 num1 num2
 num1 num2
 ...
after the execution the answers will be store in the output file like this:
 answer1
 answer2
 ... 

#linear_test.js description
this test_file performs the following operations for every line in the input file:
reads two input numbers from the input file, solves the problem for that inputs, writes in the output file, 
compares the result value with the corresponding value in golden file and writes the appropriate message in the result file
If the current values of the input file aren't real numbers, the answer is "mistake"

#files
 in this directory there are following files
* input.txt __ it is the file where our input values are written
* golden.txt __ it is the file where our correct answers are written (if the number is floating_point, the precision is set to 3)
* linear_functions.js __it is the file where the problem_solver function and other related functions are written
* linear_test.js __ this .cpp file contains the operations of reading from the input file, solving and writing in output file and the result file(testing)
* main.js __ this file contains the program which solves our main problem (without testing)

the files that will be generated are 
*output.txt__here result-values are written
*result.txt__here test results are written(test passed or not)

#to run the main program type in command line
 js main.js
to clean the generated files type 
 rm output.txt


#to run the test type in command line
 js linear_test.js
to clean the generated files type 
 rm output.txt result.txt
