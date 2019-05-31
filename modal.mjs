export default class Modal {
    constructor(modal) {
        if (!(modal instanceof Element)) modal = document.querySelector(modal);

        this.modal = modal;
        this.content = modal.querySelector("modal__content");
        this.state = "closed";

        this.modal.addEventListener("click", ({ target }) => {
            if (target === modal) {
                this.close(modal);
            }
        });

        window.addEventListener("keydown", ({ key }) => {
            if (
                key === "Escape" &&
                document.body.classList.contains("modal-open") &&
                this.state === "open"
            ) {
                this.close();
            }
        });
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
}
