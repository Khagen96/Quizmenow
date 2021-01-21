const readLineSync = require('readline-sync')

var questions = [
{
ques: `C is the father of D. But D is not the son of C. How is that possible?`,
options:["1. D is C's daughter.","2. C is D's uncle.", "3. Both are brothers.","4. They are not related."],
ans:"1",
reason:"D is the child of C. If C is not D's son, she must be D's daughter"
},
{
ques: `What part of a person's body grows for their whole life?`,
options:["1. toes","2. shoulders", "3. ears","4. eyes"],
ans:"3",
reason:"two parts of a person's body grow throughout their whole life. They are the ears and the nose."},
{
ques: `In which of these countries do they not use euros?`,
options:["1. The Netherlands","2. England", "3. Germany","4. Italy"],
ans:"2",
reason:"as many European countries use euros, they don't use them in the UK. In the UK they use pounds."},
{
ques: "Do Buddhists believe in god?",
options:["1. yes","2. no", "3. some of them","4. no one knows"],
ans:"3",
reason:"Some Buddhists believe in one or many deities. Others do not believe in gods at all."},
{
ques: `Which of these colors is warm?`,
options:["1. blue","2. purple","3. black","4. red"],
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
console.log(questions[i].options.join("\n"));

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