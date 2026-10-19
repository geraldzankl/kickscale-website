'use strict';
(() => {
  const de = Object.fromEntries([...document.querySelectorAll('[data-i18n]')].map(el => [el.dataset.i18n, el.innerHTML]));
  const en = {
    'skip':'Skip to content','nav.resources':'Resources','nav.contact':'Contact','eyebrow':'Your direct route to Kickscale',
    'hero':'Everything Kickscale.<br><em>One place.</em>','intro':'Explore the product, talk to our team or find the answer you need. Get straight to the right place.',
    'trial.tag':'Try it yourself','trial.title':'Your next call.<br><em>With Kickscale.</em>','trial.body':'Experience Kickscale with your own customer conversations.','trial.cta':'Try Kickscale for free',
    'resources.title':'Where would you like to <em>go?</em>','resources.body':'The essential links. Straight to the information you need.',
    'website.title':'The Kickscale <em>website.</em>','website.body':'The product, the features and everything about Kickscale.','website.cta':'Explore the website',
    'salesroom.title':'Your <em>sales room.</em>','salesroom.body':'Get to know Kickscale: demos, resources and information to support your decision.','salesroom.cta':'Open the sales room',
    'stories.title':'Real customer <em>success.</em>','stories.body':'How other teams use Kickscale. Explore their experiences and practical examples.','stories.cta':'Read customer stories',
    'integrations.title':'Your tools. <em>Connected.</em>','integrations.body':'Explore connections for your CRM, calendar, meeting tools and telephony.','integrations.cta':'Explore integrations',
    'support.title':'Straight to the <em>answer.</em>','support.body':'FAQs, guides and help with setting up and using Kickscale every day.','support.cta':'Open the Help Center',
    'trust.title':'Security builds <em>trust.</em>','trust.body':'Privacy and security information in one place, for your team and IT.','trust.cta':'Open the Trust Center',
    'youtube.title':'Kickscale in <em>motion.</em>','youtube.body':'Videos and insights about Kickscale. Watch on our official YouTube channel.','youtube.cta':'Visit our YouTube channel',
    'contact.tag':'Here to help, personally','contact.title':'Prefer to <em>talk?</em>','contact.body':'Questions about Kickscale or using it with your team? Get in touch with our sales team.','contact.sales':'Sales & advice','contact.office':'Our Vienna office','contact.city':'1020 Vienna, Austria',
    'footer.copy':'&copy; 2026 Kickscale &middot; All the essential links in one place.','footer.imprint':'Legal notice','footer.privacy':'Privacy'
  };
  const destinations = {
    de:{website:'https://www.kickscale.com',stories:'https://www.kickscale.com/erfolgsgeschichten',imprint:'https://www.kickscale.com/impressum',privacy:'https://kickscale.com/legal'},
    en:{website:'https://www.kickscale.com/en',stories:'https://www.kickscale.com/en/customer-stories',imprint:'https://www.kickscale.com/en/imprint',privacy:'https://kickscale.com/en/legal'}
  };
  const setLanguage = (lang, changeUrl=false) => {
    lang = lang === 'en' ? 'en' : 'de';
    const copy = lang === 'en' ? en : de;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { const text = copy[el.dataset.i18n]; if (typeof text === 'string') el.innerHTML = text; });
    document.querySelectorAll('[data-dest]').forEach(el => { el.href = destinations[lang][el.dataset.dest]; });
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed',String(el.dataset.lang===lang)));
    document.title = lang==='en' ? 'Kickscale Hub | Resources, Support & Contact' : 'Kickscale Hub | Alle Links, Support & Kontakt';
    document.querySelector('meta[name="description"]').content = lang==='en' ? 'Everything Kickscale in one place: try it free, website, sales room, customer stories, integrations, support and Trust Center.' : 'Alles zu Kickscale an einem Ort: kostenlos testen, Website, Sales Room, Kundenbeispiele, Integrationen, Support und Trust Center.';
    if(changeUrl && /^https?:$/.test(location.protocol)) { const url = new URL(location.href); if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');history.replaceState(null,'',url); }
  };
  document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click',() => setLanguage(el.dataset.lang,true)));
  setLanguage(new URLSearchParams(location.search).get('lang'));
})();
