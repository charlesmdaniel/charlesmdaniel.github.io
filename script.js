const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

const scenarios = {
  founder: 'You need to follow up after a strong first conversation with a founder.',
  recruiter: 'A recruiter replied positively. You need to respond with clarity and momentum.',
  network: 'You met a high-value contact and need to move the relationship forward without forcing it.'
};

const scenarioText = document.getElementById('scenarioText');
document.querySelectorAll('[data-scenario]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-scenario');
    if (scenarioText && scenarios[key]) scenarioText.textContent = scenarios[key];
  });
});
