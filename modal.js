const modalBackdrop = document.getElementById('task-modal-backdrop');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalStatus = document.getElementById('modal-status');
const closeModalBtn = document.getElementById('close-modal');

document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('click', () => {
    modalTitle.value = task.getAttribute('data-title');
    modalDesc.value = task.getAttribute('data-description');
    modalStatus.value = task.getAttribute('data-status');
    modalBackdrop.classList.remove('hidden');
  });
});

closeModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.add('hidden');
});
