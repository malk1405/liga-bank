const {useReducer, useEffect} = require(`react`);

const {
  movingStates,
  DRAG_START,
  DRAG_END,
  DRAG,
  SET_ID,
  SET_NEXT,
  INTERACT,
} = require(`./acitons`);

const initialState = {
  selectedId: 0,
  nextId: null,
  movingState: movingStates.isIdle,
  direction: 0,
  isInteracted: false,
  numberOfTabs: 1,
};

const reducer = (
    state,
    {type, payload: {offset, id, interactive} = {}}
) => {
  const getNextId = (newId) => {
    const idNum = Number(newId);
    const length = state.numberOfTabs;

    if (idNum < 0) {
      return length - 1;
    }

    if (idNum >= length) {
      return 0;
    }

    return idNum;
  };

  const setId = (newId) => {
    const idNum = getNextId(newId);

    if (idNum === state.selectedId) {
      return state;
    }
    return {
      ...state,
      selectedId: idNum,
      movingState: movingStates.isIdle,
      nextId: null,
    };
  };

  switch (type) {
    case DRAG_START:
      return {...state, movingState: movingStates.isDragged, direction: 0};

    case DRAG:
      const newDir = Math.sign(offset);
      return newDir === state.direction
        ? state
        : {
          ...state,
          direction: newDir,
          nextId: newDir ? getNextId(state.selectedId - newDir) : null,
        };

    case DRAG_END:
      return {
        ...state,
        movingState: offset ? movingStates.isSliding : movingStates.isIdle,
        direction: Math.abs(offset) < 20 ? 0 : state.direction,
      };

    case SET_ID:
      return setId(id);

    case SET_NEXT:
      return setId(state.selectedId + 1);

    case INTERACT:
      return interactive !== state.isInteracted
        ? {...state, isInteracted: interactive}
        : state;

    default:
      return state;
  }
};

function useTabs({numberOfTabs, timeout} = {}) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    numberOfTabs,
  });
  const {movingState, isInteracted, direction, selectedId} = state;

  useEffect(() => {
    if (movingState === movingStates.isSliding) {
      setTimeout(() => {
        dispatch({
          type: SET_ID,
          payload: {id: selectedId - direction},
        });
      }, 300);
    }
  }, [movingState, direction, selectedId, dispatch]);

  useEffect(() => {
    const interval =
      timeout && !isInteracted && movingState === movingStates.isIdle
        ? setInterval(() => {
          dispatch({type: SET_NEXT});
        }, timeout)
        : null;
    return () => {
      clearInterval(interval);
    };
  }, [timeout, movingState, isInteracted, dispatch]);

  return [state, dispatch];
}

export default useTabs;
