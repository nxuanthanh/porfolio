import { useEffect, useRef, useState } from 'react';

function useHover(props) {
  const [hovered, setHovered] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleMouseOver = () => {
      setHovered(true);
    };

    const handleMouseOut = () => {
      setHovered(false);
    };

    const element = nodeRef.current;

    if (element) {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      element && element.removeEventListener('mouseover', handleMouseOver);
      element && element.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  return {
    hovered,
    nodeRef,
  };
}

export default useHover;
