/**
 * Modal backdrop element that overlays the screen when a task is clicked.
 * @type {HTMLElement}
 */
const modalBackdrop = document.getElementById('task-modal-backdrop');

/**
 * Input field for editing the task title inside the modal.
 * @type {HTMLInputElement}
 */
const modalTitle = document.getElementById('modal-title');

/**
 * Textarea for editing the task description inside the modal.
 * @type {HTMLTextAreaElement}
 */
const modalDesc = document.getElementById('modal-desc');

/**
 * Dropdown for selecting the task status inside the modal.
 * @type {HTMLSelectElement}
 */
const modalStatus = document.getElementById('modal-status');

/**
 * Button element to close the modal.
 * @type {HTMLButtonElement}
 */
const closeModalBtn = document.getElementById('close-modal');

/**
 * Adds a click event listener to each task element.
 * When clicked, it opens the modal and populates it with task data.
 */
document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('click', () => {
    /**
     * Set modal fields based on the clicked task's data attributes.
     */
    modalTitle.value = task.getAttribute('data-title');
    modalDesc.value = task.getAttribute('data-description');
    modalStatus.value = task.getAttribute('data-status');
    
    // Display the modal by removing the hidden class
    modalBackdrop.classList.remove('hidden');
  });
});

/**
 * Adds a click event listener to the close button.
 * When clicked, it hides the modal.
 */
closeModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.add('hidden');
});
