// import allCriteria from "data/criteria.js"
// import query from "a11yquery.js"
function renderChecklistHTML() {
  const container = document.getElementById('checklist');
  const template = document.getElementById('checklist-item');

  allCriteria.forEach(item => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector('li');
    li.className = item.category.toLowerCase();
    // checkbox
    const checkbox = clone.querySelector('input');
    checkbox.id = item.id;
    // title
    const title = clone.querySelector('li label p');
    title.textContent = item.name;
    // description
    const description = clone.querySelector('label+p');
    description.textContent = item.notes;
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
  elements.forEach(el => {
    // this is inefficient //
    // consider converting the array to a Object / hashmap
    const crit = allCriteria.find(ac => ac.id === el.id);
    markdownText += `${crit.markdown}\n`;
  });
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

//
const query = `
query Entry {
  entry (slug: "button"){
    title
    ... on thing_thing_Entry {
      matrix {
        ... on matrix_successCriteria_BlockType {
          typeHandle
          criteria {
            description
            role
            relationships
            state
            focus
            action
          }
        }
        ... on matrix_keyboardSupport_BlockType {
          typeHandle
          keyboardActions {
            key
            function
          }
        }
        ... on matrix_nativeElement_BlockType {
          typeHandle
          summary
          description
          role
          relationships
          state
          focus
          action
        }
        ... on matrix_customElement_BlockType {
          typeHandle
          summary
          description
          role
          relationships
          state
          focus
          action
        }
      }
    }
  }
}
`;
const queryVariables = `
{
  "slug": ["button"]
}
`;
fetch('https://a11yengineer.com/api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: query
  })
})
  .then(res => res.json())
  .then(json => console.log(json.errors, json.data))
  .catch(err => {
    console.log(err);
  });
