# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://henry-pixel-dev.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

what i learned is that i can use the powerful psuedo class of css to apply some design and also i learnt how to use and manipulate the radio and check type input 

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.class = "has-[:checked]:bg-lightGreen has-[:checked]:border-greenDeep"
```
```js
function successfulMsg() {
  form.reset();
  successMsg.classList.remove('hidden');
  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 10000);
}
```


### Continued development
i want to improve more in writing logic and improving my ability to solve and debug 



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@Henry-pixel-dev](https://www.frontendmentor.io/profile/@Henry-pixel-dev)
- Twitter - [@Histobolq](https://www.twitter.com/@Histobolq)

