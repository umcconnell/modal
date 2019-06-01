# modal docs

## Table of Contents

-   [Modal Constructor](#modal-constructor)
-   [Modal Object](#modal-object)
    -   [Open](#open)
    -   [Close](#close)

## Modal Constructor

The modal constructor allows you to activate and accessibilize your modal.
With the modal object you can for example control the modal or listen to events.

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
[modal constructor](#modal-constructor). It has following methods / propreties:

### Open

Opens the modal.

-   **Type:** Method
-   **Arguments:** none
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.open();
    ```

### Close

Closes the modal.

-   **Type:** Method
-   **Arguments:** none
-   **Returns:** `undefined`
-   **Example:**

    ```js
    myModal.close();
    ```
