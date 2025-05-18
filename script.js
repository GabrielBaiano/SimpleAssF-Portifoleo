  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });

  

    const contentData = {
    about_me: `
      <img src="avatar.png" style="width: 100%; border-radius: 8px; margin-bottom: 12px;">
      <p>Hey, I'm Joe Lee, a UI/UX designer and Webflow Developer...</p>
      <p>My expertise includes designing product showcases...</p>
    `,
    experience: `<p>Experience PDF content would go here.</p>`,
    tools: `<p>Tools and software expertise listed here.</p>`
  };

  const container = document.getElementById('window-container');

  document.querySelectorAll('.file').forEach(item => {
    item.addEventListener('click', () => {
      const file = item.getAttribute('data-file');
      const win = document.createElement('div');
      win.className = 'window';
      win.innerHTML = `
        <div class="window-header">
          <span>${file}.pdf</span>
          <div class="window-close">✕</div>
        </div>
        <div class="window-content">${contentData[file]}</div>
      `;
      container.appendChild(win);
      makeDraggable(win);
      win.style.top = `${Math.random() * 100 + 100}px`;
      win.style.left = `${Math.random() * 100 + 100}px`;
    });
  });

  function makeDraggable(el) {
    const header = el.querySelector('.window-header');
    const closeBtn = el.querySelector('.window-close');
    let offsetX, offsetY;

    header.addEventListener('mousedown', e => {
      offsetX = e.clientX - el.offsetLeft;
      offsetY = e.clientY - el.offsetTop;
      function mouseMoveHandler(e) {
        el.style.left = `${e.clientX - offsetX}px`;
        el.style.top = `${e.clientY - offsetY}px`;
      }
      function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      }
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    });

    closeBtn.addEventListener('click', () => {
      el.remove();
    });
  }