
  const modal = document.getElementById('modal');
  const addBtn = document.querySelector('.pig'); // плюсик
  const cancelBtn = document.getElementById('cancelBtn');
  const applyBtn = document.getElementById('applyBtn');
  const input = document.getElementById('newNoteInput');
  const container = document.querySelector('.container');

  // открыть модалку
  addBtn.addEventListener('click', () => {
    modal.classList.add('active');
    input.value = '';
    input.focus();
  });

  // закрыть модалку
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // добавить новую заметку
  applyBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== '') {
      const newNote = document.createElement('div');
      newNote.classList.add('capybara');
      newNote.innerHTML = `
        <input type="checkbox">
        <label>${text}</label>
      `;
      container.insertBefore(newNote, addBtn);
      modal.classList.remove('active');
    }
  });

  // клик вне окна закрывает его
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
