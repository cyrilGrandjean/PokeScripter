import { Action } from "../base/action";

const BTN_CLASSES = ["btn", "btn-sm", "btn-block", "p-0"];

export class OptionUI {
  description: string;

  private action: Action;
  private button: HTMLButtonElement;
  private row: HTMLTableRowElement;

  constructor(description: string, action: Action) {
    this.description = description;
    this.action = action;
    this.row = document.createElement("tr");
    this.button = document.createElement("button");
    this.button.classList.add(...BTN_CLASSES, this.action.enabled ? "btn-success" : "btn-danger");
    this.button.textContent = this.action.enabled ? "Disable" : "Enable";
    this.button.onclick = () => this.onclick();
    this.row.appendChild(document.createElement("td")).textContent = this.description;
    this.row.appendChild(document.createElement("td")).appendChild(this.button);
  }

  onclick() {
    if (this.action.enabled) {
      this.action.stop();
      this.button.classList.remove("btn-success");
      this.button.classList.add("btn-danger");
      this.button.textContent = "Enable";
    } else {
      this.action.start();
      this.button.classList.remove("btn-danger");
      this.button.classList.add("btn-success");
      this.button.textContent = "Disable";
    }
  }

  add(table: HTMLTableSectionElement) {
    table.appendChild(this.row);
  }

  remove(table: HTMLTableSectionElement) {
    table.removeChild(this.row);
  }
}
