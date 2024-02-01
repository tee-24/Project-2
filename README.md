# Rock, Paper, Scissors
Rock, paper scissors is a fun online game. It can be played alone or with a friend. Get ready to throw down some moves and see who comes out on top!

You can view the live site here - [rock-paper-scissors](https://tee-24.github.io/Project-2/index.html)

![responsive](assets/docs/Screenshot 2024-02-01 11.52.47.png)

## User Experience (UX)

### Target Audience
* Users that would like to play a game of rock, paper, scissors
* Users who would like to play an online game of rock, paper, scissors, versus a computer
* Users who would like to play a 2-player game of rock, paper, scissors online

### User Stories
* A user should be able to determine the site's purpose immediately
* A user should be able to easily and intuitively navigate the site
* A user should find it easy to determine the winner of the game

### Site Aims
* To offer a fun game to play
* To allow a single player to play against the computer
* To allow two players to play against each other

## Design
### Color Scheme
The final color scheme chosen was pink and light coral with black text.

### Typography 
The font chosen was Graduate.

### Wireframes
The design and structure for this website was created in Balsamiq wireframes. The designs produced for each page were desktop versions only. The final designs and structure differ from the wireframes due to developments during the construction of the website.

## Features

The website consists of 4 pages; the landing page, the game page for one player, and the game page for two players. The fourth page is a 404 error page which will open if the user clicks on a broken link.

* All Pages on the website have:

  * Favicon - This will provide an image in the the tab's header to allow the user to easily identify the website if they have multiple tabs open. The video game emoji was chosen as it matched the theme of the website.

  ![favicon](docs/features/favicon.jpg)

  * A responsive header containing the name of the game.

  ![header](docs/features/header.jpg)
   * Buttons - When the mouse hovers over the buttons, the background color of the button changes to aqua.

![buttons](docs/features/buttons.jpg)

  * A responsive footer.

![footer](docs/features/footer.jpg)

* Landing Page
  * Start Game button - When clicked, this button will change the content of the page and show 2 new buttons which will allow the user to select whether there are one or two players.

 ![about](docs/features/about-pg.jpg)
 
  * Instructions button - When clicked, a modal, containing the instructions for the game, will pop up.

  ![about](docs/features/about-pg.jpg)

* Game Page (1 Player)
  * Score section - A responsive score tracker under the header which tallies the number of wins of the user and the computer.

  ![menu-nav](docs/features/menu-nav.jpg)

  * Game area - Here, the user will choose either rock, paper or scissors. The buttons will become disabled once the user has made a choice.

  ![menu-pg](docs/features/menu-pg.png)
* Display area - This will display the user's choice, the computer's choice, and whether the user won or lost the game.

* Play again button - This will clear the display area and reset the game to be played again.

* Back to homepage button - This button will return the user back to the landing page.

* Game Page (2 Player)
  * Score section - A responsive score tracker under the header which tallies the number of wins of player 1 and player 2.

  ![menu-nav](docs/features/menu-nav.jpg)

  * Game area - This is split into 2 sections. In the first section, player 1 will choose either rock, paper or scissors. In the second section, player 2 will choose either rock, paper or scissors. The buttons will become disabled once both players have made a choice.

  ![menu-pg](docs/features/menu-pg.png)
* Display area - This will display player 1 choice, player 2 choice, and the winner of the game.

* Play again button - This will clear the display area and reset the game to be played again.

* Back to homepage button - This button will return the user back to the landing page.

  ![thank-you](docs/features/thank-you-pg.jpg)

* 404 Error Page

  * A message tells the user that the requested page cannot be found.

  * Contains a link to go back the the landing page without needing to use the back button.

  ![404](docs/features/404.jpg)

* Future Implementations
  * Round selection - The user would be able to choose how many rounds of the game they would like to play to determine the winner rather than having to use the play again button after every round

## Technologies Used

* HTML5 - Delivers the structure and content for the game
* CSS3 - Provides the styling for the game
* JavaScript - Provides functionality for the game
* Balsamiq - Used to create wireframes for the website
* Git - For version control
* Gitpod - Used to develop the website
* Gitbash - Terminal used to push changes to the GitHub repository
* GitHub - Used to host and deploy the website
* Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling
* [Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing
* [Google Fonts](https://fonts.google.com/) - Used to import the font used on the website
* [Favicon Generator](https://favicon.io/) - Used to create the favicon for the website
 * [iLoveIMG](https://www.iloveimg.com/) - Used to compress images
* [Am I Responsive](http://ami.responsivedesign.is/) - To show the website image on a range of devices

## Deployment & Local Development

### Deployment
The website was deployed to GitHub pages via the following steps:
1. Log in (or sign up) to Github
2. Go to the repository for this project
3. Click settings 
4. Under code and automation, click pages
5. Select main branch
6. Click save

### Local Development

#### How to Fork
To fork the repository:
1. Log in (or sign up) to Github
2. Go to the repository for this project
3. Click the Fork button in the top right corner

#### How to Clone
To clone the repository:
1. Log in (or sign up) to Github
2. Go to the repository for this project
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI
4. Copy the link shown
5. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory
6. Type 'git clone' into the terminal 
7.  Paste the link you copied in step 3
8. Press enter

## Testing 
Testing was ongoing throughout the entire build. I utilized Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

### Lighthouse Testing
I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

Landing Page
![landing](assets/docs/lh-landing.png)

1 Player Page
![1-player](assets/docs/lh-1player.png)

2 Player Page
![2-players](assets/docs/lh-2player.png)

404 Error Page
![404](assets/docs/lh-404.png)

### W3C Validator
The W3C validator was used to validate the HTML on all pages of the website. 

* [Landing Page-HTML](assets/docs/w3c-landing.png)


### Known Bugs

1. After clicking the play again button, the result is no longer printed to the display. However, thescores are still updating accordingly

### Full Testing
To fully test my website I performed the following testing using a number of browsers (google chrome, safari, mozilla firefox) and devices (HP laptop, iPad Pro 12.9 inch, iPhone 11 pro max).


| Test                                         | Action                                                                                                                                                                      | Expected Result                                                                                                                                                                                                                                                   | Pass/Fail |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Test start game button        | Click the start game button                                                                            | Displays 1 player button and 2 player button                                                                                                                                                                         | Pass      |
| Test hover effect on buttons | Place mouse over each button                                                                                                                     | Background color should turn aqua                                                                                                                                                                                                                                      | Pass      |
| Test instructions button                      | Click the instructions button                                                             | Opens instruction modal                                                                                                                                                                                                                                        | Pass      |
| Test closing modal                   | Click x at the top                                                                                                                                      |Modal closes                                                                                                     | Pass      |
| Test 1 player game   | Click on a choice                                                                                                                            | Score should increase for the winner                                                                                                                                                                                                                                     | Pass      |
| Test 2 player game                            | Click on a choice for player 1<br>Click on a choice for player 2                                                        | Pass      |
| Test play again button                           | Click play again button                                                       | Buttons should be re-enabled<br>Display area should be clear 
| Test back to homepage button                           | Click back to homepage button                                                       | Landing page should open                                                                                                                                                                  | Pass      |
  |

## Credits
* Fonts were sourced from [Google Fonts](https://fonts.google.com/)
* Favicon was sourced from [Favicon Generator](favicon.io)
* *Images were compressed by [iLoveIMG](https://www.iloveimg.com/)
* Button disabled property was learned from [W3 Schools](https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp)
* Modal box was learned from [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)
* [Table to Markdown](https://tabletomarkdown.com/) was used to cnvert Google sheets to Markdown language

### Acknowledgements
This game was designed and developed in conjunction with the Full Stack Software Developer Diploma course (ecommerce) at the Code Institute. I would like to thank my mentor, Daisy, the Slack community, and Code Institute for all their support.