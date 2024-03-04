# Week 2 - Feedback

## Student Input

- `In the Header component I have added a div below the main div (with the same height as the main div) to push the rest of the content down. Is this how it should be done? If I don't add the extra div, the topbar will be placed right above the other content.`
- `I imagine all values in the Header component get recalulated as soon as I scroll. Am I right in this? If yes, is this an issue?`
- `I noticed some components work with dark mode, but the ones I've built don't. How can I make them work in dark mode too?`

### Teacher Output

#### Feedback 1

heheh love this workaround cause it shows that you are finding a way aaround it. In this case you have some css properties within the class 'header' that is playing with your styiling. Line 220 of your index of your css file has a propert of `position` with a value set to `fixed`. If you want that approach for the NavBar to stay fixed upon scroll of the user, I would either approach it by swapping the `fixed` value for a `sticky` value and adding another property that is the `top` property with a value of `0px` in order to have the same visual behaviour without the necessity of adding that extra div.

Here is an example:

```css
.header {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* transition: all 0.3s ease; */
  z-index: 10;
  border-bottom-width: 2px;
  border-bottom-style: solid;
}
```

#### Feedback 2

Put bluntly, no, no issuess here, the language is meant to behave the way you are applying the little transition under the class `.header-logo` once the scroll is put in place. If you want to remove that little lag that once happens (in my case particulary becuase I set my trackpad to be fast), i would increase the 0.s valuess on line 228 within your css file from 0 to 0.3 on both. Example:

```css
.header-logo {
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
}
```

#### Feedback 3

Within your CSS file lines 95-106 contains a media attribute that triggers the styles for some of these elements that you will have within your webapp. Now, this approach is done through CSS. I will teach you tomorrow how to achieve this by doing it through the use of state. Nevertheless here is an example:

React Component

```js
import { useState } from "react";
import "./styles.css"; // Import your CSS file

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-container ${isDarkMode ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="content">
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <p>
          This is an example of a React functional component using state and
          hooks to toggle between dark and light themes.
        </p>
      </div>
    </div>
  );
};
```

```css
.theme-container {
  padding: 20px;
}

.light {
  background-color: #f0f0f0;
  color: #333;
}

.dark {
  background-color: #333;
  color: #f0f0f0;
}

.content {
  padding: 20px;
}

button {
  margin-bottom: 10px;
}
```

In this example:

We use the useState hook to maintain the state of the theme (dark or light).
toggleTheme function toggles the value of isDarkMode.
The class of the div container (theme-container) changes based on the isDarkMode state.
Upon clicking the button, toggleTheme is called, which changes the theme accordingly.
CSS classes light and dark define styles for the light and dark themes respectively.
The button at the top of the component triggers the toggle functionality.
