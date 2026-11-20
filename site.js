(()=>{
  'use strict';
  const menuButtons=[...document.querySelectorAll('[data-menu]')];
  const menuPanels=[...document.querySelectorAll('.menu-panel')];
  const mobileButton=document.querySelector('.mobile-menu-button');
  const mobileDrawer=document.getElementById('mobile-drawer');
  const closeMenus=()=>{ menuButtons.forEach(b=>b.setAttribute('aria-expanded','false'));menuPanels.forEach(p=>p.setAttribute('aria-hidden','true')); };
  menuButtons.forEach(btn=>{
    const panel=document.getElementById('menu-'+btn.dataset.menu);
    btn.addEventListener('click',()=>{const wasOpen=btn.getAttribute('aria-expanded')==='true';closeMenus();if(!wasOpen){btn.setAttribute('aria-expanded','true');panel?.setAttribute('aria-hidden','false');}});
    btn.addEventListener('mouseenter',()=>{if(window.matchMedia('(min-width:951px)').matches){closeMenus();btn.setAttribute('aria-expanded','true');panel?.setAttribute('aria-hidden','false');}});
    panel?.addEventListener('mouseleave',e=>{if(e.relatedTarget!==btn && !btn.contains(e.relatedTarget))closeMenus();});
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.site-nav'))closeMenus();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenus();closeModal();mobileDrawer?.setAttribute('aria-hidden','true');mobileButton?.setAttribute('aria-expanded','false');}});
  mobileButton?.addEventListener('click',()=>{const open=mobileButton.getAttribute('aria-expanded')!=='true';mobileButton.setAttribute('aria-expanded',String(open));mobileDrawer?.setAttribute('aria-hidden',String(!open));});
  const lead=document.getElementById('lead-modal');
  const email=document.getElementById('work-email');
  const form=document.getElementById('lead-form');
  let lastFocus=null;
  function closeModal(){if(lead){lead.setAttribute('aria-hidden','true');document.body.style.overflow='';lastFocus?.focus();}}
  document.querySelectorAll('[data-open-video]').forEach(button=>button.addEventListener('click',()=>{if(lead){lastFocus=button;lead.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';email?.focus();}}));
  lead?.querySelector('[data-close-video]')?.addEventListener('click',closeModal);
  lead?.addEventListener('click',e=>{if(e.target===lead)closeModal();});
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    if(!email?.checkValidity()){email?.reportValidity();return;}
    const link=lead?.dataset.videoUrl;
    const status=form.querySelector('.lead-status');
    if(status)status.textContent=document.documentElement.lang==='de'?'Die Produkt-Tour öffnet sich in einem neuen Tab. Deine E-Mail wird hier nicht gespeichert.':'Opening the product tour in a new tab. Your email is not stored here.';
    if(link)window.open(link,'_blank','noopener,noreferrer');
    setTimeout(()=>closeModal(),300);
  });
})();