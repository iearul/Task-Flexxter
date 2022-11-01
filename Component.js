class Component extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    static get observedAttributes() {
        return ["id", "title", "description", "checked"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    render() {
        var id = this.attributes.id.value;
        var title = this.attributes.title.value;
        var description = this.attributes.description.value;
        var checked = this.attributes.checked.value;

        this.innerHTML = `<div class= "container">
                          <div class= "card">
                            <div class="status">
                              <label class="containercheckbox">
                                <input type="checkbox" ${checked == "true" && "checked"
            } onclick="myFunction({id:${id}, title: '${title}', description: '${description}', checked: this.checked})">
                                <span class="checkmark"></span>
                              </label>
                            </div>
                            <div>
                              <p>${title}</p>
                              <p>${description}</p>
                            </div>                          
                          </div>                                                     
                        </div>`;
    }
}

customElements.define("single-component", Component);

function myFunction(data) {
    console.log(data);
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("POST", "https://flexxter.de/Tasks/Save", false);
    xmlHttp.open("POST", "https://test.xyz", false);
    xmlHttp.send(data);
}
