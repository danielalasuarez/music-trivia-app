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
    const $genres = ['pop', 'rap', 'country', 'latin']
    const $choiceButtons = $('.choiceBttns')
    var score = 0
    let index = 0
  
    //arrays
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
  

    
    //function that generates random genre//
    const $randomGenre = $genres[Math.floor(Math.random() * $genres.length)]
    // console.log($randomGenre)
    $('.randomGen').html($randomGenre)

    function generateGenre(questionIndex) {
      if ($randomGenre === 'pop') {
        const $questionPlacePop = $(
          '<p>' + gameMaterials.pop[questionIndex].question + '</p>',
        )
        $('#lyrics').append($questionPlacePop)
        for (let i = 0; i < $choiceButtons.length; i++) {
          $($choiceButtons[i]).unbind()
          $($choiceButtons[i])
            .html(gameMaterials.pop[i].answer)
            // .removeClass('incorrectButton').removeClass('correctButton')
          if (
            gameMaterials.pop[i].answer ===
            gameMaterials.pop[questionIndex].answer
          ) {
            rightAnswer($($choiceButtons[i]))
          } else {
            wrongAnswer($($choiceButtons[i]))
          }
        }
       
      } else if ($randomGenre === 'rap') {
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
  
      $screen3.delay(80000).fadeIn('slow').css('display', 'inline-block')
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
        score++
        console.log(score)
        index++
        $('#lyrics').html('')
        if (index < gameMaterials.pop.length) {
          generateGenre(index)
        } else {
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
      })
    }
  })
  