const Modal = (function() {
    function addBackdrop(modal) {
        let backdrop = document.createElement("div");
        backdrop.className = "modal__backdrop";
        modal.insertAdjacentElement("beforeend", backdrop);
        return backdrop;
    }

    function bindEvents(Modal) {
        Modal.modal.addEventListener(
            "click",
            ({ target }) => target === Modal.backdrop && Modal.close()
        );

        window.addEventListener("keydown", ({ key }) => {
            if (
                key === "Escape" &&
                document.body.classList.contains("modal-open") &&
                Modal.state === "open"
            ) {
                Modal.close();
            }
        });
    }

    return class Modal {
        constructor(modal) {
            if (!(modal instanceof Element))
                modal = document.querySelector(modal);

            this.modal = modal;
            this.backdrop =
                modal.querySelector(".modal__backdrop, .modal__background") ||
                addBackdrop(modal);
            this.content = modal.querySelector(".modal__content");
            this.closeBtn = [...modal.querySelectorAll(".modal__close")];
            this.state = "closed";

            bindEvents(this);
        }

        open() {
            this.modal.classList.add("open");
            this.modal.classList.remove("closed");
            this.state = "open";

            document.body.classList.add("modal-open");
        }

        close() {
            this.modal.classList.add("closed");
            this.modal.classList.remove("open");
            this.state = "closed";

            document.body.classList.remove("modal-open");
        }

        toggle() {
            if (this.state === "closed") return this.open();
            return this.close();
        }
    };
})();
