const storageBtns = document.querySelectorAll('.storage-btn');
const precoEl = document.getElementById('preco');

storageBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    storageBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const preco = parseFloat(btn.dataset.price);
    precoEl.textContent = preco.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    localStorage.setItem('iph17pm_preco', btn.dataset.price);
    localStorage.setItem('iph17pm_armazenamento', btn.textContent.trim());
  });
});