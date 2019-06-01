# modal docs

## Table of Contents

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

## Modal Constructor

The modal constructor allows you to activate and accessibilize your modal.
With the modal object you can for example control the modal or listen to events.

-   **Name:** `Modal`
-   **Arguments:**
    -   _modal_: modal element (Element) or css selector
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
