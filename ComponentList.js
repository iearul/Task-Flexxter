class MyComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    render() {
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open("GET", "https://flexxter.de/Tasks/Get", false);
        // xmlHttp.send(null);
        // var data = JSON.parse(xmlHttp.responseText);

        var data = {
            tasks: [
                {
                    id: 1,
                    title: "Paint the wall",
                    description: "Please paint all the walls in white color",
                    checked: true,
                },
                {
                    id: 2,
                    title: "Clean the site",
                    description:
                        "Please make sure you cleaned the construction site before leaving",
                    checked: false,
                },
            ],
        };

        var html = "";
        for (var i = 0; i < data.tasks.length; i++) {
            html =
                html +
                `<single-component id=${data.tasks[i].id} title=${JSON.stringify(data.tasks[i].title)} description=${JSON.stringify(data.tasks[i].description)} checked=${data.tasks[i].checked}></single-component>`;
        }
        this.innerHTML = `<div>${html}</div>`;
    }
}

customElements.define("my-component", MyComponent);
