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
// const $questions = [];

  //function that generates random genre
  function generateGenre() {
    const $randomGenre = $genres[Math.floor(Math.random() * $genres.length)]
    // console.log($randomGenre)
    $('.randomGen').html($randomGenre)
    //trying to start the game below 
    
    //=================================
    // how can i make this pop up AFTER Animation 
    $screen3.css('display', 'inline-block')
//=================================

        if ($randomGenre === "POP"){
            console.log($pop)//works but not what i want.. visit later 
           

            
        }
        
        
}

  //event listner for the random genre generated to show up
  $startButton.on('click', () => {
    $screen1.css('display', 'none')
    $screen2.css('display', 'inline-block')
    generateGenre()
  })

// arrays w song lyrics (layter maybe use an API)
const $pop = ['one, dont pick up the phone', 'it lingers when you\'re done']
const $rap = ['I know when that hotline bling']
const $country = ['Let\'s have a house party']
const $latin = ['ella es callaita']

// event listner for round 1 to show up after screen 2 gone 


















})
