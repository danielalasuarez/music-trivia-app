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

// event listners to append they lyrics to the card

        if ($randomGenre === "POP"){
            // console.log($pop)//works but not what i want.. visit later 
           const $popLyrics = $pop[Math.floor(Math.random() * $pop.length)]
            $('#lyrics').append($popLyrics)
        } else if ($randomGenre === "RAP"){
            const $rapLyrics = $rap[Math.floor(Math.random() * $rap.length)]
            $('#lyrics').append($rapLyrics)
        } else if ($randomGenre === "COUNTRY"){
            const $countryLyrics = $country[Math.floor(Math.random() * $country.length)]
            $('#lyrics').append($countryLyrics)
        } else if ($randomGenre === "LATIN"){
            const $latinLyrics = $latin[Math.floor(Math.random() * $latin.length)]
            $('#lyrics').append($latinLyrics)
        }
        
        
}

  //event listner for the random genre generated to show up
  $startButton.on('click', () => {
    $screen1.css('display', 'none')
    $screen2.css('display', 'inline-block')
    generateGenre()
  })

// arrays w song lyrics (layter maybe use an API)
const $pop = ['one, dont pick up the phone', 'it lingers when you\'re done', 'day to night to morning, keeping me in the moment ']
const $rap = ['I know when that hotline bling', 'I know when you text me girl, I don\'t always reply,Well you\'re not an angel either, you can\'t even fly', 'I got a condo in Manhattan, Baby girl, what\'s hatnin\'?']
const $country = ['Let\'s have a house party', 'Doin\' 15 in a 30, I ain\'t in no hurry', 'cold beer on a Friday night, A pair of jeans that fit just right']
const $latin = ['ella es callaita', 'Oye, baby, no seas mala, No me dejes con las ganas', 'Quiero respirar tu cuello despacito, Deja que te diga cosas al oido' ]




















})
