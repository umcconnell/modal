# modal

A modal for the web

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Using](#using)
    -   [Customizing](#customizing)
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

And create your modal in the `<body>`, preferably after your main content:

```html
<div class="modal" id="myModal">
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
.my-modal {
    background-color: green;
}

.my-modal modal__content {
    background-color: blue;
    border-radius: 0;
}
```

And using following html:

```html
<div class="modal myModal">
    <div class="modal__content">
        <h2>Hello World!</h2>
    </div>
</div>
```

See the [docs](/docs/docs.md#customizing) for more information.

## Docs

See the [docs](docs/docs.md) for more information about methods and
customization.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/umcconnell/destroyer2/tags).

## Authors

Ulysse McConnell - [umcconnell](https://github.com/umcconnell/)

See also the list of
[contributors](https://github.com/umcconnell/destroyer2/contributors)
who participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
