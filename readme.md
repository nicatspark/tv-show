# About

## Lazy loading / continuous scroll

Could not test continuous scroll in the search result since as far as I understand the api only supported 10 shows. Might have missed something but did use `content-visibility: auto;` although this for now only works in Chrome based browsers. Images however are lazy-loaded which should be where the biggest benefit of lazy-loading is to be found.

## api calls and cache

Would probably have used React-Query to wrap the api calls if it were for real to get caching strategies in place.
