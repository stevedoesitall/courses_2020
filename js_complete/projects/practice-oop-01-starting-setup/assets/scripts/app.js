class Tooltip {}

class ProjectItem {
    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }
    connectMoreInfoButton() {}
    connectSwitchButton() {
        const projectItemElement = document.querySelector(`#${id}`);
        const switchBtn = projectItemElement.querySelectorAll('button:last-of-type');
        switchBtn.addEventListener('click', );
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        //Get all list elements from that particular section
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        projectItems.forEach(item => {
            this.projects.push(new ProjectItem(item.id));
        });
        console.log(this.projects);
    }

    addProject() {

    }

    switchProject(projectId) {
        this.projects = this.projects.filter(project => project.id !== projectId);
    }
}

class App {
    //NOTE: Static methods can only be accessed on the class definition itself, i.e. App.init().
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
    }
}

App.init();