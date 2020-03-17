// import allCriteria from "data/criteria.js"

function findCriteria(id) {
  return id;
}

function getMarkdownTextSelected(elements) {
  let markdownText = '';
  elements.forEach(el => (markdownText += `${allCriteria[el.id].md}\n`));
  return markdownText;
}

function updatePreviewTextarea(newText) {
  const previewTextarea = document.querySelector('#preview_box');
  previewTextarea.value = newText;
}

document.querySelector('body').addEventListener('click', evt => {
  if (evt.target.type === 'checkbox') {
    const allCheckboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
    const onlyCheckedBoxes = allCheckboxes.filter(el => el.checked === true);
    const criteriaText = getMarkdownTextSelected(onlyCheckedBoxes);
    updatePreviewTextarea(criteriaText);
  } else {
    console.log('other, ignore');
  }
});
