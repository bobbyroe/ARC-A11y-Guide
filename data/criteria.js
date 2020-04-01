const allCriteria = [
  {
    id: 'alt-tags',
    name: 'Images have good alt text',
    'citeria-id': '1.1.1',
    category: 'Perceivable',
    subcategory: 'Text Alternatives',
    level: 'A',
    markdown: ' - Write good alt text for your images',
    DRRSFA: 'Description',
    '*thing*': 'Image',
    '[more info]()': 'https://a11yengineer.com/thing/image',
    notes:
      'Users with low vision often make use of a talking browser to “read” the web. These specialized browsers convert text to speech so that a user can hear the words on a site. When a talking browser lands on an image, it looks for alt text that it can read aloud; if it finds none, it will often just say “image,” leaving the user in the dark as to what the image is and how it matters to the story.  Describe all of the elements that explain what’s happening in the image, rather than just setting the alt text to be something like, “photograph"  If you have to use an image of text, be sure to describe the design if relevant, as well as all of the words in the image. (Ex: Whiteboard drawing of the quote “This is a quote”)',
    'addl. info': ''
  },
  {
    id: 'alt-null',
    name: 'Decorative content is hidden from screen readers',
    'citeria-id': '1.1.1',
    category: 'Perceivable',
    subcategory: 'Text Alternatives',
    level: 'A',
    markdown: ' - Hide decorative elements from screen readers ',
    DRRSFA: 'Description',
    '*thing*': 'Image',
    '[more info]()': 'https://a11yengineer.com/thing/image',
    notes:
      'Decorative elements, such as dividing lines, pull-quotes, or non-informative icons, can be hidden from screen readers to ensure that a user only receives relevant information as they peruse the page. This is done by adding aria-hidden=”true”  to the element.',
    'addl. info': '"decorative" images have empty alt text'
  },
  {
    id: 'button-text',
    name: 'Buttons have descriptive text',
    'citeria-id': '1.1.1',
    category: 'Perceivable',
    subcategory: 'Text Alternatives',
    level: 'A',
    markdown: ' - Buttons have a descriptive value',
    DRRSFA: 'Description',
    '*thing*': 'Button',
    '[more info]()': 'https://a11yengineer.com/thing/button',
    notes:
      '"Click here," "More Info," or "Go" are examples of not enough text to describe a button\'s function. Use just enough words to provide context for assistive technology (like a screen reader).',
    'addl. info': ''
  },
  {
    id: 'input-labels',
    name: 'Inputs (textfields, checkboxes, toggles, ...) have good labels',
    'citeria-id': '1.1.1',
    category: 'Perceivable',
    subcategory: 'Text Alternatives',
    level: 'A',
    markdown: ' - Inputs have good labels',
    DRRSFA: 'Description',
    '*thing*': 'Input',
    '[more info]()': '',
    notes:
      'An input control like a text field or a checkbox without associated label will be a confusing and mysterious experience for a assistive technology.',
    'addl. info': 'How does the screen reader read these?'
  },
  {
    id: 'semantic-tags',
    name: 'Correct HTML element for the content',
    'citeria-id': '1.3.1',
    category: 'Perceivable',
    subcategory: 'Adaptable',
    level: 'A',
    markdown: ' - Use the correct HTML element for your content',
    DRRSFA: 'Role',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'HTML elements communicate to the browser what kind of content they contain and how the browser should render or treat that content. The accessibility tree is built off of assumptions about the elements and their structure. This is the browser feature which powers screen readers. Choosing the correct element for the current context is a simple way to create a good foundation for your experiences.',
    'addl. info': ''
  },
  {
    id: 'html-landmarks',
    name: 'HTML Landmarks are used correctly',
    'citeria-id': '1.3.1',
    category: 'Perceivable',
    subcategory: 'Adaptable',
    level: 'A',
    markdown: ' - Understand and use HTML landmarks ',
    DRRSFA: 'Focus, Action',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'People who use assistive devices may not want to peruse your content linearly, instead preferring to use an outline view (generated from markup) to find the relevant content for their current needs. These landmarks, like main and form and navigation help define specific areas that a user might want to seek out and can save them a lot of time.',
    'addl. info': ''
  },
  {
    id: 'meaningful-order',
    name: 'The reading and navigation order is logical and intuitive',
    'citeria-id': '1.3.2',
    category: 'Perceivable',
    subcategory: 'Adaptable',
    level: 'A',
    markdown: ' - Content and Nav are in logical order',
    DRRSFA: 'Keyboard',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'When a customer tabs through the page content, they will rely on the context and structure to understand where they are and where to go for what they seek.',
    'addl. info': 'also 2.4.3 : Operable : Navigable'
  },
  {
    id: 'important-content',
    name: 'Use a combination of positioning, color and labeling to identify content',
    'citeria-id': '1.3.3',
    category: 'Perceivable',
    subcategory: 'Adaptable',
    level: 'A',
    markdown: ' - Use position, labeling and color to identify importance',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'You should not rely solely on images, shape, size, visual location, orientation, or sound to indicate important instructions for operating or understanding content (ex. “See the image above”). ',
    'addl. info': ''
  },
  {
    id: 'info-color',
    name: 'Indicate important information with more than just color only',
    'citeria-id': '1.4.1',
    category: 'Perceivable',
    subcategory: 'Distinguishable',
    level: 'A',
    markdown: ' - Use more than color to identify importance',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'There should be another indicator (such as icons to accompany color coding, or an underline on linked text) so that people who cannot easily distinguish colors will be able to understand and use your content.',
    'addl. info': ''
  },
  {
    id: 'pausible-media',
    name: 'Video and audio that automatically plays can be muted, paused or stopped',
    'citeria-id': '1.4.2',
    category: 'Perceivable',
    subcategory: 'Distinguishable',
    level: 'A',
    markdown: ' - Audio and video must be pausible.',
    DRRSFA: '',
    '*thing*': 'Video',
    '[more info]()': '',
    notes:
      'A mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for more than 3 seconds.',
    'addl. info': ''
  },
  {
    id: 'good-contrast',
    name: "There's good contrast with text and background",
    'citeria-id': '1.4.3',
    category: 'Perceivable',
    subcategory: 'Distinguishable',
    level: 'A',
    markdown: ' - Make sure there is enough contrast between text and its background color',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'According to the WCAG, the contrast ratio between text and the text’s background should be at least 4.5 to 1. If your font is at least 24 px or 19 px bold, the minimum drops to 3 to 1 (though, worth noting that this is a little fuzzy because numbered sizes aren’t always reflective of the visual size type). Be especially careful of text over images.',
    'addl. info': ''
  },
  {
    id: 'color-pairs',
    name: 'Use color pairs (not only hues) to increase contrast',
    'citeria-id': '1.4.8',
    category: 'Perceivable',
    subcategory: 'Distinguishable',
    level: 'AAA',
    markdown: ' - Pair values of colors together (not only hues) to increase contrast ',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'When you strip out the color information from two hues and compare the values, there may not be much difference. Pairing different values creates contrast.',
    'addl. info': ''
  },
  {
    id: 'keyboard-nav',
    name: 'Keyboard navigation works well',
    'citeria-id': '2.1.1',
    category: 'Operable',
    subcategory: 'Keyboard Accessible',
    level: 'A',
    markdown: ' - Support and test keyboard navigation',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'Browsers support tabbing through link, form, button elements. This is an easy way to move around the page, but it’s very easy to accidentally hinder this functionality: by relying on CSS to move elements around instead of actually reordering the HTML; hiding elements from tab flow, either by faking buttons (with JavaScript) in lieu of using button elements or disabling tab via tabindex=”-1”; and hiding form elements (on a tabbed interface) but not removing them from the tab flow (so that hidden form elements can be focused).',
    'addl. info': ''
  },
  {
    id: 'keyboard-traps',
    name: 'No keyboard focus traps or locks',
    'citeria-id': '2.1.2',
    category: 'Operable',
    subcategory: 'Keyboard Accessible',
    level: 'A',
    markdown: ' - Users should be able to navigate through content using their keyboard.',
    DRRSFA: 'Keyboard',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'Keyboard focus is never locked or trapped at one particular page element. The user can navigate to and from all navigable page elements using only a keyboard.',
    'addl. info': ''
  },
  {
    id: 'timing-adjustable',
    name:
      'If the content requires a time limit, the user can adjust, extend or turn off that limit',
    'citeria-id': '2.2.1',
    category: 'Operable',
    subcategory: 'Enough Time',
    level: 'A',
    markdown: ' - Allow customers to extend time limits',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'If a page or application has a time limit, the user is given options to turn off, adjust, or extend that time limit. ',
    'addl. info': ''
  },
  {
    id: 'pause-stop-hide',
    name:
      'Content that moves, scrolls or blinks for more than 5 seconds can be paused, stopped or hidden',
    'citeria-id': '2.2.2',
    category: 'Operable',
    subcategory: 'Enough Time',
    level: 'A',
    markdown: ' - Animations lasting 5 seconds or more are pausable.',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'Automatically updating content (e.g., a dynamically-updating news ticker, chat messages, etc.) can be paused, stopped, or hidden by the user or the user can manually control the timing of the updates.',
    'addl. info': ''
  },
  {
    id: 'skip-links',
    name: 'Customers can skip top-level navigation to access main content',
    'citeria-id': '2.4.1',
    category: 'Operable',
    subcategory: 'Navigable',
    level: 'A',
    markdown: ' - Give users a way to skip top level navigation to access main content',
    DRRSFA: 'Keyboard',
    '*thing*': 'Link',
    '[more info]()': 'https://a11yengineer.com/thing/link',
    notes:
      'For keyboard users, it can be helpful to give them a way to skip past top level navigation to get to the main content. This is typically a button at the top of the page (it can only be visible if active), that, when clicked, shifts the current focus from the button to the top of the main content of the page. This saves the user from having to tab through many many elements of navigation.',
    'addl. info': ''
  },
  {
    id: 'link-text',
    name: 'Links have good descriptive text',
    'citeria-id': '2.4.4',
    category: 'Operable',
    subcategory: 'Navigable',
    level: 'A',
    markdown: ' - Make links descriptive',
    DRRSFA: 'Description',
    '*thing*': 'Link',
    '[more info]()': 'https://a11yengineer.com/thing/link',
    notes:
      'Assistive technology is able to find all links on a page and present them in various forms, but these links are rather useless if it’s a long list of links that are just the text “click here.” A better way is to have the link describe where the user will go if they click it, giving them an idea of what’s on the other side of clicking.',
    'addl. info': ''
  },
  {
    id: 'focus-state',
    name: 'Elements with focus have clear focused state',
    'citeria-id': '2.4.7',
    category: 'Operable',
    subcategory: 'Navigable',
    level: 'A',
    markdown: ' - Design focus states to help users navigate and understand where they are',
    DRRSFA: 'Focus',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'Your designs should never actively hide focus states. When people use the keyboard to navigate, your product should include highly visible focus states.',
    'addl. info': ''
  },
  {
    id: 'link-states',
    name: 'Links can be clearly seen and have clear :focus and :active states',
    'citeria-id': '2.4.7',
    category: 'Operable',
    subcategory: 'Navigable',
    level: 'A',
    markdown: ' - Links should be visually identifiable and have clear :focus and :active states',
    DRRSFA: 'Focus',
    '*thing*': 'Link',
    '[more info]()': 'https://a11yengineer.com/thing/link',
    notes:
      "The outline property indicates when an element or selected or has focus. This is helpful to users who don't have the ability to use a mouse or are visually impaired.",
    'addl. info': '** Duplicate?'
  },
  {
    id: 'html-lang',
    name: 'HTML document has a valid language attribute',
    'citeria-id': '3.1.1',
    category: 'Understandable',
    subcategory: 'Readable',
    level: 'A',
    markdown: ' - HTML document should have a language attribute',
    DRRSFA: 'Description',
    '*thing*': 'HTML',
    '[more info]()': '',
    notes:
      'The HTML lang attribute is used to identify the language of text content on the web. This information helps search engines return language specific results, and it is also used by screen readers that switch language profiles to provide the correct accent and pronunciation. e.g. <html lang="en">',
    'addl. info': ''
  },
  {
    id: 'clear-content',
    name: 'Make layout and copy as consistant and clear as possible',
    'citeria-id': '3.1.5',
    category: 'Understandable',
    subcategory: 'Readable',
    level: 'AAA',
    markdown: ' - Be as consistent and clear as possible in layout and copy',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'Be consistent across functions, placement, and labeling. Components with the same functionality should work and be identified consistently. Use section headings to organize content. Be clear in writing; avoid jargon and idioms',
    'addl. info': ''
  },
  {
    id: 'inputs-clear',
    name: 'Forms and Inputs are easy to understand, use and correct mistakes',
    'citeria-id': '3.3.1',
    category: 'Understandable',
    subcategory: 'Input Assist',
    level: 'A',
    markdown: ' - Help users understand inputs, and help them avoid and correct mistakes',
    DRRSFA: 'Description',
    '*thing*': 'Input',
    '[more info]()': '',
    notes:
      'Labels should never completely go away when the focus is inside of an input. Users should always have clear instructions on what they should be inputting. Put error messages in text that explain the error and how to fix the error. Never rely solely on color to indicate errors.',
    'addl. info': 'also: 3.3.2 and 3.3.3 (AA)'
  },
  {
    id: 'aria-attrs',
    name: 'ARIA attributes are used when needed',
    'citeria-id': '4.1.2',
    category: 'Robust',
    subcategory: 'Compatible',
    level: 'A',
    markdown: ' - Use ARIA attributes when applicable',
    DRRSFA: 'DRRS**',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'ARIA stands for Accessible Rich Internet Applications. It is an optional but helpful spec to define ways to markup HTML that has dynamic experiences (typically controlled by JavaScript).  The goal when using them is to communicate to the browser and assistive technology how content is going to change or what the purpose of the content is. Dynamic error messages can be called out to screenreaders, buttons can be linked to the content they affect and many other helpful states can be expressed on a code level.',
    'addl. info': 'The 1st rule of ARIA is: "Don\'t use ARIA" – use a semantic HTML tag instead'
  },
  {
    id: 'pseudo-els',
    name: 'No images or icons in pseuo-elements',
    'citeria-id': '4.1.2',
    category: 'Robust',
    subcategory: 'Compatible',
    level: 'A',
    markdown: ' - Avoid images and iconography in pseudo-elements',
    DRRSFA: 'Focus',
    '*thing*': 'Image',
    '[more info]()': 'https://a11yengineer.com/thing/image',
    notes:
      'Assistive technology relies on HTML to find the content to present to users. It’s possible to create pseudo-elements with CSS, however, there is currently no way to provide alternative text if there are images or icons here.',
    'addl. info': ''
  },
  {
    id: 'svg-a11y',
    name: 'SVGs are accessible',
    'citeria-id': '4.1.2',
    category: 'Robust',
    subcategory: 'Compatible',
    level: 'A',
    markdown: ' - Make SVGs accessible to assistive technology',
    DRRSFA: 'Description',
    '*thing*': 'SVG',
    '[more info]()': 'https://a11yengineer.com/thing/image',
    notes:
      'SVGs are often used as icons on interactive elements in sites. When this is the case, the SVG should have a title or embedded text (that is visually hidden but available to assistive tech) to ensure that the information of the icon is available programmatically.',
    'addl. info': ''
  },
  {
    id: 'many-routes',
    name: 'Customers can use alternate routes to access important content and information',
    'citeria-id': '4.1.2',
    category: 'Robust',
    subcategory: 'Compatible',
    level: 'A',
    markdown: ' - Create alternate routes for users to access information',
    DRRSFA: '',
    '*thing*': '*',
    '[more info]()': '',
    notes:
      'It can be difficult to make certain components (like an SVG map) into accessible experiences. In those cases, consider creating an additional screen reader-friendly experience, or at the very least, describe the experience to users.',
    'addl. info': ''
  }
];
