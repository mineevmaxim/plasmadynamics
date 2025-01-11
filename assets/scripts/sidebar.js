function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('modal-overlay');
    sidebar.classList.toggle('open');
    if (overlay.style.display === 'none') 
        overlay.style.display = 'block'
    else {
        overlay.style.display = 'none'
    }
  }