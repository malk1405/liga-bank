import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';
import getClasses from '../../utils/getClasses';

const getNextId = (newId, length) => {
  const id = Number(newId);
  if (id < 0) {
    return length - 1;
  }

  if (id >= length) {
    return 0;
  }

  return id;
};

function Tabs({config, block, Panel, hasAutoChange, hasSwipe}) {
  const [selectedId, setSelectedId] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const [offset, setOffset] = useState(0);
  const [transform, setTransform] = useState(null);

  const nextId = useRef(null);

  if (offset > 0) {
    nextId.current = getNextId(selectedId + 1, config.length);
  } else if (offset < 0) {
    nextId.current = getNextId(selectedId - 1, config.length);
  } else {
    nextId.current = null;
  }

  const container = useRef(null);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  const getInteraction = () => {
    setIsInteracted(true);
  };

  const loseInteraction = () => {
    container.current.contains(document.activeElement);
    setIsInteracted(container.current.contains(document.activeElement));
  };

  const onDrag = (type) => {
    return (e) => {
      setIsDragged(true);
      const startX = getX(e);
      const moveEvent = type === `mouse` ? `mousemove` : `touchmove`;
      const endEvent = type === `mouse` ? `mouseup` : `touchend`;

      document.addEventListener(moveEvent, onMove);
      document.addEventListener(endEvent, onEnd);

      function onMove(evt) {
        setOffset(getX(evt) - startX);
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);
        setIsDragged(false);
        setIsSliding(true);
      }

      function getX(evt) {
        return type === `mouse` ? evt.clientX : evt.touches[0].clientX;
      }
    };
  };

  const onTouchStart = onDrag(`touch`);
  const onMouseDown = onDrag(`mouse`);

  useEffect(() => {
    const interval =
      hasAutoChange && !isInteracted && !isDragged
        ? setInterval(() => {
          setSelectedId((id) => getNextId(id + 1, config.length));
        }, 4000)
        : null;
    return () => {
      clearInterval(interval);
    };
  }, [hasAutoChange, isDragged, isInteracted, config]);

  useEffect(() => {
    let timeout = null;
    if (isSliding) {
      timeout = setTimeout(() => {
        setIsSliding(false);
        setOffset((offs) => {
          if (Math.abs(offs) >= 20) {
            setSelectedId(nextId.current);
          }

          return 0;
        });
      }, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isSliding, setSelectedId, nextId, offset]);

  useEffect(() => {
    setTransform(null);
    if (isDragged) {
      setTransform(`translateX(${offset}px)`);
    } else if (isSliding && Math.abs(offset) > 20) {
      setTransform(`translateX(${Math.sign(offset)}00%)`);
    }
  }, [isSliding, isDragged, setTransform, offset]);

  const style = {
    transform,
  };

  const currentPanelMod = [config[selectedId].mod];
  if (isSliding) {
    currentPanelMod.push(`sliding`);
  }

  const nextPanelMod = [`next`];
  if (nextId.current !== null) {
    nextPanelMod.push(config[nextId.current].mod);
  }

  if (isSliding) {
    currentPanelMod.push(`sliding`);
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
        {config.map(({title, mod, tabMod}, id) => (
          <li key={mod} className={`${block}__tab`}>
            <Tab
              onChange={handleChange}
              id={id}
              isSelected={+selectedId === id}
              block={block}
              mod={tabMod}
            >
              <span className={`${block}__title`}>{title}</span>
            </Tab>
          </li>
        ))}
      </ul>
      <div
        className={`${block}__panel-container`}
        onTouchStart={hasSwipe && !isSliding ? onTouchStart : null}
        onMouseDown={hasSwipe && !isSliding ? onMouseDown : null}
      >
        <Panel block={block} style={style} mod={currentPanelMod}>
          {config[selectedId].content}
        </Panel>
        {nextId.current !== null && (
          <Panel block={block} mod={nextPanelMod}>
            {config[nextId.current].content}
          </Panel>
        )}
      </div>
    </div>
  );
}

Tabs.defaultProps = {
  hasAutoChange: false,
  hasSwipe: false,
};

Tabs.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  Panel: PropTypes.func.isRequired,
  hasAutoChange: PropTypes.bool,
  hasSwipe: PropTypes.bool,
};

export default Tabs;
