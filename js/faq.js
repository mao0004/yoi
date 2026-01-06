const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    const btn      = item.querySelector('.toggle-btn');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // ここを削除！！（全部閉じる処理）
      // items.forEach(other => {
      //   other.classList.remove('is-open');
      //   const otherBtn = other.querySelector('.toggle-btn');
      //   if (otherBtn) otherBtn.textContent = '＋';
      // });

      // 今クリックしたものだけトグル
      if (!isOpen) {
        item.classList.add('is-open');
        btn.textContent = '−';
      } else {
        item.classList.remove('is-open');
        btn.textContent = '＋';
      }
    });
  });