# Layout Debugger (element-highlighter)
Chrome extension for highlighting DOM elements, designed to assist with better debugging of layout issues. Specifically:
* Identifying too-wide overflowing objects.
* Distinguishing block from inline elements.
* Helping to keep track of element alignment. 

Adds a distinct colour outline to each visible DOM element, as well as providing a visual prompt for overflowing divs.

```scss
display: block; => blue;
display: inline; => purple;
overflowing the viewport => red!
```
etc..
