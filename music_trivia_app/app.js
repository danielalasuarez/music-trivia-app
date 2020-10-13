// make start button work and prompt the random genre
// random genre function

//  after rando genre is generated then after 20 seconds the game will begin
// lyrics will come out on screen
// user will have to guess the name of the song as fast as possible
// how many songs can you guess in 40 seconds?

// once this is working and the other rounds

$(() => {
  //variables
  const $screen1 = $('#screen1')
  const $screen2 = $('#screen2')
  const $screen3 = $('#screen3')
  const $startButton = $('#startGame')
  const $genres = ['POP', 'RAP', 'COUNTRY', 'LATIN']
  const $nextButton = $('#roundBttn')

  //function that generates random genre
  function generateGenre() {
    const $randomGenre = $genres[Math.floor(Math.random() * $genres.length)]
    // console.log($randomGenre)
    $('.randomGen').html($randomGenre)
    //trying to start the game below 
    
  

// event listners to append they lyrics (questions) to the card
const popIndex = Math.floor(Math.random() * $pop.length)
const $popLyrics = $pop[popIndex] // wrap in a startgame funciton 

const $rapLyrics = $rap[Math.floor(Math.random() * $rap.length)]
const $countryLyrics = $country[Math.floor(Math.random() * $country.length)]
const $latinLyrics = $latin[Math.floor(Math.random() * $latin.length)]
        function generateTriviaQuestions (){
            if ($randomGenre === "POP"){
            // console.log($pop)//works
            $('#lyrics').append($popLyrics)
            // button choices maybe make a loop later?
            // $choice1.append($popAnswers[0])
            // $choice2.append($popAnswers[1])
            // $choice3.append($popAnswers[2])
            // $choice4.append($popAnswers[3])
            for (let i=0; i < $choiceButtons.length; i++){
               $($choiceButtons[i]).append($popAnswers[i])
            }
            triviaGamePOP();
        } else if ($randomGenre === "RAP"){
            $('#lyrics').append($rapLyrics)
            // $choice1.append($rapAnswers[0])
            // $choice2.append($rapAnswers[1])
            // $choice3.append($rapAnswers[2])
            // $choice4.append($rapAnswers[3])
            for (let i=0; i < $choiceButtons.length; i++){
                $($choiceButtons[i]).append($rapAnswers[i])
             }
        } else if ($randomGenre === "COUNTRY"){
            $('#lyrics').append($countryLyrics)
            // $choice1.append($countryAnswers[0])
            // $choice2.append($countryAnswers[1])
            // $choice3.append($countryAnswers[2])
            // $choice4.append($countryAnswers[3])
            for (let i=0; i < $choiceButtons.length; i++){
                $($choiceButtons[i]).append($countryAnswers[i])
             }
        } else if ($randomGenre === "LATIN"){
            $('#lyrics').append($latinLyrics)
            // $choice1.append($latinAnswers[0])
            // $choice2.append($latinAnswers[1])
            // $choice3.append($latinAnswers[2])
            // $choice4.append($latinAnswers[3])
            for (let i=0; i < $choiceButtons.length; i++){
                $($choiceButtons[i]).append($latinAnswers[i])
             }
        }
        
    } generateTriviaQuestions()



//game for the pop genre 
        function triviaGamePOP () {
            for (let i=0; i < $choiceButtons.length;i++){
                if (popIndex === i){
                    rightAnswer($($choiceButtons[i]))
                } else {
                    wrongAnswer($($choiceButtons[i]))
                }
            }
        // if ($popLyrics[0] === $popAnswers[0]){
        //         // $choice1.css('color', '#1DB954')
        //         rightAnswer($choice1)
        //         $popLyrics.splice(0, 1)
        //         triviaGamePOP()
        //     } else {
        //     // $choice2.css('color', 'red')
        //     // $choice3.css('color', 'red')
        //     // $choice4.css('color', 'red')
        //     wrongAnswer($choice2, $choice3, $choice4)
        // } if ($popLyrics[1] === $popAnswers[1]){
        //     // $choice2.css('background-color', '#1DB954')
        //     rightAnswer($choice2)
        //     $popLyrics.splice(1,1)
        //     triviaGamePOP()
        // } else {
        //     // $choice1.css('color', 'red')
        //     // $choice3.css('color', 'red')
        //     // $choice4.css('color', 'red')
        //     wrongAnswer($choice1, $choice3, $choice4)
        // } if ($popLyrics[2] === $popAnswers[2]){
        //     // $choice3.css('color', '#1DB954')
        //     rightAnswer($choice3)
        //     $popLyrics.splice(2,1)
        //     triviaGamePOP()
        // } else {
        //     // $choice1.css('color', 'red')
        //     // $choice2.css('color', 'red')
        //     // $choice4.css('color', 'red')
        //     wrongAnswer($choice1, $choice2, $choice4)
        // } if ($popLyrics[3] === $popAnswers[3]){
        //     // $choice4.css('color', '#1DB954')
        //     rightAnswer($choice4)
        //     $popLyrics.splice(3,1)
        //     console.log("Hey POP Star! You beat this round!")
        // } else {
        //     // $choice1.css('background-color', 'red')
        //     // $choice3.css('background-color', 'red')
        //     // $choice2.css('background-color', 'red')
        //     wrongAnswer($choice1, $choice3, $choice2)
        // }
            
        



    } 


}

  //event listner for the random genre generated to show up
  $startButton.on('click', () => {
    $screen1.css('display', 'none')
    $screen2.css('display', 'inline-block').fadeOut("slow").delay(70000)
    generateGenre()
    
    $screen3.delay(80000).fadeIn("slow").css('display', 'inline-block')
  })

    //=================================
    // how can i make this pop up AFTER Animation 
    
//=================================

  //event listner for next button to get the next question 
  const $choice1 = $('.roundBttn1')
  const $choice2 = $('.roundBttn2')
  const $choice3 = $('.roundBttn3')
  const $choice4 = $('.roundBttn4')

  const $choiceButtons = $(".choiceBttns")

  
// arrays w song lyrics (layter maybe use an API)
const $pop = ['one, dont pick up the phone', 'it lingers when you\'re done', 'day to night to morning, keeping me in the moment', 'My lonliness is killing me, I must confess, I still believe']
const $rap = ['I know when that hotline bling', 'I know when you text me girl, I don\'t always reply,Well you\'re not an angel either, you can\'t even fly', 'I got a condo in Manhattan, Baby girl, what\'s hatnin\'?', 'All my ex\'s live in Texas like im George Strait']
const $country = ['Let\'s have a house party', 'Doin\' 15 in a 30, I ain\'t in no hurry', 'cold beer on a Friday night, A pair of jeans that fit just right', 'I don\'t wanna steal your freedom, I don\'t wanna change your mind']
const $latin = ['ella es callaita', 'Oye, baby, no seas mala, No me dejes con las ganas', 'Quiero respirar tu cuello despacito, Deja que te diga cosas al oido', 'Si todavía me amas como antes, Ya nada me parece interesante' ]

// answers 
const $popAnswers = ['new rules','god is a woman', 'say so', ' baby one more time']
const $rapAnswers = ['hotline bling', 'i spy', 'that\'s what I like', 'HYFR']
const $countryAnswers = ['house party', 'body like a backroad', 'chicken fried', 'take your time']
const $latinAnswers = ['callaita', 'chantaje', 'despacito', 'El Farsante']




//function for correct answers
function rightAnswer (correctClick){
    correctClick.on('click', (e)=>{
        console.log($(correctClick.currentTarget))
$(e.target).css({'background-color':'white','color':'green','border-color': 'green'})
})
}

// function that makes wrong answers red 
function wrongAnswer (clickedBttn){
    clickedBttn.on('click', (e)=>{
        console.log('wrong answer')
$(e.target).css({'background-color':'white','color':'red','border-color': 'red'})
})
}






})
