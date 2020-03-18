// import allCriteria from "data/criteria.js"

function findCriteria(id) {
  return id;
}

function getMarkdownTextSelected(elements) {
  let markdownText = '##Best Practices for A11y##\n';
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

// http://clipboardjs.com
const clipboard = new ClipboardJS('#copy-to-clipboard');
clipboard.on('success', evt => console.info(`copied to clipboard: ${evt.text}`));
clipboard.on('error', evt => console.error(`failed to ${$evt.action}, ${evt.trigger}!`));
