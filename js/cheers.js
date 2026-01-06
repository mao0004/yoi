 
 
 
 const fv = document.querySelector('.fv')

  function cheers(){
    fv.classList.add('is-cheers');
    // 1.1秒後にクラスを戻して待機
    setTimeout(()=> fv.classList.remove('is-cheers'), 1100);
  }

  // 最初に一回、その後2秒おき
  cheers();
  const timer = setInterval(cheers, 2000);

  // （任意）ホバー/タップでも乾杯
  fv.addEventListener('pointerdown', cheers);
  fv.addEventListener('mouseenter', cheers);

