
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
  style?: React.CSSProperties;
}

const Icon: React.FC<IconProps> = ({ name, className = '', filled = false, style }) => (
  <span 
    className={`material-symbols-outlined ${filled ? 'filled' : ''} ${className}`}
    style={style}
  >
    {name}
  </span>
);

export default Icon;
