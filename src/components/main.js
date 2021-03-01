import UI from "./UI";

document.addEventListener('DOMContentLoaded', UI.displayProjects);

export default class Tabs {
  static createTabs() {
    const content = document.getElementById('content');

    content.innerHTML = `
    <div class="row">
    <div class="col-3">
      <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
      </div>
    </div>
    <div class="col-9">
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"></div>
      </div>
    </div>
  </div>
    `;
  }
}
