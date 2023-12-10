document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const toggleButton = document.getElementById('toggle-sidebar');
  
    toggleButton.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar-hidden');
      content.classList.toggle('content-expanded');
    });
  });
  