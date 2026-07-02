//JS
//rega estas funciones en tu <script>:

function openSidebar() {
  document.getElementById('sidebar').classList.remove('hidden');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.add('hidden');
}
// Opcional: cierra al hacer click fuera
window.onclick = function(e) {
  if (!document.getElementById('sidebar').contains(e.target) &&
      !document.querySelector('.open-sidebar-btn').contains(e.target) &&
      !document.getElementById('sidebar').classList.contains('hidden')) {
    closeSidebar();
  }
};
