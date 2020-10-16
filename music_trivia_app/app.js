// make start button work and prompt the random genre
// random genre function

//  after rando genre is generated game begins
// lyrics will come out on screen
// user will have to guess the name of the song as fast as possible
// if user clicks the right answer thats a point if user clicks wrong answer that is no point. the point of the game is to beat your high score.


$(() => {
    //variables
    const $screen1 = $('#screen1')
    const $screen2 = $('#screen2')
    const $screen3 = $('#screen3')
    const $startButton = $('#startGame')
    const $genres = ['pop', 'rap', 'country', 'latin']
    const $choiceButtons = $('.choiceBttns')
    var score = 0
    let index = 0
  
    //object that contains arrays with different genre functions
    const gameMaterials = {
      pop: [
        {
          question: 'one, dont pick up the phone',
          answer: 'new rules',
        },
        {
          question: "it lingers when you're done",
          answer: 'god is a woman',
        },
        {
          question: 'day to night to morning, keeping me in the moment',
          answer: 'say so',
        },
        {
          question: 'My lonliness is killing me, I must confess, I still believe',
          answer: 'baby one more time',
        },
      ],
  
      rap: [
        {
          question: 'I know when that hotline bling',
          answer: 'hotline bling',
        },
        {
          question:
            "I know when you text me girl, I don't always reply,Well you're not an angel either, you can't even fly",
          answer: 'i spy',
        },
        {
          question: "I got a condo in Manhattan, Baby girl, what's hatnin'?",
          answer: "that's what I like",
        },
        {
          question: "All my ex's live in Texas like im George Strait",
          answer: 'HYFR',
        },
      ],
  
      country: [
        {
          question: "Let's have a house party",
          answer: 'house party',
        },
        {
          question: "Doin' 15 in a 30, I ain't in no hurry",
          answer: 'body like a backroad',
        },
        {
          question:
            'cold beer on a Friday night, A pair of jeans that fit just right',
          answer: 'chicken fried',
        },
        {
          question:
            "I don't wanna steal your freedom, I don't wanna change your mind",
          answer: 'take your time',
        },
      ],
  
      latin: [
        {
          question: 'ella es callaita',
          answer: 'callaita',
        },
        {
          question: 'Oye, baby, no seas mala, No me dejes con las ganas',
          answer: 'chantaje',
        },
        {
          question:
            'Quiero respirar tu cuello despacito, Deja que te diga cosas al oido',
          answer: 'despacito',
        },
        {
          question:
            'Si todavía me amas como antes, Ya nada me parece interesante',
          answer: 'El Farsante',
        },
      ],
    }
  

    
    //generates random genre//
    const $randomGenre = $genres[Math.floor(Math.random() * $genres.length)]
    // console.log($randomGenre)
    $('.randomGen').html($randomGenre)

    /// game function//
    function generateGenre(questionIndex) {
      if ($randomGenre === 'pop') { // if it generates pop
        const $questionPlacePop = $( //grabbing the index of the question in pop array in this case 
          '<p>' + gameMaterials.pop[questionIndex].question + '</p>',
        )
        $('#lyrics').append($questionPlacePop) // appending what we grabbed to #lyric
        for (let i = 0; i < $choiceButtons.length; i++) { //grabbing and looping through buttons
          $($choiceButtons[i]).unbind() // clearing out what we setthe buttons to
          $($choiceButtons[i]) //grabbing index of buttons
            .html(gameMaterials.pop[i].answer) //adding the answers to the display of buttons
          if ( //if the index of the answer in pop array is equal to the index of the answer randomly chosen...
            gameMaterials.pop[i].answer ===
            gameMaterials.pop[questionIndex].answer
          ) {
            rightAnswer($($choiceButtons[i])) // run the right answer function on the button w the same index 
          } else {
            wrongAnswer($($choiceButtons[i])) // if not run wrong answer on the index that are not the same
          }
        }
       
      } else if ($randomGenre === 'rap') { // repeating the above for every genre 
        const $questionPlaceRap = $(
          '<p>' + gameMaterials.rap[questionIndex].question + '</p>',
        )
        $('#lyrics').append($questionPlaceRap)
        for (let i = 0; i < $choiceButtons.length; i++) {
            $($choiceButtons[i]).unbind()
        $($choiceButtons[i])
        .html(gameMaterials.rap[i].answer)
        // .removeClass('incorrectButton').removeClass('correctButton')
        if (
            gameMaterials.rap[i].answer ===
            gameMaterials.rap[questionIndex].answer
          ) {
            rightAnswer($($choiceButtons[i]))
          } else {
            wrongAnswer($($choiceButtons[i]))
          }
         
        }
        
      } else if ($randomGenre === 'country') {
        const $questionPlaceCountry = $(
          '<p>' + gameMaterials.country[questionIndex].question + '</p>',
        )
        $('#lyrics').append($questionPlaceCountry)
        for (let i = 0; i < $choiceButtons.length; i++) {
            $($choiceButtons[i]).unbind()
            $($choiceButtons[i])
            .html(gameMaterials.country[i].answer)
            // .removeClass('incorrectButton').removeClass('correctButton')
            if (
                gameMaterials.country[i].answer ===
                gameMaterials.country[questionIndex].answer
              ) {
                rightAnswer($($choiceButtons[i]))
              } else {
                wrongAnswer($($choiceButtons[i]))
              }
        }
        
      } else if ($randomGenre === 'latin') {
        const $questionPlaceLatin = $(
          '<p>' + gameMaterials.latin[questionIndex].question + '</p>',
        )
        $('#lyrics').append($questionPlaceLatin)
        for (let i = 0; i < $choiceButtons.length; i++) {
            $($choiceButtons[i]).unbind()
            $($choiceButtons[i])
            .html(gameMaterials.latin[i].answer)
            // .removeClass('incorrectButton').removeClass('correctButton')
            if (
                gameMaterials.latin[i].answer ===
                gameMaterials.latin[questionIndex].answer
              ) {
                rightAnswer($($choiceButtons[i]))
              } else {
                wrongAnswer($($choiceButtons[i]))
              }
        }
        
      }
    }
  
    ////event listner that displays the random genre////
    $startButton.on('click', () => {
      $screen1.css('display', 'none')
      $screen2.css('display', 'inline-block').fadeOut('slow').delay(70000)
      generateGenre(index)
  
      $screen3.delay(100000).fadeIn('slow').css('display', 'inline-block')
    })
  
  
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
        score++ // increments score 
        console.log(score)
        index++
        
        $('#lyrics').html('') // clears out the displayed index so only the index ++ will be displayed
        if (index < gameMaterials.pop.length) { //if the index is less than the length of the array pop
            setTimeout(() => {
                $choiceButtons.attr( "style", "" )
            generateGenre(index) //then run the game function again passing through the index which means run it but it already ran the first index
            }, 500) // delays the green css and changes it back 
        } else { // if index is not less than the lenght of pop array game over 
          alert('GAME OVER!! FINAL SCORE: ' + score)
        }
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
          console.log(score)
          index++ //if answer is wrong still increment index 
          $('#lyrics').html('') // clear html display so only next one can be displayed

        if (index < gameMaterials.pop.length) { // same as above except we are not incrementing the score 
            setTimeout(() => {
                $choiceButtons.attr( "style", "" )
            generateGenre(index) //then run the game function again passing through the index which means run it but it already ran the first index
            }, 500)
        } else {
          alert('GAME OVER!! FINAL SCORE: ' + score)
   
        }
      })
    }





  })

  