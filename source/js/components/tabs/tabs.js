import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import TabContainer from './tab';
import getClasses from '../../utils/getClasses';
import useTabs from '../../hooks/useTabs';
import {
  DRAG_START,
  DRAG,
  DRAG_END,
  movingStates,
  SET_ID,
  INTERACT,
} from '../../hooks/acitons';

function Tabs({config, block, Tab, Panel, autoChangeTimeout, hasSwipe}) {
  const [{selectedId, nextId, movingState, direction}, dispatch] = useTabs({
    numberOfTabs: config.length,
    timeout: autoChangeTimeout,
  });

  const panelRef = useRef(null);
  const container = useRef(null);

  const handleChange = (e) => {
    dispatch({type: SET_ID, payload: {id: e.target.value}});
  };

  const getInteraction = autoChangeTimeout
    ? () => {
      dispatch({type: INTERACT, payload: {interactive: true}});
    }
    : null;

  const loseInteraction = autoChangeTimeout
    ? () => {
      dispatch({
        type: INTERACT,
        payload: {
          interactive: container.current.contains(document.activeElement),
        },
      });
    }
    : null;

  const onDrag = (type) => {
    return (e) => {
      dispatch({type: DRAG_START});
      const moveEvent = type === `mouse` ? `mousemove` : `touchmove`;
      const endEvent = type === `mouse` ? `mouseup` : `touchend`;

      const startX = getX(e);
      let offset;

      document.addEventListener(moveEvent, onMove);
      document.addEventListener(endEvent, onEnd);

      function onMove(evt) {
        offset = getX(evt) - startX;
        panelRef.current.style.transform = `translateX(${offset}px)`;
        dispatch({type: DRAG, payload: {offset}});
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);

        dispatch({type: DRAG_END, payload: {offset}});
      }

      function getX(evt) {
        return type === `mouse` ? evt.clientX : evt.touches[0].clientX;
      }
    };
  };

  const onTouchStart = onDrag(`touch`);
  const onMouseDown = onDrag(`mouse`);

  useEffect(() => {
    if (movingState === movingStates.isIdle) {
      panelRef.current.style.transform = ``;
    } else if (movingState === movingStates.isSliding) {
      panelRef.current.style.transform = `translateX(${direction * 100}%)`;
    }
  }, [movingState, panelRef]);

  const currentPanelMod = [config[selectedId].mod];
  if (movingState === movingStates.isSliding) {
    currentPanelMod.push(`sliding`);
  }

  const nextPanelMod = [`next`];
  if (nextId !== null) {
    nextPanelMod.push(config[nextId].mod);
  }

  return (
    <div
      className={getClasses({block, element: `tabs-container`})}
      onMouseOver={getInteraction}
      onFocus={getInteraction}
      onMouseLeave={loseInteraction}
      onBlur={loseInteraction}
      ref={container}
    >
      <ul className={`list ${block}__tabs`}>
        {config.map(({tabContent, mod, tabMod}, id) => (
          <li key={mod} className={`${block}__tab`}>
            <TabContainer
              onChange={handleChange}
              id={id}
              isSelected={+selectedId === id}
              block={block}
              mod={tabMod}
            >
              <Tab block={block} mod={[mod]}>
                {tabContent}
              </Tab>
            </TabContainer>
          </li>
        ))}
      </ul>
      <div
        className={`${block}__panel-container`}
        onTouchStart={
          hasSwipe && movingState === movingStates.isIdle ? onTouchStart : null
        }
        onMouseDown={
          hasSwipe && movingState === movingStates.isIdle ? onMouseDown : null
        }
      >
        <Panel panelRef={panelRef} block={block} mod={currentPanelMod}>
          {config[selectedId].content}
        </Panel>
        {nextId !== null && (
          <Panel block={block} mod={nextPanelMod}>
            {config[nextId].content}
          </Panel>
        )}
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  autoChangeTimeout: 0,
  hasSwipe: false,
};

Tabs.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  Tab: PropTypes.func.isRequired,
  Panel: PropTypes.func.isRequired,
  autoChangeTimeout: PropTypes.number,
  hasSwipe: PropTypes.bool,
};

export default Tabs;
