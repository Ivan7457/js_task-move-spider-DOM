'use strict';

const spider = document.querySelector('.spider');

const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallPos = wall.getBoundingClientRect();

  if (
    e.clientX < wallPos.left ||
    e.clientX > wallPos.right ||
    e.clientY < wallPos.top ||
    e.clientY > wallPos.bottom
  ) {
    return;
  }

  let left = e.clientX - wallPos.left - spider.clientWidth / 2;
  let topPos = e.clientY - wallPos.top - spider.clientHeight / 2;

  const maxLeft = wallPos.width - spider.clientWidth;
  const maxTop = wallPos.height - spider.clientHeight;

  if (left < 0) {
    left = 0;
  }

  if (left > maxLeft) {
    left = maxLeft;
  }

  if (topPos < 0) {
    topPos = 0;
  }

  if (topPos > maxTop) {
    topPos = maxTop;
  }
  spider.style.left = Math.round(left) + 'px';
  spider.style.top = Math.round(topPos) + 'px';
});
