# semantic.css

Quickly prototype your test HTML page with zero CSS class.

## Instalation

[Download the lastest realease][lastest release] or install it via NPM:

```
npm install semantic.css
```

Then you can include it in your CSS, depending on your pre/post processor:

```scss
@import "semantic.css";
/* or */
@import "./node_modules/semantic.css/dist/semantic.css";
```

## [Online Documentation][doc]

Available at the address: [dimitrinicolas.github.io/semantic.css/][doc]

### Header

```html
<header>
  <nav>
    semantic.css
    <aside>
      <a href="https://github.com/dimitrinicolas/semantic.css">Github repository</a>
    </aside>
  </nav>
</header>
```

### Main & Section content

```html
<main>
  <section>
    content
  </section>
  <section>
    content
  </section>
</main>
```

### Heading

```html
<h1>h1 title</h1>
<h2>h2 title</h2>
<h3>h3 title</h3>
<h4>h4 title</h4>
<h5>h5 title</h5>
<h6>h6 title</h6>
```

### Button

```html
<button>Button</button>
<button disabled>Disabled button</button>
```

### List

```html
<ul>
  <li>An unordered list</li>
  <li>With <a href="#">some links</a></li>
  <li>And <b>bold text</b></li>
</ul>
<ol>
  <li>An ordered list</li>
  <li>With <a href="#">some links</a></li>
  <li>And <b>bold text</b></li>
</ol>
```

### Blockquote

```html
<blockquote>
  “The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.” 
  ― Edsger W. Dijkstra
</blockquote>
```

### Image

```html
<img src="assets/img.jpg" alt="Icelandic landscape">
<picture>
  <source srcset="assets/img.webp" type="image/webp">
  <img src="assets/img.jpg" alt="Icelandic landscape">
</picture>
```

### Dialog

```html
<dialog open>An open dialog</dialog>
```

### Form
#### Input

```html
<form>
  <label for="input-1">
    Label input
    <input type="text" placeholder="Input placeholder" id="input-1">
  </label>
  <input type="text" placeholder="Input without label">
</form>
```

#### Checkbox & Radio

```html
<form>
  <label for="checkbox">
    <input type="checkbox" id="checkbox">
    Checkbox label
  </label>
  <label for="radio-1">
    <input type="radio" name="radio" id="radio-1">
    Radio label 1
  </label>
  <label for="radio-2">
    <input type="radio" name="radio" id="radio-2">
    Radio label 2
  </label>
</form>
```

#### Select

```html
<form>
  <select>
    <option value="option-1" selected>Option 1</option>
    <option value="option-2">Option 2</option>
    <option value="option-3">Option 3</option>
  </select>
</form>
```

#### Textarea & Submit

```html
<form>
  <textarea cols="30" rows="10" placeholder="Textarea"></textarea>
  <input type="submit" value="Submit">
</form>
```

### Footer

```html
<footer>
  <section>
    footer
  </section>
</footer>
```

## Related

- [modern-normalize][modern-normalize] - Normalize browsers' default style

## License

This project is licensed under the [MIT license](LICENSE).

[doc]: https://dimitrinicolas.github.io/semantic.css/
[lastest release]: https://github.com/dimitrinicolas/semantic.css/releases/latest

[postcss-import]: https://github.com/postcss/postcss-import
[modern-normalize]: https://github.com/sindresorhus/modern-normalize
