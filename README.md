# modal

A simple accessible drop-in modal.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Using](#using)
    -   [Customizing](#customizing)
-   [Examples](#examples)
-   [Docs](#docs)
-   [Contributing](#contributing)
-   [Versioning](#versioning)
-   [Authors](#authors)
-   [License](#license)

## Getting Started

These instructions will let you use the modal in your webpage.

### Using

A step by step series of examples that tell you how to include the modal in your
webpage:

Add this to the `head` of your html file:

```html
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/umcconnell/modal@1/src/modal.css"
/>
```

Include the js functionality before you other scripts, for example at the end of
the `<body>`:

```html
<main>
    ...
</main>

<script src="https://cdn.jsdelivr.net/gh/umcconnell/modal@1/src/modal.js"></script>
<script>
    // Your other code here...
</script>
```

You can also use the es6 module version:

```html
<main>
    ...
</main>

<script type="module">
    import Modal from "https://cdn.jsdelivr.net/gh/umcconnell/modal@1/src/modal.mjs";

    //Your code here...
</script>
```

And create your modal in the `<body>`, preferably after your main content:

```html
<div class="modal" id="myModal" aria-label="Example Description">
    <div class="modal__content">
        <h2>Hello World!</h2>
    </div>
</div>
```

Now you can open the modal with javascript:

```html
<script>
    let myModal = new Modal("#myModal");

    myModal.open();
</script>
```

### Customizing

You can customize the appearance of the modal by overriding the styles, like so:

```css
.myModal .modal__content {
    transform: scale(1.3);
    opacity: 0;
}

.myModal.open .modal__content {
    transform: scale(1);
    opacity: 1;
}

.myModal .modal__backdrop {
    background-color: rgba(255, 255, 255, 0.7);
}
```

And using following html:

```html
<div class="modal myModal" aria-label="Example Description">
    <div class="modal__content">
        <h2>Hello World!</h2>
    </div>
</div>
```

## Examples

You can find more examples in the [examples folder](examples/) or on JSFiddle
for you to experiment in live:

-   [Basic](https://jsfiddle.net/umcconnell/n0py6abt/)
-   [Zoom-out and close](https://jsfiddle.net/umcconnell/z9h6Lsbo/)
-   [Advanced Example](https://jsfiddle.net/umcconnell/0mgsca49/)

## Docs

See the [docs](docs/docs.md) for more information about methods and
customization.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/umcconnell/modal/tags).

## Authors

Ulysse McConnell - [umcconnell](https://github.com/umcconnell/)

See also the list of
[contributors](https://github.com/umcconnell/modal/contributors)
who participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Guidelines for accessible modals:

-   https://bitsofco.de/accessible-modal-dialog/
-   https://developer.yoast.com/the-a11y-monthly-making-modals-accessible/
-   https://accessuse.eu/en/modal-dialogs.html
-   https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box
-   https://humanwhocodes.com/blog/2013/02/12/making-an-accessible-dialog-box/
-   https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
