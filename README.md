# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### Screenshot

Mobile View:

<img src='./src/assets/images/2023-03-08-17-11-20.png' width='300'>

Desktop View:

<img src='./src/assets/images/2023-03-09-10-22-10.png' width='600'>

### Links

- Solution URL: [Link](https://github.com/jerryren527/results-summary-component-react)
- Live Site URL: [Link](https://jerryren527.github.io/results-summary-component-react/)
- Custom Figma File: [Link](https://www.figma.com/file/CoyaiGK65EDfxxG6gBsYqK/results-summary-component?node-id=0%3A1&t=ymMQQHLFnNxsrOfO-1)

### My process

### Built with

- HTML
- CSS
- Flexbox
- React

### What I learned

To add a `<head>` element to a React app, you can use the react-helmet package.

```
npm install react-helmet
```

Add `meta`, `link`, and `title` elements inside the `Helmet` component.

```js
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="stylesheet" href="style.css" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <title>Frontend Mentor | Results summary component</title>
    </Helmet>
    <App />
  </React.StrictMode>
);
```

---

To add a logo to a React app, put the image inside the _public_ folder. When setting `href` or `src` attributes to a URL, React will start looking for a file from the _public_ folder.
