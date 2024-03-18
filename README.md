# All about the sun

I'm creating this app to learn the main concepts of react. The app is published [here](https://all-about-the-sun.netlify.app/).

## Description

I will be using an api which provides timestamps for sunrise, sunset and other sun related data points, based on location. The app is WIP. 

## Getting Started

### Dependencies

- Describe any prerequisites, libraries, OS version, etc., needed before installing program.

  - [Node.js](https://nodejs.org/) (version 12 or higher)
  - [React](https://reactjs.org/) (version 17 or higher)
  - [Vite](https://vitejs.dev/) (version 2 or higher)

### Installing

- Clone this repo to you local computer
- Run ```npm install``` which will install all packages needed


### Executing program

- Navigate to the project folder ```cd react-upskill-project```
- Run ```npm run dev``` which will run you app on localhost


## Help

Reach out to Julia on Slack. 

## Author

Julia, but with support from Diego and the Technigo community. 

## Weekly Project Progress

Describe here in detail the weekly implementations

### Week 1 Progress

- **What did I implement this week?**
  - [x] Set up my project directory
  - [x] Updated the readme file to reflect what I will be doing
  - [x] Changed the logo to a sun
  - [x] Found an api I could use [Sunrise Sunset](https://sunrise-sunset.org/api) and tried fetching from it
  - [x] Dynamically showing when the sun will set in Stockholm (today)
  - [x] Used Netlify to publish the app [https://all-about-the-sun.netlify.app/](https://all-about-the-sun.netlify.app/)


- **What obstacles or roadblocks did I face this week?**

  - [x] Technical challenges (Had trouble with git authentication, issues with logging into Netlify, but both solved now)
  - [ ] Time constraints
  - [ ] Communication issues
  - [ ] Other (please specify)
  - [ ] The implementations above are examples, delete them and add yours

- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [x] Yes. When I open the app on my phone it is zoomed in a bit too much. Why is this? I need to zoom out manully to make sure everything fits the screen. Update, I manage to solve this by reducing the min-width, but would still be nice to have this explained and understand what best practices are. 
  - [ ] No
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

### Week 2 Progress

- **What did I implement this week?**

  - [x] A component called _Header_. I made it so that the sun and the title of the app moves to what becomes a topbar as you scroll. The header takes three input parameters as props, the initial height of the div, the final height of the div (which is the height of the topbar) and the initial size of the sun. 
  - [x] Worked on functions within the header component to calculate the positions of the sun and the main title so that they move nicely as the user scrolls. I used the ? : syntax to dictate when they should stop moving and resize. 
  - [x] A componenet called _Intro_, which has a child component called _SunsetInStockholm_
  - [x] A component called _Container_, this is where I will put the main content later. 


- **What obstacles or roadblocks did I face this week?**

  - [ ] Technical challenges
  - [ ] Time constraints
  - [ ] Communication issues
  - [ ] Other (please specify)
  - [ ] The implementations above are examples, delete them and add yours

- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [x] Yes, see questions below.
  - [ ] No
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

- **Questions:**
  - In the Header component I have added a div below the main div (with the same height as the main div) to push the rest of the content down. Is this how it should be done? If I don't add the extra div, the topbar will be placed right above the other content. 
  - I imagine all values in the Header component get recalulated as soon as I scroll. Am I right in this? If yes, is this an issue? 
  - I noticed some components work with dark mode, but the ones I've built don't. How can I make them work in dark mode too? 

### Week 3 Progress

- **What did I implement this week?**
  - [x] Buttons which let the user pick a city, which then sets the city, latitude, longitude and timezone using useState
  - [x] Dynamic API which uses the input parameters mentioned above, the API is triggered on change using useEffect
  
  **What obstacles or roadblocks did I face this week?**

  - [x] Difficult to work with timezone data, I solved my use case, but there is probably a better way to solve it. 
  - [x] When I console logged latitude/longitude it appeared as if the state had not been updated, but I learned later that was because the console.log() was executed before the setLatitude/Longitude were done. This was not clear to me initially and a bit confusing. 
  
- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [x] On row 23 in the SunsetApi.jsx file I am checking the type of "timestring". When the app is rendered for the first time there is no response from the api and without this if statement the code wouldn't work. But is there a better way to handle this? 
  - [x] Is there a smarter way to handle the data per each city in Container.jsx? Should I have some sort of configuration file instead? Or maybe it should just be the city? And the latitude, longitude and timezone data I should fetch from an API based on the City? 
  - [ ] No
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

### Week 4 Progress

- **What did I implement this week?**
  - [x] Tried D3.js for data visualization
  - [x] Explored how to map data to layout attributes

  **What obstacles or roadblocks did I face this week?**

  - [ ] Technical challenges
  - [ ] Time constraints
  - [ ] Communication issues
  - [ ] Other (please specify)

- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [ ] Yes
  - [x] No, I have just explored myself, don't have anything specific to ask
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

### Week 5 Progress

- **What did I implement this week?**

  - [ ] Feature A
  - [ ] Feature B
  - [ ] Bug fixes
  - [ ] Refactoring
  - [ ] The implementations above are examples, delete them and add yours

- **What obstacles or roadblocks did I face this week?**

  - [ ] Technical challenges
  - [ ] Time constraints
  - [ ] Communication issues
  - [ ] Other (please specify)
  - [ ] The implementations above are examples, delete them and add yours

- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [ ] Yes
  - [ ] No
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

### Week 6 Progress

- **What did I implement this week?**
  - [ ] Feature A
  - [ ] Feature B
  - [ ] Bug fixes
  - [ ] Refactoring
  - [ ] The implementations above are examples, delete them and add yours
- **What obstacles or roadblocks did I face this week?**

  - [ ] Technical challenges
  - [ ] Time constraints
  - [ ] Communication issues
  - [ ] Other (please specify)
  - [ ] The implementations above are examples, delete them and add yours

- **Is there anything in particular that I would benefit from reviewing with the code instructor to enhance or solve my obstacles or roadblocks of the week?**
  - [ ] Yes
  - [ ] No
  - [ ] Not sure, but would like guidance
  - [ ] The implementations above are examples, delete them and add yours

## License

This project, scaffolded using the Vite engine, is for educational purposes. This template is provided by the Technigo organization.

## Acknowledgments

Inspiration, code snippets, etc.

- [awesome-readme](https://github.com/matiassingers/awesome-readme)
- [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [dbader](https://github.com/dbader/readme-template)
- [zenorocha](https://gist.github.com/zenorocha/4526327)
- [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)