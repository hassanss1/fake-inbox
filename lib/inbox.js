/* eslint-disable no-multiple-empty-lines */

// TODO: return true with a probability of 20%.
const hasNewMessage = () => Math.random() < 0.2;

const sample = array => array[(Math.floor(Math.random() * array.length))];

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  const senders = ['GitHub', 'Rocketseat', 'Google', 'Apple', 'freeCodeCamp'];
  const subjects = ['You Got Mail!', 'Welcome!', 'You won\'t believe it...', 'Past due invoice'];

  return {
    sender: sample(senders),
    subject: sample(subjects)
  };
};

const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  // Select the inbox
  const line = `<div class= "row message unread">
    <div class="col-3">${message.sender}</div>
    <div class="col-9">${message.subject}</div>
  </div>`;
  const inbox = document.querySelector("#inbox");
  // append a new HTML to the inbox with details from newMessage
  inbox.insertAdjacentHTML('afterbegin', line);
};

// Update unread count
const updateUnreadCount = () => {
  const unreadCount = document.querySelectorAll(".message.unread").length;
  // If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  document.getElementById('count').innerText = `(${unreadCount})`;
  document.title = `(${unreadCount}) Fake Inbox`;
};
const refresh = () => {
  // TODO: Implement the global refresh logic.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateUnreadCount();
  }
};

















// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

module.exports = { hasNewMessage, newMessage };
