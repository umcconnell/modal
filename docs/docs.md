# modal docs

## Table of Contents

-   [HTML Structure](#html-structure)
-   [Modal Constructor](#modal-constructor)
-   [Modal Object](#modal-object)
    -   [Open](#open)
    -   [Close](#close)
    -   [Toggle](#toggle)
    -   [On](#on)
    -   [RemoveEvent](#removeevent)
    -   [Modal](#modal)
    -   [Backdrop](#backdrop)
    -   [Content](#content)
    -   [CloseBtn](#closebtn)
    -   [State](#state)
    -   [Events](#events)
-   [Modal Events](#modal-events)
    -   [Close Event](#close-event)
    -   [Open Event](#open-event)
-   [Best Practices](#best-practices)

## HTML structure

A modal consists of an element with the class `modal`. This modal comprises:

-   an element with the class `modal__content` containing the content
-   optionally a button with the classes `modal__close` and
    `modal__close-icon` to provide a close icon to the user

    **Note:** This icon can be placed directly inside the `modal` element or in
    the `modal__content` element.  
    Placing the icon directly inside the `modal` element results in the icon
    being placed in the top-right corner of the screen (over the backdrop),
    whereas the close icon in the `modal__content` results in the icon being
    placed in the top-right corner of the content box (the actual modal).

    **Note:** You can use two close icons (in directly in `modal` and one in
    `modal__content`) if you want and as many close elements (`modal__close`)
    in a modal.

    **Tipp:** You can use the HTML entity `&times;` to create a "x" icon.

-   optionally an element with the class `modal__backdrop` or
    `modal__background`. This element is automatically inserted by the script
    when using the [modal constructor](#modal-constructor) if it isn't present
    in the modal already.

Your modal could look like this:

```html
<div class="modal">
    <div class="modal__content">
        <h1>Hello World</h1>
        This is my modal!
    </div>
    <button class="modal__close modal__close-icon">&times;</button>
</div>
```

See the [examples folder](../examples) for more examples.

## Modal Constructor

The modal constructor allows you to activate and accessibilize your modal.
With the modal object you can for example control the modal or listen to events.

-   **Name:** `Modal`
-   **Arguments:**
    -   _modal_: modal element (Element) or css selector string
-   **Returns:** [modal object](#modal-object)
-   **Example:**

    ```js
    import Modal from "modal";

    let myModal = new Modal("#myModal");
    ```

## Modal Object

The modal object is constructed with the
[modal constructor](#modal-constructor). It has following methods / properties:

### Open

Opens the modal.

-   **Name:** `open`
-   **Type:** Method
-   **Arguments:** none
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.open();
    ```

### Close

Closes the modal.

-   **Name:** `close`
-   **Type:** Method
-   **Arguments:** none
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.close();
    ```

### Toggle

Toggles a modal: If the modal is closed, it will be opened. Otherwise the modal
is closed.

-   **Name:** `toggle`
-   **Type:** Method
-   **Arguments:** none
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.toggle();
    ```

### On

Adds an event-listener for a specific [event](#modal-events).

-   **Name:** `on`
-   **Type:** Method
-   **Arguments:**
    -   _event_: [event](#modal-events) to listen for (string)
    -   _callback_: callback function to be called when the specified event
        occurs (function). The callback is called with the modal object as
        argument.
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.on("open", modal => console.log("Modal opened!"));
    ```

### RemoveEvent

Removes an event-listener for a specific [event](#modal-events).

-   **Name:** `removeEvent`
-   **Type:** Method
-   **Arguments:**
    -   _event_: [event](#modal-events) type (string)
    -   _callback_: **named** callback function to remove from [events](#events)
        object
-   **Returns:** `undefined`
-   **Example:**

    ```js
    let myCallback = modal => console.log("Modal opened!");

    myModal.on("open", myCallback);
    myModal.removeEvent("open", myCallback);
    ```

### Modal

Reference to modal object passed as element or selector to the
[modal constructor](#modal-constructor).

-   **Name:** `modal`
-   **Type:** Property

### Backdrop

Reference to the backdrop element of the modal. The backdrop element is
generated when constructing the modal object if it doesn't exist.

-   **Name:** `backdrop`
-   **Type:** Property

### Content

Reference to the modal content (`.modal__content`).

-   **Name:** `content`
-   **Type:** Property

### CloseBtn

Array containing a reference to modal close button(s) (all elements in the modal
with the class `modal__close`).

-   **Name:** `closeBtn`
-   **Type:** Property

### State

String reflecting the state of the modal. Is either `"open"` or `"closed"`.

-   **Name:** `state`
-   **Type:** Property

### Events

Object containing list(s) of callback functions for different types of events

-   **Name:** `events`
-   **Type:** Property

## Modal Events

There are two modal events you can listen for with the [on](#on) method:

### Close Event

Emitted when modal is closed (by the user or programmatically).

-   **Name:** `close`

### Open Event

Emitted when the modal is opened (by the user or programmatically).

-   **Name:** `open`

## Best Practices

It is recommended to place your modals after your main content.
