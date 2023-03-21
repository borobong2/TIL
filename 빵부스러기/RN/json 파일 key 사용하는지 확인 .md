```javascript
const fs = require('fs');
const _ = require('lodash');

// Define the directory containing your project files
const directory = './src';

// Define the path and filename for the output file
const outputFile = 'unused-keys.txt';

// Load the JSON file to check
const jsonData = JSON.parse(
  fs.readFileSync('./src/assets/translations/en/en.json'),
);

// Get a list of all keys in the JSON object
const allKeys = Object.keys(jsonData);

// Loop through each file under the "src" directory
const usedKeys = [];
const unusedKeys = [];
function processDirectory(dir) {
  fs.readdirSync(dir, {withFileTypes: true}).forEach((dirent) => {
    // console.log('dirent', dirent);
    if (dirent.isDirectory()) {
      processDirectory(`${dir}/${dirent.name}`);
    } else if (dirent.isFile() && /\.(ts|js|jsx|tsx)$/i.test(dirent.name)) {
      const fileContents = fs.readFileSync(`${dir}/${dirent.name}`, 'utf8');
      // const regex = new RegExp(`(${allKeys.join('|')})`, 'g');
      // const matches = fileContents.match(regex);

      for (let i of allKeys.toString().split(',')) {
        if (fileContents.includes(i)) {
          usedKeys.push(i);
        }
      }
    }
  });
}
processDirectory(directory);

// Find all keys that are not used in the project files
const unusedKeySet = new Set(_.difference(allKeys, usedKeys));

const unusedKeysInFiles = Array.from(unusedKeySet).map((key) => `${key}`);

// Write the list of unused keys to the output file
// fs.writeFileSync(outputFile, unusedKeysInFiles.concat(unusedKeys).join('\n'));
const customUnusedKeys = [
  'remove-template-question',
  'habit-added-to-myhabit',
  'six-monthly',
  'haptic-setting-desc',
  'faq-category-push',
  'faq-category-subscription',
  'faq-category-gift',
  'faq-category-other',
  'total-routine',
  'total-habit',
  'note-limit',
  'popup-desc-calendar-additional',
  'review-content-4',
  'start-week-on-desc',
  'day-ending-time-desc',
  'sticky-noti-setting-desc',
  'quick-conversation-desc',
  'social-refresh',
  'open-context-when-timer-start',
  'menu-new-routine',
  'menu-explore-routine',
  'show-next-habit-desc',
  'intro-v2-1-ans',
  'intro-v2-2-msg-1',
  'intro-v2-2-msg-1-1',
  'intro-v2-2-msg-1-2',
  'intro-v2-2-msg-2-1',
  'intro-v2-2-msg-2-2',
  'intro-v2-2-msg-2-3',
  'intro-v2-2-msg-3-1',
  'intro-v2-2-msg-3-2',
  'intro-v2-2-ans',
  'intro-v2-3-title',
  'intro-v2-3-ans',
  'timer-skip-nottoday',
  'timer-skip-last',
  'timer-back-continue',
  'timer-back-redo',
  'timer-auto-end-message',
  'routine-summary-main',
  'demo_feedback_key',
  'demo_feedback_help',
  'demo_feedback_content_1',
  'demo_feedback_content_2',
  'demo_feedback_content_3',
  'demo_feedback_key_2',
  'demo_feedback_key_3',
  'app-tutorial',
  'show-routine-summary-desc',
  'intro1-sub',
  'intro-v2-1-title',
  'intro-v2-2-title',
  'popup-first-routine-complete',
  'popup-first-routine-complete-desc',
  'chat-tutorial-timer-end-new',
  'intro-review-1',
  'intro-review-2',
  'intro-review-3',
  'chat-tutorial-routine-new',
  'chat-tutorial-routine-noname-new',
  'popup-profile-tutorial-complete',
  'toast-focus-mode',
  'focus-mode-desc',
  'recommend-tag-title',
  'intro-v4-01-title',
  'intro-v4-01-ans',
  'intro-v4-02-title',
  'intro-v4-02-ans',
  'quick-guide-desc',
  'guide-banner-social-link',
  'guide-banner-recommend-link',
  'guide-banner-timerintro-link',
  'guide-banner-shortcut-link',
  'guide-banner-alarm-link',
  'guide-banner-darkmode-link',
  'guide-banner-contact-link',
  'routine-check-schedule-key',
  'routine-gratitude-journal-key',
  'newyear-popup-title-first',
  'newyear-popup-title-second',
  'recommend-todo-item-desc-morning',
  'recommend-todo-item-desc-afternoon',
  'recommend-todo-item-desc-evening',
  'recommend-todo-item-desc-night',
  'alarm-habit-end-remind-1',
  'alarm-habit-end-remind-2',
  'alarm-habit-end-remind-3',
  'alarm-habit-end-remind-4',
  'alarm-habit-end-remind-5',
  'alarm-retention-v2-4-msg',
  'alarm-retention-v2-5-msg',
  'alarm-retention-v2-6-msg',
  'chat-request-profile-ok',
  'chat-request-profile-success',
  'satisfaction-skip',
  'tutorial-chatbot-create-first-routine-title',
  'tutorial-chatbot-create-first-routine-button',
];
function removeUnusedKeys(jsonFilePath, unusedKeySet) {
  // Load the JSON file to remove unused keys
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath));

  // Remove the unused keys from the JSON object
  for (const key of unusedKeySet) {
    delete jsonData[key];
  }

  // Overwrite the original JSON file with the updated data
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
}
```
