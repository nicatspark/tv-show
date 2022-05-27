# About

## Commands to install and run the application

Install
`yarn`

Run
`Yarn dev`

Build for production
`Yarn build`

## Comments

### Lazy loading / continuous scroll

Could not test endless scroll in the search result since as far as I read from the api it only supported 10 shows per search. Might have missed something but did however use `content-visibility: auto;` which is lazy rendering of markup, although this for now only works in Chrome based browsers. Images however are lazy-loaded which should be where the biggest benefit of lazy-loading is to be found.

### api calls and cache

Would probably have used React-Query to wrap the api calls in if it were for real, to get caching strategies in place like optimistic renders. Did my own rudimentary caching on network requests instead.

### About css

Used Emotion, not sure if it passes as a framework or library since it basically is plain css or more simlar to SASS with its nested css. Someone might have wanted to see if I would have written css in BEM format with regular css. My opinion is that the purpose is to write maintainable CSS and the best way to do this is to have component scoped css and use nesting. But I guess there are different opinions.

### Time constraints

As usual 80% went really fast and then most time was spent on the last 20%. Did not do it in one go so can't say exactly where the 5 hours stop was.

### Further improvments

A debouncer or throttle on the keyboard input in the search.
Some more work on some miss alignments in the ui.
The search string could be stored in sessionStorage so that when you return to search it would as when you left it.
etc...
