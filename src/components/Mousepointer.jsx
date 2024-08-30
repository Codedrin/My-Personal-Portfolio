import React, { useState, useEffect, useRef } from 'react';

const Mousepointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };

  const smoothMove = () => {
    setCirclePosition((prevPosition) => {
      const dx = position.x - prevPosition.x;
      const dy = position.y - prevPosition.y;
      return {
        x: prevPosition.x + dx * 0.1, 
        y: prevPosition.y + dy * 0.1,       };
    });
    requestRef.current = requestAnimationFrame(smoothMove);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(smoothMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [position]);

  return (
    <div
      style={{
        position: 'fixed',
        top: circlePosition.y - 15, 
        left: circlePosition.x - 15, 
        width: '20px',
        height: '20px',
        border: '2px solid orange', 
        borderRadius: '50%', 
        zIndex: 1000,
        pointerEvents: 'none', 
        transition: 'transform 2.0s ease-out',
      }}
    ></div>
  );
};

export default Mousepointer;
