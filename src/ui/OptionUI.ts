import { Action } from "../base/action";

const BTN_CLASSES = ["btn", "btn-sm", "btn-block", "p-0"];

export class OptionUI {
  description: string;
  enabled: KnockoutObservable<boolean>;

  private button: HTMLButtonElement;
  private row: HTMLTableRowElement;

  constructor(description: string, action: Action) {
    this.description = description;
    this.enabled = action.enabled;

    this.row = document.createElement("tr");
    this.button = document.createElement("button");
    this.button.classList.add(...BTN_CLASSES);
    this.button.onclick = () => this.onclick();
    this.row.appendChild(document.createElement("td")).textContent = this.description;
    this.row.appendChild(document.createElement("td")).appendChild(this.button);

    this.enabled.subscribe(this.onchange, this);
    this.onchange(this.enabled());
  }

  private disable() {
    this.button.classList.remove("btn-success");
    this.button.classList.add("btn-danger");
    this.button.textContent = "Enable";
  }

  private enable() {
    this.button.classList.remove("btn-danger");
    this.button.classList.add("btn-success");
    this.button.textContent = "Disable";
  }

  private onclick() {
    this.enabled(!this.enabled());
  }

  private onchange(value: boolean) {
    value ? this.enable() : this.disable();
  }

  add(table: HTMLTableSectionElement) {
    table.appendChild(this.row);
  }

  remove(table: HTMLTableSectionElement) {
    table.removeChild(this.row);
  }
}
