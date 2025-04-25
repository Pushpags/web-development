
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    modalImg.src = thumb.dataset.full;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

