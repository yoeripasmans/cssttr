# Eindopdracht CSS to the rescue

## Proces week 1

Ik ben begonnen met het bestuderen van de opdracht waaruit bleek dat ik verschillende nieuwe css technieken wilde gaan gebruiken. Dit zijn: Flexbox, CSS grid en CSS custom properties. Naast deze technieken moest de site ook accessible zijn en geschikt om met het toetsenbord te bestuurd te worden. Naar al deze technieken ben ik onderzoek gaan doen. Tijdens het onderzoek ben ik gaan nadenken over een concept. Al snel kwam ik tot de conclusie dat ik een soort van webshop wilde gaan maken. Toen dat duidelijk was ben ik aan de slag gegaan met de layout van de pagina en een heb een simpel concept bedacht. Dit heb ik met CSS toegepast. Hierna ben ik bezig geweest met de interacties. Het openklappen van een dropdown list en het maken van een responsive hamburger menu.

## Proces week 2

De tweede week ben ik verder gegaan met de interactie en heb verschillende componenten toegevoegd. De login en de winkelwagen componenten. Daarnaast heb ik de issues verwerkt. Daarna heb me de rest van de week volledig gefocust op de functionaliteit en layout van de pagina. De overlay op de pagina. Volgende week kan ik dan de dingen mooi gaan maken. Ten slotte de content gedeeltelijk aangepast.

## Proces week 3

De laatste week heb ik de grootste stappen gemaakt. Alle componenten samengevoegd en een geheel van de site gemaakt. Interacties toegevoegd met daarbij focus en hover styles op de elementen waarmee je door de site heen kan navigeren. Daarbij heb ik nieuw geleerde CSS technieken kunnen toepassen waaronder CSS grid, custom properties. Daarnaast heb ik beter inzicht gekregen in flexbox , pseudo classes, css animations, checkbox hacks, css selectoren. Dit zijn de skills die ik voor mijzelf tijdens dit project naar een hoger level heb gebracht.

## Herkansing
Voor de herkansing moest ik nog dingen toevoegen uit het boek CSS Secrets by Michailia Verou. Dit hield in.
- Fancy Ampersands toegevoegd

```CSS
@font-face {
	font-family: Ampersand;
	src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
	unicode-range: U+26;
}

h5 {
	font-family: Ampersand, 'Open sans', sans-serif;
}
```

- Extending clickable area op de shop items toegevoegd.

```CSS
main article a:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
}
```

- de-emphasize with blurring
Check met javascript of detail pagina geopend is en geeft class mee aan de main om alles te blurren.
```javascript
if (this.getAttribute("href") == "#detail") {
	main.classList.add('de-emphasized');
} else {
	main.classList.remove('de-emphasized');
}
```
Class waarmee content geblurred wordt.

```CSS
main.de-emphasized {
	-webkit-filter: blur(3px);
	filter: blur(3px);
}
```

- Loading spinner
```css
.loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #000;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 0.8s linear infinite;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
	z-index: 1;
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
}
```

- Custom checkbox
```css
input[type="checkbox"]#field-stay-logged-in+label::before {
    content: '\a0';
    vertical-align: .2em;
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    border-radius: .2em;
    background: silver;
    text-indent: .15em;
}
```

``` - Random background

```css
#chat>ol {
	padding: 1.2em 0.9em;
	display: flex;
	flex-direction: column;
	height: 15em;
	background: hsl(0, 0%, 98%);
	background-image: linear-gradient(90deg, #e6e6e6 11px, transparent 0), linear-gradient(90deg, #fbfbfb 23px, transparent 0), linear-gradient(90deg, #eaeaea 23px, transparent 0);
	background-size: 83px 100%, 61px 100%, 41px 100%;
}
```

# License

Rating example makes use of Emoji from: http://emojione.com
