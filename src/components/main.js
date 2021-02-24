import Project from "./projects";
import Table from "./table";
import UI from "./UI";

document.addEventListener('DOMContentLoaded', UI.displayToDos);
document.addEventListener('DOMContentLoaded', UI.displayProjects);

const project12 = new Project('proTitle12')
const tabs = () => `
<div class="d-flex align-items-center respond">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">${Table()}</div>
    <div class="tab-pane fade" id="v-pills-profi" role="tabpanel" aria-labelledby="v-pills-profile-tab">1</div>
  </div>
</div>
`;

export default tabs;