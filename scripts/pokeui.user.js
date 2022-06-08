// ==UserScript==
// @name        Script UI - pokeclicker.com
// @namespace   Our Scripts
// @match       https://www.pokeclicker.com/
// @grant       none
// @version     1.0
// @author      Me
// @run-at      document-body
// @description 06/06/2022, 19:41:20
// ==/UserScript==

const HTML_FACTORY = `
<div id="scriptButtons" class="card sortable border-secondary mb-3">
<div class="card-header p-0" data-toggle="collapse" href="#scriptButtonsBody">
  <span>Scripts Toggle</span>
</div>

<div id="scriptButtonsBody" class="card-body p-0 show">
  <table width="100%">
    <tbody>
    </tbody>
  </table>
</div>
</div>`;
const BTN_CLASSES = ["btn", "btn-sm", "btn-block", "p-0"];

class OptionUI {
  constructor(description, obj) {
    this.description = description;
    this.obj = obj;
    this.row = document.createElement("tr");
    this.button = document.createElement("button");
    this.button.classList.add(...BTN_CLASSES, this.obj.enabled() ? "btn-success" : "btn-danger");
    this.button.textContent = this.obj.enabled() ? "Disable" : "Enable";
    this.button.onclick = () => this.onclick();
    this.row.appendChild(document.createElement("td")).textContent = this.description;
    this.row.appendChild(document.createElement("td")).appendChild(this.button);
  }

  onclick() {
    if (this.obj.enabled()) {
      this.obj.stop();
      this.button.classList.remove("btn-success");
      this.button.classList.add("btn-danger");
      this.button.textContent = "Enable";
    } else {
      this.obj.start();
      this.button.classList.remove("btn-danger");
      this.button.classList.add("btn-success");
      this.button.textContent = "Disable";
    }
  }
}

class ScriptUI {
  constructor() {
    this.el = document.createElement("div");
    this.el.innerHTML = HTML_FACTORY;
    this.table = this.el.querySelector("tbody");
    this.options = [];
  }

  init() {
    document.getElementById("right-column").appendChild(this.el);
  }

  addOption(option) {
    this.options.push(option);
    this.table.appendChild(option.row);
    return this;
  }

  removeOption(option) {
    this.options = this.options.filter((opt) => opt != option);
    this.table.removeChild(option.row);
  }
}

window.OptionUI = OptionUI;
window.scriptui = new ScriptUI();

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("#right-column").then(() => scriptui.init());
