import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

function Range({min, max, step, value, onChange}) {
  const [isDragged, setIsDragged] = useState(false);

  const thumbRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    if (isDragged) {
      return;
    }

    let v = Number(value);
    v = Math.min(max, v);
    v = Math.max(min, v);

    const percent = ((v - min) / (max - min)) * 100;
    thumbRef.current.style.left = `${percent}%`;
  }, [isDragged, value]);

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
        const newValue = min + steps * step;
        if (newValue !== value) {
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

  return (
    <div className="range" ref={trackRef}>
      <div
        className="range__thumb"
        onTouchStart={onDrag(`touch`)}
        onMouseDown={onDrag(`mouse`)}
        ref={thumbRef}
      ></div>
    </div>
  );
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default Range;
