# SCSS

plug-in: live scss compiler

.scss use 
 - curly braces 
 - nesting
 - function(built-in and customised)
 - mixins, like function but doesnt actully return anything
 - inheritance
 - extend
 - operators
 - conditionals
 - loops
 
.sass use 
 - indentation
 - similar

css custom propeties variables
in scss it is much more readable

modules and partials <!-- _base.scss -->
 
break up css into seperate files
for components or even  pages

Example:
```scss
//_base.scss
...
```
```scss

//styles.scss
@use 'base'

...
```

Create scss
```scss
// .../scss/style.scss

//html引入scss，所以需要compiler

$light-color:#f4f4f4; //variable for 复用的变量 或 anything

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: $light-color;
}
```