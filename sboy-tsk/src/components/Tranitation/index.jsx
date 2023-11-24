import React, { useState, useTransition } from 'react';

function MyComponent() {
  
  const [isVisible, setIsVisible] = useState(false);

  const transitions = useTransition(isVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Görünürlüğü Dəyişdir
      </button>

      {transitions((style, item) =>
        item ? (
          <div style={style}>Komponent görünür</div>
        ) : (
          <div style={style}>Komponent gizli</div>
        )
      )}
    </div>
  );
}
export default MyComponent
