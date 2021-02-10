import IDetail from "../interfaces/IDetail";

const detail: IDetail = {
    icon: 'thumb-tack',
    items: [
        {
            id: "w2dayStatistics",
            name: 'Statistics for lotteries ',
            description: `This is one of the projects I was working on at Österreichische Lotterien`,
            www: 'https://www.win2day.at/lotterie/lotto/lotto-statistik-details',
            notes: `JavaScript`
        },
        {
            id: "personalwolke",
            name: 'Time recording app at Workflow EDV',
            description: `Here you can get a small idea what I was doing at company Workflow EDV`,
            video: 'https://www.youtube.com/embed/5rKIz42DqGU',
            notes: `JavaScript`
        },
        {
            id: "hangman",
            name: 'Play hangman in a address bar',
            github: 'https://github.com/opam/hangman-in-the-address-bar',
            image: "../assets/images/hangman.jpg",
            description: `This is a very silly app where you can play hang man in a address bar. Could be an Easter-egg? :)`,
            www: 'https://hangman-in-the-address-bar.herokuapp.com/',
            notes: `JavaScript`
        },
        {
            id: "snake-game",
            name: 'Play snake with no hands!',
            github: 'https://github.com/opam/snake-game',
            image: "../assets/images/snake.jpg",
            description: `I took my old javascript "Snake" game and I have rebuit it, that I can move the snake just by tracking face. 
      It is still in development but how cool is that? :)`,
            www: 'https://snake-game-javascript.herokuapp.com/',
            notes: `JavaScript`
        },
        {
            id: "workflow-certificate",
            name: 'Hard work does not go unnoticed',
            description: `
          I recently changed my job and I just received a certificate from a previous employement. 
          After reading it, I was pleasantly surprised. 
          I always gave my heart to everything I did, and this letter confirms that my effort has been 
          seen and the hard work is really paying off. 
          I'd like to share this letter with you!
      `,
            notes: `Click the lower button "Certificate of employment" to open the certificate`,
            image: '../assets/images/workflow.jpg',
            links: [
                {
                    text: "Certificate of employment",
                    www: `../assets/certificates/certificate_of_employment_workflow.pdf`,
                    icon: 'certificate'
                }
            ]
        },
        {
            id: "perceptron-demo",
            name: 'Starting with Machine Learning!',
            github: 'https://github.com/opam/AI.perceptron_demo',
            image: "../assets/images/perceptron.jpg",
            description: `
      So I have finally decided to take a look at Machine Learning. 
      My very first Neural Networks project works.  
      Check out this demo written in Typescript and see whether a point is above or below a random line.
      This app is hosted at heroku cloud platform and it can take up to 10 seconds to wake up this page :)
      `,
            www: 'https://ai-perceptron-demo.herokuapp.com/',
            notes: `TypeScript, JavaScript, Perceptron, Machine Learning, Neural Networks`
        },
        {
            id: "flower-css",
            name: "Flower made with Css",
            github: 'https://github.com/opam/flower',
            image: "../assets/images/css-image.jpg",
            description: `The possibilities of drawing in css do not stop me astonishing. 
      That's why I decided to draw a small picture of a flower. This small animation is dedicated to my wife.
      Inspiration to draw a picture in css came from the presentation of Eva Lettner at the WeAreDevelopers conference 2017
      This app is hosted at heroku cloud platform and it can take up to 10 seconds to wake up this page :)`,
            www: 'https://flower-css.herokuapp.com/',
            notes: `Html, Css, Flower`
        },
        {
            id: "synchronous-pause-in-javascript",
            image: "../assets/images/sync-pause.jpg",
            name: "Synchronous pause in JavaScript",
            github: 'https://github.com/opam/wait-till-condition',
            description: `Did you ever stumble on how to make sleep your javascript code?
      There are many ways how to solve this issue and in this simple demo I wrote 2 that I find useful. So go and check it!`,
            notes: `Javascript, Pause, Sleep(Wait) Till Condition`
        },
        {
            id: "i-made-a-timer-for-our-standups",
            name: 'I have made a timer for Stand-Ups',
            github: 'https://github.com/opam/meeting-timer',
            image: "../assets/images/meeting-timer.jpg",
            description: `After many many times struggling with very long Stand-Ups I have finally decided to make a little
      counter for us to measure who is from the group the biggest talker :).`,
            notes: `Vue, Vuex, Typescript`
        },
        {
            id: "app-layout-jquery",
            name: 'Layout for an app done with Jquery',
            github: 'https://github.com/opam/app-layout',
            image: "../assets/images/layout-app.jpg",
            description: `Go and check out my demo layout. It has a user menu on the left side and a very
      nice system menu on the top. User menu is on mobile possible to open with a finger slide`,
            notes: `JavaScript, Jquery, Hammer library`
        },
        {
            id: "synchronize-column-cells",
            name: 'Synchronize rows in columns with different length',
            github: 'https://github.com/opam/synchronize-column-cells',
            image: "../assets/images/sync-columns.jpg",
            description: `This could be  when buildling complex mobile application with multiple viewpoints.
      Notice when you click into 1 column (into some row), matching  rows in other 2 columns will get aligned.`,
            notes: `Javascript, Mobile`
        },
        {
            id: "managing-dependencies-in-multi-module-project",
            name: 'Handle dependencies in multi-module project',
            github: 'https://github.com/opam/lerna-demo',
            image: "../assets/images/lerna.jpg",
            description: `This is a demo project where I setup lerna plugin for managing dependencies in multi-module project. 
      Why I would need something like this? To get rid of duplications, to keep main dependencies on top level and to correctly 
      inject modules into another modules.`,
            notes: `JavaScript, Lerna npm package`
        },
        {
            id: "jest-testing",
            name: 'How to test Typescript with Jest?',
            github: "https://github.com/opam/jest-testing",
            image: "../assets/images/jest.jpg",
            description: `So I did my homework and really sat down on something very important.
      Dealing with code is important, but when I do something a little bit more than just for fun, then 
      it should be also tested. And Jest library is for this perfect. In this project I wrote test for
      everything what I thought I would need as a Typescript developer`,
            notes: `React, Typescript, Jest`
        },
        {
            id: "under-construction",
            name: "",
            description: 'More articles from my older projects will come soon... :)',
        },
    ],

};
export default detail;
