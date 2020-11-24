# screen-it



### Deployed Link v1
https://screenit.netlify.app/

### Deployed Link v2
https://screenit2.netlify.app/

### Figma Link
https://www.figma.com/file/QDFXvzCesbB6eX0gDPSsAQ/Frontend-Challenge?node-id=4%3A33

### Trello Board
https://trello.com/b/s8Ciuzfa


---


## Objective 

Recreate the provided movie tracker design using html/css/js but preferably with React.  


---


## v2 New Features 
*These items were added after the 24 hour deadline.* 

* Star Ratings have been refactored from two to one component. 
* Stars Ratings now feature a GSAP3 animation when 5 are selected. 
* Results row demonstrates interactivity with a new css animation hover state and iconography.
* Results row features an improved UI.
* Result tools feature improved icons.
* Edit functionality has been added for results.
* Local storage has been added to preserve entries. 
* Clear All button removes all entries at once and disables when no entries are there. 


---

## v1 Key Features 

*These items were completed within the 24 hour deadline.* 

* To help with your evaluation and my own production process — the entire project was tracked in the above Trello board. This allows further transparency into my workflow, such as [time spent](https://trello.com/c/te2ZPyp6), [tutorials taken when needed](https://trello.com/c/ZQ6hs0bG) and much more. 

* To help simulate my typical design approach, I also rebuilt the provided design in Figma. (Still keeping th original layout spec.) This includes a small design system that has new components, color styles and font styles. Doing so helped streamline the process in the long run when I had to add to the design for additional features. 

* This app has been built with React and uses ES6+ JS, Hooks, Props and a Context Provider. I stayed away from using bootstrap and opted to leverage CSS Grid, FlexBox, css variables and other custom styles.

* This site is also a PWA (Progress Web Application), which allows it to be downloaded to a computer or tablet as an offline "app". v1 scores 100% across the board in Google Chrome's Lighthouse report. 
![lighthouse report](./readme-assets/lighthouse-report.png) (*v2 scores 100% in all categories, except Accessibility. This is because the main and edit forms are the same component and therefore shame the same input `id`'s. Future fix might be to split forms into two components.*)

* Attention was paid to adding comments to the code to explain functions and creating TOC in longer style sheets.

* In addition to the 640px size, I also took some liberties and added  additional styles for larger / smaller breakpoints. This prevented the layout from breaking, while still staying within the general theme of the design. 
![Responsive Gif](./readme-assets/responsive.gif)  


* Clicking on a movie result will allow you to delete it or visit the IMDB page. This the IMDB link is accomplished by combining the OMDB API data (via Axios get request), with a query string on the IMDB url. 
![Tools Gif](./readme-assets/tools.png)  


* Some simple validation has been added to the filters to make sure they are included and to the API request. If no movie exists, then a placeholder is given.

* Avatars show up the first character of up to the first 3 word's. If there are more then two characters the font size gets smaller dynamically. 

* The Movie name hides overflow text and shows an ellipse after a preset width, which changes based on breakpoint.


