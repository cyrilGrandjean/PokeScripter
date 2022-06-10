import { OptionUI } from "./OptionUI";

const HTML_FACTORY = `
<div id="psUI" class="card sortable border-secondary mb-3">
<div class="card-header p-0" data-toggle="collapse" href="#psUIBody">
  <span>Scripts Toggle</span>
</div>

<div id="psUIBody" class="card-body p-0 show">
  <table width="100%">
    <tbody>
    </tbody>
  </table>
</div>
</div>`;

export class ScriptUI {
  private element: HTMLDivElement;
  private table: HTMLTableSectionElement;
  private options: OptionUI[];

  constructor() {
    this.element = document.createElement("div");
    this.element.innerHTML = HTML_FACTORY;
    this.table = this.element.querySelector("tbody");
    this.options = [];
  }

  init() {
    // Add the UI if not present
    if (!document.getElementById("psUI"))
      document.getElementById("right-column").appendChild(this.element);
  }

  addOption(option: OptionUI) {
    this.options.push(option);
    option.add(this.table);
    return this;
  }

  removeOption(option: OptionUI) {
    this.options = this.options.filter((opt) => opt != option);
    option.remove(this.table);
  }
}
