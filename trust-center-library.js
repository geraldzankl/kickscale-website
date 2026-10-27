'use strict';
(() => {
  document.body.classList.add('js-ready');
  const de = document.documentElement.lang === 'de';
  const search = document.querySelector('#document-search');
  const rows = [...document.querySelectorAll('.document-link')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const tools = document.querySelector('.document-tools');
  const normalise = value => value.toLocaleLowerCase(de ? 'de' : 'en').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u00df/g, 'ss');
  let category = 'all';
  function apply() {
    const query = normalise(search.value.trim());
    let count = 0;
    rows.forEach(row => {
      const matching = (category === 'all' || row.dataset.category === category) && normalise(row.textContent).includes(query);
      row.hidden = !matching;
      if (matching) count++;
    });
    document.querySelector('#document-count').textContent = de ? `${count} von ${rows.length} Dokumenten` : `${count} of ${rows.length} documents`;
    document.querySelector('#document-empty').hidden = count !== 0;
  }
  if (search && tools) {
    tools.hidden = false;
    search.addEventListener('input', apply);
    filters.forEach(button => button.addEventListener('click', () => {
      category = button.dataset.filter;
      filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      apply();
    }));
    document.querySelector('#reset-filter').addEventListener('click', () => {
      category = 'all'; search.value = '';
      filters.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.filter === 'all')));
      apply(); search.focus();
    });
    apply();
  }
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#nav');
  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', menu.dataset.openLabel);
    };
    menu.hidden = false;
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? menu.dataset.closeLabel : menu.dataset.openLabel);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu(); menu.focus();
      }
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    window.matchMedia('(min-width:901px)').addEventListener('change', closeMenu);
  }
})();
