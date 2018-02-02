import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
const nextUserId = 0;
// when personal send a message
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
})
// Add user connected on the socket
export const addUser = name => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
})
// when all users received the message
export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author,
})
// populate all the users on the room
export const populatreUseresList = users => ({
  type: types.USERS_LIST,
  users,
})