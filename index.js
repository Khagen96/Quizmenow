const readLineSync = require('readline-sync')

var questions = [
{
ques: `C is the father of D. But D is not the son of C. How is that possible?`,
op1:"D is C's daughter.",
op2:"C is D's uncle.", 
op3:"Both are brothers.",
op4:"They are not related.",
ans:"1",
reason:"D is the child of C. If C is not D's son, she must be D's daughter"
},
{
ques: `What part of a person's body grows for their whole life?`,
op1:"toes",
op2:"shoulders", 
op3:"ears",
op4:"eyes",
ans:"3",
reason:"two parts of a person's body grow throughout their whole life. They are the ears and the nose."},
{
ques: `In which of these countries do they not use euros?`,
op1:"The Netherlands",
op2:"England", 
op3:"Germany",
op4:"Italy",
ans:"2",
reason:"as many European countries use euros, they don't use them in the UK. In the UK they use pounds."},
{
ques: `Do Buddhists believe in god?`,
op1:"yes",
op2:"no", 
op3:"some of them",
op4:"no one knows",
ans:"3",
reason:"Some Buddhists believe in one or many deities. Others do not believe in gods at all."},
{
ques: `Which of these colors is warm?`,
op1:"blue",
op2:"purple", 
op3:"black",
op4:"red",
ans:"4",
reason:"Red is a warm tone. Other warm tones include yellow, pink and orange."}
];


const name = readLineSync.question('May I have your name please!\n')

console.log(`\nHi ${name}, nice to have you here......`)
console.log("Lets check your general knowledge\n")
console.log(`There will be total of ${questions.length} ques...enter the correct answer as 1/2/3/4 respectively.`);

console.log('For every correct ans +2 and for incorrect -1\n')
var score = 0;
for(let i = 0;i<questions.length;i++)
{

console.log("\nQ"+(i+1)+". "+questions[i].ques+"\n");   //
console.log("1. "+questions[i].op1);
console.log("2. "+questions[i].op2);
console.log("3. "+questions[i].op3);
console.log("4. "+questions[i].op4);

var ans= readLineSync.question("\nYour ans: ")


if(ans === questions[i].ans){
console.log('\nCorrect..!');
score = score + 2;
}
else{
console.log('\nIncorrect! Correct answer is '+questions[i].ans+" because "+questions[i].reason);
score = score - 1;
}
}
console.log('\n\nYour final Score:'+score);