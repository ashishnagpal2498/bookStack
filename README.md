
# Assignment 1

* *Date Created*: 05 February 2024
* *Last Modification Date*: 07 February 2024
* *Assignment URL*: https://git.cs.dal.ca/anagpal/csci-5709-assignments/-/tree/main/Assignment1?ref_type=heads
* *GitLab URL*: https://git.cs.dal.ca/anagpal/csci-5709-assignments
* *Github URL*: https://github.com/ashishnagpal2498/bookStack
* *Deployment Link*: https://bookstack-awd.netlify.app/


## Authors

* [Ashish Nagpal](ashish.nagpal@dal.ca)

## Getting Started

To start with the project, I created a new sample react application using ```npx create-react-app .``` command. Following this I changed the code according to my requirements and structured the project with ``src`` directory as :-
```
├── App.css
├── App.js
├── App.test.js
├── book-cover-1.png
├── book-cover-2.jpg
├── components
│   ├── layouts
│   │   ├── BookCard.js
│   │   ├── FilterBar.js
│   │   ├── LibraryBackground.js
│   │   ├── Navigation.js
│   │   ├── Pagination.js
│   │   └── Search.js
│   └── pages
│       └── BookLibrary.js
├── index.css
├── index.js
├── reportWebVitals.js
├── setupTests.js
└── stylesheets
    ├── book-library.css
    └── header-nav.css
```

### Prerequisites

1. [React](https://legacy.reactjs.org/docs/getting-started.html/) - Web framework
2. [Npm](https://docs.npmjs.com//) - Dependency Management
3. [Node](https://nodejs.org/docs/latest/api/) - Javascript Runtime environment

### Installing

1. Clone the project repository by using the URL - 

2. Go into the project directory and install the required dependency using ```npm install``` command.

3. Once the dependencies are installed, start the development server by ```npm start``` command.

4. Server will be running on port - 3000 [http://localhost:3000](http://localhost:3000). 

## Deployment

The deployment is made through Netlify. 
[![Netlify Status](https://api.netlify.com/api/v1/badges/91e4c658-01a7-4e65-a1eb-f70557c9f365/deploy-status)](https://app.netlify.com/sites/bookstack-awd/deploys)

## Testing
I have implemented search task which is part of Book Library Feature. To test the task working you can search the following terms: "Percy", "Harry", "1".

## Sources Used

### Learning Materials
To have understanding of HTML and CSS concepts and refresh my knowledge on the topics I watched following videos :-
1. [Advanced HTML/CSS Concepts Crash Course](https://www.youtube.com/watch?v=XhqEuyWjbdo) - *codedamn*

2. [Flexbox CSS In 20 Minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc) - *Traversy Media*

Using the above materials, I learnt about HTML5 semantics, CSS selectors, pseudo selectors and flex boxes.

### Code 

### 1.  book-library.css

*Lines 230 - 238*

```css
.book-shelf {
    position: absolute;
    bottom: 40px;
    width: 60%;
    background: linear-gradient(30deg,rgba(254,228,175,255), #996443); /* Used here */
    padding: 5px;
    text-align: center;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.4);
} 

```

The code above was created by adapting the code in [Mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) as shown below: 

```css
background: linear-gradient(#e66465, #9198e5);
background: linear-gradient(45deg, blue, red)

```

- The code was used by studying about linear-gradient CSS function and then implementing according to requirement of the assignment.

- I used the code because I wanted to implement the book shelf having a real visual of how actually the shelf looks like.

- I combined the above 2 linear-gradient functions provided and used background having gradient effect along with rotation at 30 degree.

### 2. book-library.css

*Lines 96 - 99 and 120 - 124*

```css
.search-box input:not(:placeholder-shown):not(:focus)+label {
    opacity: 0;
    pointer-events: none;
}
...
...
.search-box input:not(:placeholder-shown)~#remove-search {
    opacity: 1;
    cursor: pointer;
    pointer-events: all;
}
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/a/61130966) as shown below: 

```css
input:not(:placeholder-shown) {
  border: 1px solid red;
}
```

- The query was present on stackoverflow as ``` Detect if an input has text in it using CSS -- on a page I am visiting and do not control? ```. I skimmed through all the answers and used the best possible answer for my requirement.
- I had a requirement that the remove text button and search label should be visible and not visible based on the text present in the input box. 
- I modified the code to use specifically for label and remove-search icon in combination with *CSS selectors*.

### 3. FilterBar.js, Navigation.js, Search.js

*Lines 29, 24, 41 respectively*

```html
<!-- Filter Icon -->
<span id='filter-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="filter"><path d="M2 7h.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2H9.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2zm4-3a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm24 11h-.142a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h20.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-4 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm4 7H19.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h10.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-14 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg> </span>

<!-- Notification Bell Icon -->

<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Bell"><g data-name="Layer 2" fill="#ffffff" ><g data-name="bell" fill="#ffffff" ><rect width="24" height="24" opacity="0" fill="#ffffff" ></rect><path d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88 6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4zM5.51 16l1.18-1.18a2 2 0 0 0 .59-1.42V8.73A4.73 4.73 0 0 1 8.9 5.17 4.67 4.67 0 0 1 12.64 4a4.86 4.86 0 0 1 4.08 4.9v4.5a2 2 0 0 0 .58 1.42L18.49 16z" fill="#ffffff"></path></g></g></svg></a></li>

<!-- Search Icon -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>

```
The code above was created by adapting the code in [Iconscout](https://iconscout.com/icons/cross) having multiple icons options. 


```html
<svg></svg>
```


- The icons code was present on the site available.
- I wanted to display the icons to make the UI user friendly.
- I modified the code by adding appropriate CSS on the ``HTML`` element.

## Image Credits
1. *Books on Wooden Shelves Inside Library* by Stanislav Kondratiev, visit https://www.pexels.com/photo/books-on-wooden-shelves-inside-library-2908984/

2. *Percy Jackson and the Olympians* by Rick Riordan visit https://www.readriordan.com/2022/02/15/cover-reveals-percy-jackson-and-the-olympians/

3. "Harry Potter and the Half-Blood Prince Book Cover" by Lordcolus is licensed under CC BY 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by/2.0/?ref=openverse. 


## Acknowledgments
* I am grateful to the coding community for all of their hardwork in providing videos, articles and blogs related to frontend development. The materials provided served as a foundation for understanding and learning it's functionality and logic. 

* The valuable insights helped me in brushing up the skills and contributing efficiently towards the assignment. Their contribution is highly appreciated.