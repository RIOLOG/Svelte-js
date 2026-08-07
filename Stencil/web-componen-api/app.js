class MyCounter extends HTMLElement {

    count = 0;

    connectedCallback() {

        this.render();

    }

    render() {

        this.innerHTML = `
    
        <h2>Counter : ${this.count}</h2>

        <button id="btn">+</button>

    `;

        this.querySelector("#btn")
            .addEventListener("click", () => {

                this.count++;

                this.render();

            });

    }

}

customElements.define("my-counter", MyCounter);