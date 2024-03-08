const projects = document.getElementsByClassName('projects__project');
console.log(projects.length);

for (let i = 0; i < projects.length; i++) {
  const element = projects[i];
  element.addEventListener('click', () => {
    element.classList.contains('active')
      ? element.classList.remove('active')
      : element.classList.add('active');
  });
}
