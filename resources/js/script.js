'use strict';

// Select DOM events
const headerContainer = document.querySelector('.header__content');
const btnReadMore = document.querySelector('.btn__read--more');
const section1 = document.getElementById('section--1');

// Scrolling
btnReadMore.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Sticky navigation bar
const header = document.querySelector('#header');
const navHeight = headerContainer.getBoundingClientRect().height;

const stickyNav = function (entries, oberver) {
  const [entry] = entries;

  if (!entry.isIntersecting) headerContainer.classList.add('sticky');
  else headerContainer.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing elements on scroll
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  //   section.classList.add('section-hidden');
});
