const readLineSync = require('readline-sync')

var questions = [
{
question: `C is the father of D. But D is not the son of C. How is that possible?`,
options:["D is C's daughter.","C is D's uncle.", "Both are brothers.","They are not related."],
correctIndex:'1',
reason:"D is the child of C. If C is not D's son, she must be D's daughter"
},
{
question: `What part of a person's body grows for their whole life?`,
options:["toes","shoulders", "ears","eyes"],
correctIndex:'3',
reason:"two parts of a person's body grow throughout their whole life. They are the ears and the nose."},
{
question: `In which of these countries do they not use euros?`,
options:["The Netherlands","England", "Germany","Italy"],
correctIndex:'2',
reason:"as many European countries use euros, they don't use them in the UK. In the UK they use pounds."},
{
question: "Do Buddhists believe in god?",
options:["yes","no", "some of them","no one knows"],
correctIndex:'3',
reason:"Some Buddhists believe in one or many deities. Others do not believe in gods at all."},
{
question: `Which of these colors is warm?`,
options:["blue","purple","black","red"],
correctIndex:'4',
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

  console.log("\nQ"+(i+1)+". "+questions[i].question+"\n");
  for(let j = 0;j<=questions[i].options.length - 1;j++){
    console.log((j+1)+". "+questions[i].options[j]);
  }
  var ans= readLineSync.question("\nYour ans: ")

  if(ans === questions[i].correctIndex){
    console.log('\nCorrect..!');
    score = score + 2;
  }
  else{
    console.log('\nIncorrect! Correct answer is '+questions[i].correctIndex+" because "+questions[i].reason);
    score = score - 1;
  }
}
console.log('\n\nYour final Score:'+score);