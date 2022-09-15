---
layout: posts
excerpt: A simple plain JS dark toggle
---

Check out the [orignial](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8)

#### Adding the CSS

We will be adding CSS custom properties also known as CSS variables, which we can reference and modify throughout the document. If you wish to read more about [custom properties you can read on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties).
 
More information about css variables can be found here: [learn css variables in 5 minutes](https://www.freecodecamp.org/news/learn-css-variables-in-5-minutes-80cf63b4025d/)

Here's the tldr; version -

> Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation `--main-color: black;` and are accessed using the `var()` example: `var(--main-color);`

First, we'll add our light or default mode css variables to the :root pseudo class. It matches with the root element in your document tree, generally the <html> tag. We will use :root because we want to avail the variables globally.

```
:root {
    --primary-color: #24292e;
    --secondary-color: #0366d6;
    --font-color: #24292e;
    --bg-color: #f5f5f5;
    --heading-color: #fafafa;
    --heading-value: 255;
}
```

Second, we'll add our dark mode css variables.

```
[data-theme="dark"] {
    --primary-color: #f0f6fc;
    --secondary-color: #388bfd;
    --font-color: #f0f6fc;
    --bg-color: #0d1117;
    --heading-color: #161b22;
    --heading-value: 0;
}
```
What is `[data-theme="dark"]`? This means we are referencing a data attribute called data-theme with a value "dark". We will find the use of it in a while.

Then, we can reference these variables in our stylesheets like so-

```
body {
    background-color: var(--bg-color);
    color: var(--font-color);
    /*other styles*/
    .....
}

h1 {
    color: var(--secondary-color);

    /*other styles*/
    .....
}

a {
    color: var(--primary-color);

    /*other styles*/
    .....
}
```

#### Adding the "toggle switch"
This is essentially just a checkbox, however we will add some additional markup to style like a toggle switch. I referenced the styles from this codepen.

```html
<div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
  </label>
</div>
```

```css
.theme-switch-wrapper {
  display: flex;
  align-items: center;
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #66bb6a;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

#### Adding the JavaScript

The final part is to add the bit of JavaScript to tie it all together.

We have 3 tasks in hand-

- Add event handlers to handle accordingly the check/uncheck event of toggle-switch
- Store the user preference for future visits
- Check for saved user preference, if any, on load of the website

```js
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

```

Remember, the `data-theme` attribute we referenced in CSS above, this is where it's getting added to our root element.

This will also store the user preference for future visits. We will use browser's localStorage to store the user preference. The website will then on load check for saved user preference, if any, on load of the website. We will check if the theme preference is saved, if yes then we will, accordingly-

