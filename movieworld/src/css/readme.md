# Universal CSS for every React Component

This Css file has universal styles which should be available for all the react components.

### Heading Fonts:
* Font name : Oswald
* Font source : Google Web Fonts
* Font weight : 600, 700
* Font-style : semi-bold, bold
* Link which can be used in HTML file
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&display=swap" rel="stylesheet">
```

```css
/* css rules that needs to be specified in CSS files */
font-family: 'Passion One', sans-serif;
font-family: 'Roboto', sans-serif;
```

<br>
<br>

* Import link that can be used in CSS files
```css
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&display=swap');

body{
    font-family: 'Oswald', sans-serif;
}
```

<br>
<br>
<br>







## Paragraph fonts 
* Font name : Roboto
* Font Source : google web fonts 
* Font weight : 400(regular), 500(semi-bold) & 700 (bold)
* Link, which can be used in HTML file 
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

> Css rules that needs to be specified in CSS file 
```css
font-family: 'Roboto', sans-serif;
```

<br>
<br>

* Using CSS import 
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body{
    /* not mandatory to use in body
    can be used where this fonts needs to be applied
    */
    font-family: 'Roboto', sans-serif;
}
```


## color variable 
* Blue Color : #0399FA
* Yellow Color : #F5C618
* Linear Gradient CSS CODE :
```css
.sample{
    background: rgb(2,0,36);
    background: linear-gradient(93deg, rgba(2,0,36,1) 0%, rgba(3,152,249,1) 0%, rgba(54,8,176,1) 100%);
}
```