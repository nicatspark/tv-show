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

Could not test endless scroll in the search result since as far as I read from the api it only supported 10 shows per search. Might have missed something but did however use `content-visibility: auto;` which is lazy rendering of markup, although this for now only works in Chrome based browsers. Images however are lazy-loaded which should be where the biggest benefit of lazy-loading is to be found. (Although it seemed bugy on my iphone)

### api calls and cache

Would probably have used React-Query to wrap the api calls in if it were for real, to get caching strategies in place like optimistic renders etc. Did my own rudimentary caching on network requests instead.

### About css

Used Emotion, not sure if it passes as a framework or library since it basically is plain css or more simlar to SASS with its nested css. Someone might have wanted to see if I would have written css with BEM formated classes with regular css. My opinion is that writing maintainable CSS is the primary objective and the best way to do this is to have component scoped css and use nesting. Bothering with BEM give few benefits imho. I prefer to stay true to rendered composition and by mimicking that the css naturally becomes one big step easier to read and maintain. But I guess there are different opinions.

### About z-index

In this code I used z-index. I use to avoid that (except for temporary changes) since it is the CSS equivalent to a programmers arbitrary "magic number". Z-index will inevitably become a problem as the site grows. But avoiding z-index means you have do structuring the code in a different way that potentially could apear less readable for someone who is not familiar with it. Something that must be an agreement with your co-coders per repository.

### Time constraints

As usual 80% of progress takes 20% of the time and the last 20% progress takes 80% of the time. Did not do it in one go so can't say exactly where the 5 hours laptime was but probably around the 80% mark, i.e. fullfilled basic requirements.

### Further improvments

A debouncer or throttle on the keyboard input in the search.
Site is in need of some sort of coherent navigation really.
Fix the lazy loading on images that seems buggy on an actual iOs device.
etc...
