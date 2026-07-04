document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.querySelectorAll(".task-title");
  const details = document.querySelectorAll(".task-details");

  tasks.forEach((taskBtn, i) => {
    taskBtn.addEventListener("click", () => {
      // Hide all details
      details.forEach((d) => (d.hidden = true));

      // Show only the clicked one
      details[i].hidden = false;
    });
  });
});
