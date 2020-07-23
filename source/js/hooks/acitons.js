const DRAG_START = `DRAG_START`;
const DRAG = `DRAG`;
const DRAG_END = `DRAG_END`;
const INTERACT = `INTERACT`;
const SET_ID = `SET_ID`;
const SET_NEXT = `SET_NEXT`;

const movingStates = {
  isIdle: 0,
  isDragged: 1,
  isSliding: 2,
};

export {DRAG_START, DRAG_END, DRAG, SET_ID, SET_NEXT, INTERACT, movingStates};
