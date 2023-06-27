export const createKeyboardClickEvent = (handler) => {
  window.addEventListener("keydown", handler);
};

export const removeKeyboardClickEvent = (handler) => {
  window.removeEventListener("keydown", handler);
};
