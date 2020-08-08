import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import getClasses from '../../utils/getClasses';
import {leftArrow, rightArrow} from '../../utils/key-codes';
import clamp from '../../utils/clamp';

const block = `range`;

function Range({min, max, step, value, onChange, modifiers}) {
  const [isDragged, setIsDragged] = useState(false);

  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const valueRef = useRef(null);
  valueRef.current = value;

  useEffect(() => {
    if (isDragged) {
      return;
    }

    let v = Number(value);
    v = Math.min(max, v);
    v = Math.max(min, v);

    const percent = ((v - min) / (max - min)) * 100;
    thumbRef.current.style.left = `${percent}%`;
  }, [isDragged, value, min, max]);

  const onDrag = (type) => {
    return () => {
      const moveEvent = type === `mouse` ? `mousemove` : `touchmove`;
      const endEvent = type === `mouse` ? `mouseup` : `touchend`;

      setIsDragged(true);
      document.addEventListener(moveEvent, onMove);
      document.addEventListener(endEvent, onEnd);

      function onMove(evt) {
        const {left, right} = trackRef.current.getBoundingClientRect();

        let x = getX(evt);

        if (x > right) {
          x = right;
        } else if (x < left) {
          x = left;
        }

        const offset = (x - left) / (right - left);
        thumbRef.current.style.left = `${offset * 100}%`;

        const steps = Math.round(((max - min) * offset) / step);
        const newValue = offset * 100 > 99 ? max : min + steps * step;
        if (newValue !== valueRef.current) {
          onChange(newValue);
        }
      }

      function onEnd() {
        document.removeEventListener(moveEvent, onMove);
        document.removeEventListener(endEvent, onEnd);

        setIsDragged(false);
      }

      function getX(evt) {
        return type === `mouse` ? evt.clientX : evt.touches[0].clientX;
      }
    };
  };

  const onKeyDown = ({keyCode}) => {
    let newValue = value;
    const remainder = newValue % step;

    if (keyCode === leftArrow) {
      if (remainder) {
        newValue -= remainder;
      } else {
        newValue -= step;
      }
    }

    if (keyCode === rightArrow) {
      newValue += step - remainder;
    }

    onChange(clamp(newValue, min, max));
  };

  return (
    <div className={getClasses({block, modifiers})} ref={trackRef}>
      <div
        tabIndex={0}
        className="range__thumb"
        onKeyDown={onKeyDown}
        onTouchStart={onDrag(`touch`)}
        onMouseDown={onDrag(`mouse`)}
        ref={thumbRef}
      ></div>
    </div>
  );
}

Range.defaultProps = {
  modifiers: [],
};

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Range;
