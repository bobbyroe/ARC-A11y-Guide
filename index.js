const allCriteria = {
  'alt-tags': {
    id: 111,
    md:
      '- Write good alt text for your images [More Info](https://accessibility.voxmedia.com/#about#engineers-4)'
  },
  'keyboard-nav': {
    id: 999,
    md:
      ' - Support keyboard navigation [More Info](https://accessibility.voxmedia.com/#about#engineers-2)'
  },
  'html-landmarks': {
    id: 9999,
    md:
      '- Understand and use HTML landmarks [More Info](https://accessibility.voxmedia.com/#about#engineers-3)'
  }
};

function findCriteria(id) {
  return id;
}

document.querySelector('body').addEventListener('click', evt => {
  if (evt.target.type === 'checkbox') {
    const id = evt.target.id;
    console.log(id, evt.target.type);
    const criteria = allCriteria[findCriteria(id)];
    console.log(criteria.md);
  } else {
    console.log('other');
  }
});
