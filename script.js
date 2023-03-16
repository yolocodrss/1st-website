const projectLinks = document.querySelectorAll('.project-list a');
const projectDescription = document.querySelector('.project-description');
const websiteTitle = document.querySelector('#website-title');
const projectsLink = document.querySelector('#projects-link');

for (let link of projectLinks) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const projectId = link.dataset.project;
    const projectContent = getProjectContent(projectId);
    projectDescription.innerHTML = projectContent;
  });
}

websiteTitle.addEventListener('click', function(event) {
  event.preventDefault();
  projectDescription.innerHTML = '<p>Welcome to my website mainpage!</p>';
});

projectsLink.addEventListener('click', function(event) {
  event.preventDefault();
  projectDescription.innerHTML = '<p>Welcome to my website - u click on projects!</p>';
});

function getProjectContent(projectId) {
  switch (projectId) {
    case 'project1':
      return '<h2>Project 1- New </h2><p>putting this website online so its visible by others</p>';
    case 'project2':
      return '<h2>Project 2</h2><p>Description of Project 2</p>';
    case 'project3':
      return '<h2>Project 3</h2><p>Description of Project 3y</p>';
    default:
      return '<p>Welcome to my website!</p>';
  }
}
