// import allCriteria from "data/criteria.js"

function renderChecklistHTML() {
  const container = document.getElementById('checklist');
  const template = document.getElementById('checklist-item');

  Object.keys(allCriteria).forEach(key => {
    const clone = template.content.cloneNode(true);
    // checkbox
    const checkbox = clone.querySelector('input');
    checkbox.id = key;
    // title
    const title = clone.querySelector('li label p');
    title.textContent = allCriteria[key].name;
    // description
    const description = clone.querySelector('label+p');
    description.textContent = allCriteria[key].notes;
    container.appendChild(clone);
  });
}
// START
renderChecklistHTML();
updatePreviewTextarea();
//
function findCriteria(id) {
  return id;
}

function getMarkdownTextSelected(elements) {
  let markdownText = '##Best Practices for A11y##\n';
  elements.forEach(el => (markdownText += `${allCriteria[el.id].markdown}\n`));
  return markdownText;
}
function getCheckedCriteria() {
  const allCheckboxes = Array.from(document.querySelectorAll('input[type=checkbox]'));
  const onlyCheckedBoxes = allCheckboxes.filter(el => el.checked === true);
  return getMarkdownTextSelected(onlyCheckedBoxes);
}

function updatePreviewTextarea() {
  const previewTextarea = document.querySelector('#preview_box');
  previewTextarea.value = getCheckedCriteria();
}

// Click Event Listener DELUXE
document.querySelector('body').addEventListener('click', evt => {
  if (evt.target.type === 'checkbox') {
    updatePreviewTextarea();
  } else {
    console.log('other, ignore');
  }
});

// http://clipboardjs.com
const clipboard = new ClipboardJS('#copy-to-clipboard');
clipboard.on('success', evt => console.info(`copied to clipboard: ${evt.text}`));
clipboard.on('error', evt => console.error(`failed to ${$evt.action}, ${evt.trigger}!`));

// WCAG data
// https://docs.google.com/spreadsheets/d/12wkTEMgHGbVXpaD0r1jRnYpkjwa6nFB_WYt4FBjd4as/edit?usp=sharing
// https://docs.google.com/spreadsheets/d/e/2PACX-1vSadJ_DdSRi5jahZuZz04Xb84fQr0PILyJCSdAEjK6FIbp-9SGOeD6PO-ZYrosfk799o0EGqrk5th_J/pubhtml
