'use strict';

// // modal elements
// const modalEl = document.querySelector('.modal');

// // overlay modal
// const overlayEl = document.querySelector('.overlay');

// // close modal button
// const btnCloseModalEl = document.querySelector('.close-modal');

// // open modal buttons
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');  

// console.log('Open buttons:', btnsOpenModalEl.length);



// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);


// // Selections
// const modalEl = document.querySelector('.modal');

// // overlay modal
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// // Already declared above, so this line is commented out to avoid redeclaration
// // const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Helper functions
// // (Event listeners will be set up after the final function declarations below)
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);


// Modal Development Hour 2 - Keyboard Events & Advanced UX
'use strict';

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

// Selections
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Focus management
let lastFocusedButton = null;

// Helper functions
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

// Event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// Keyboard events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

// Accessibility attributes
modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');

console.log('Enhanced modal development ready!');
