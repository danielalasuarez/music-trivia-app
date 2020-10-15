// make start button work and prompt the random genre
// random genre function

//  after rando genre is generated then after 20 seconds the game will begin
// lyrics will come out on screen
// user will have to guess the name of the song as fast as possible
// if user clicks the right answer thats a point if user clicks wrong answer thats -1 point
// how many songs can you guess in 40 seconds? // add timer 

// need to add function that will continue if right answer is clicked 
// need to add logic to keep track of points gained/lost
//need to add timer 
//need to add more lyrics & maybe more buttons
//need to fix css
//if time add other rounds


$(() => {
  //variables
  const $screen1 = $('#screen1')
  const $screen2 = $('#screen2')
  const $screen3 = $('#screen3')
  const $startButton = $('#startGame')
  const $genres = ['POP', 'RAP', 'COUNTRY', 'LATIN']
  var score = 0;

  //function that generates random genre
  function generateGenre() {
    const $randomGenre = $genres[Math.floor(Math.random() * $genres.length)]
    // console.log($randomGenre)
    $('.randomGen').html($randomGenre)
    //trying to start the game below

    //// function to append they lyrics (questions) to the card////

    ////////below is what I had before the index
    //const $rapLyrics = $rap[Math.floor(Math.random() * $rap.length)]
    //const $countryLyrics = $country[Math.floor(Math.random() * $country.length)]
    //const $latinLyrics = $latin[Math.floor(Math.random() * $latin.length)]

    //// setting variables that generate random string from our arrays that include lyrics////
    //popindex generates random string of $pop and gets the index(number) of the string from $pop it is generating
    //$popLyrics is $pop going through the raqndom array WITH the index. Need this for later to loop through $popAnswers
    const popIndex = Math.floor(Math.random() * $pop.length) //gives number value
    const $popLyrics = $pop[popIndex] // wrap in a startgame funciton //

    const rapIndex = Math.floor(Math.random() * $rap.length)
    const $rapLyrics = $rap[rapIndex]

    const countryIndex = Math.floor(Math.random() * $country.length)
    const $countryLyrics = $country[countryIndex]

    const latinIndex = Math.floor(Math.random() * $latin.length)
    const $latinLyrics = $latin[latinIndex]

    function generateTriviaQuestions() {
      if ($randomGenre === 'POP') {
        // console.log($pop)//works
        //stick lyrics to the top of the card
        $('#lyrics').append($popLyrics)
        // loop through all of the buttons and append to the pop answers array to each button
        for (let i = 0; i < $choiceButtons.length; i++) {
          $($choiceButtons[i]).append($popAnswers[i])
        }
        triviaGamePOP() // calling the function that triggers the game to start
      } else if ($randomGenre === 'RAP') {
        //appenidng the random rap lyrics to the top of card
        $('#lyrics').append($rapLyrics)
        // loopoing through the buttons and appending rap answers array to each button
        for (let i = 0; i < $choiceButtons.length; i++) {
          $($choiceButtons[i]).append($rapAnswers[i])
        }
        triviaGameRAP()
      } else if ($randomGenre === 'COUNTRY') {
        //appenidng the random rap lyrics to the top of card
        $('#lyrics').append($countryLyrics)
        // loopoing through the buttons and appending country answers array to each button
        for (let i = 0; i < $choiceButtons.length; i++) {
          $($choiceButtons[i]).append($countryAnswers[i])
        }
        triviaGameCOUNTRY()
      } else if ($randomGenre === 'LATIN') {
        //appenidng the random rap lyrics to the top of card
        $('#lyrics').append($latinLyrics)
        // loopoing through the buttons and appending latin answers array to each button
        for (let i = 0; i < $choiceButtons.length; i++) {
          $($choiceButtons[i]).append($latinAnswers[i])
        }
        triviaGameLATIN()
      }
    }
    generateTriviaQuestions()

    /////////functions for games to chnage color right/ wrong answers///////////////////

    ////game for the pop genre////
    function triviaGamePOP() {
      // loop that loops through all of the buttons and says if the popindex is equal to i(a num) then run right answer(changes css) and use the buttons with i as a param
      for (let i = 0; i < $choiceButtons.length; i++) {
        // targets alll of the buttons
        if (popIndex === i) {
          // we are setting popindex to i(a random value)
          rightAnswer($($choiceButtons[i])); // we run rightAnswer which changes css and use the buttons[i].. this means if popindex i is true then run the right answer function w that button that has value of i
        } else {
          wrongAnswer($($choiceButtons[i])); // if popIndex is not i then run wrong answers function  
          
        }
      }
    }

    ////game for the rap genre////
    function triviaGameRAP() {
      // loop that loops through all of the buttons and says if the popindex is equal to i(a num) then run right answer(changes css) and use the buttons with i as a param
      for (let i = 0; i < $choiceButtons.length; i++) {
        // targets alll of the buttons
        if (rapIndex === i) {
          // we are setting popindex to i(a random value)
          rightAnswer($($choiceButtons[i])) // we run rightAnswer which changes css and use the buttons[i].. this means if popindex i is true then run the right answer function w that button that has value of i
        } else {
          wrongAnswer($($choiceButtons[i])) // if popIndex is not i then run wrong answers function
        }
      }
    }

    ////game for the country genre////
    function triviaGameCOUNTRY() {
      // loop that loops through all of the buttons and says if the popindex is equal to i(a num) then run right answer(changes css) and use the buttons with i as a param
      for (let i = 0; i < $choiceButtons.length; i++) {
        // targets alll of the buttons
        if (countryIndex === i) {
          // we are setting popindex to i(a random value)
          rightAnswer($($choiceButtons[i])) // we run rightAnswer which changes css and use the buttons[i].. this means if popindex i is true then run the right answer function w that button that has value of i
        } else {
          wrongAnswer($($choiceButtons[i])) // if popIndex is not i then run wrong answers function
        }
      }
    }

    ////game for the latin genre////
    function triviaGameLATIN() {
      // loop that loops through all of the buttons and says if the popindex is equal to i(a num) then run right answer(changes css) and use the buttons with i as a param
      for (let i = 0; i < $choiceButtons.length; i++) {
        // targets alll of the buttons
        if (latinIndex === i) {
          // we are setting popindex to i(a random value)
          rightAnswer($($choiceButtons[i])) // we run rightAnswer which changes css and use the buttons[i].. this means if popindex i is true then run the right answer function w that button that has value of i
        } else {
          wrongAnswer($($choiceButtons[i])) // if popIndex is not i then run wrong answers function
        }
      }
    }
  }

  ////function for correct answers to turn green////
  // when correctClick is clicked then we run an anon function that makes e the target and changes css
  function rightAnswer(correctClick) {
    correctClick.on('click', (e) => {
      // console.log($(correctClick.currentTarget)) //worked
      $(e.target).css({
        'background-color': '#191414',
        color: '#1DB954',
        'border-color': '#1DB954',
      })
      alert("CORRECT!")
      score++;
      console.log(score)
    })
  }

  ////function that makes wrong answers red////
  function wrongAnswer(clickedBttn) {
    clickedBttn.on('click', (e) => {
      // console.log('wrong answer') //worked
      $(e.target).css({
        'background-color': '#191414',
        color: 'red',
        'border-color': 'red',
      })
      alert("WRONG!")
    })
  }

  //event listner for the random genre generated to show up
  $startButton.on('click', () => {
    $screen1.css('display', 'none')
    $screen2.css('display', 'inline-block').fadeOut('slow').delay(70000)
    generateGenre()

    $screen3.delay(80000).fadeIn('slow').css('display', 'inline-block')
  })

  ////event listner for next button to get the next question ////
  const $choice1 = $('.roundBttn1')
  const $choice2 = $('.roundBttn2')
  const $choice3 = $('.roundBttn3')
  const $choice4 = $('.roundBttn4')

  const $choiceButtons = $('.choiceBttns')

  // arrays w song lyrics (layter maybe use an API)
  const $pop = [
    'one, dont pick up the phone',
    "it lingers when you're done",
    'day to night to morning, keeping me in the moment',
    'My lonliness is killing me, I must confess, I still believe',
  ]
  const $rap = [
    'I know when that hotline bling',
    "I know when you text me girl, I don't always reply,Well you're not an angel either, you can't even fly",
    "I got a condo in Manhattan, Baby girl, what's hatnin'?",
    "All my ex's live in Texas like im George Strait",
  ]
  const $country = [
    "Let's have a house party",
    "Doin' 15 in a 30, I ain't in no hurry",
    'cold beer on a Friday night, A pair of jeans that fit just right',
    "I don't wanna steal your freedom, I don't wanna change your mind",
  ]
  const $latin = [
    'ella es callaita',
    'Oye, baby, no seas mala, No me dejes con las ganas',
    'Quiero respirar tu cuello despacito, Deja que te diga cosas al oido',
    'Si todavía me amas como antes, Ya nada me parece interesante',
  ]

  // answers
  const $popAnswers = [
    'new rules',
    'god is a woman',
    'say so',
    ' baby one more time',
  ]
  const $rapAnswers = ['hotline bling', 'i spy', "that's what I like", 'HYFR']
  const $countryAnswers = [
    'house party',
    'body like a backroad',
    'chicken fried',
    'take your time',
  ]
  const $latinAnswers = ['callaita', 'chantaje', 'despacito', 'El Farsante']
})
