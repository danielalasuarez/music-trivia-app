// make start button work and prompt the random genre
// random genre function

//  after rando genre is generated then after 20 seconds the game will begin
// lyrics will come out on screen
// user will have to guess the name of the song as fast as possible
// how many songs can you guess in 40 seconds?

// once this is working and the other rounds

$(() => {
  const $screen1 = $('#screen1')
  const $screen2 = $('#screen2')
  const $startButton = $('#startGame')
  const $genres = ['POP', 'RAP', 'COUNTRY', 'LATIN']

  function generateGenre() {
    const $randomGenre = $genres[(Math.floor(Math.random() * $genres.length))]
    // console.log($randomGenre)
    $('.card-body').html($randomGenre)
  }

  $startButton.on('click', () => {
    $screen1.css("display", "none");
    $screen2.css('display', 'inline-block')
    generateGenre();

  

    
    // $screen2.append($random)
  })

  // function that will make the start button generate the next screen and random genre
 

  
})
