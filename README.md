# element-highlighter
Chrome extension for highlighting DOM elements, designed to assist with better debugging of layout issues. Specifically, distinguishing block-level from inline-level elements as well as fancier tech e.g. flex & grid.

Adds a distinct colour outline to each visible DOM element according to it's *display* type. E.g..

```scss
display: block; => blue;
display: inline; => purple;
display: flex; => green;
```
etc..
