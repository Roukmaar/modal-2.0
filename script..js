document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalOpener = document.getElementById('modal-opener');
  const closeBtn = document.getElementById('close');
  const form = document.querySelector('.form');

  // When form is submitted, show modal (e.g., forgot password flow)
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // For demo, show modal on submit
      modal.style.display = 'block';
    });
  }

  // If the "Forgot Password?" button exists, make it open the modal without submitting the form
  if (modalOpener) {
    modalOpener.addEventListener('click', function (e) {
      // prevent form submission if the button is inside the form
      e.preventDefault();
      modal.style.display = 'block';
    });
  }

  // Close modal via close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  // Close modal when clicking outside content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
