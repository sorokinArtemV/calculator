import { StyledEyeIcon, StyledEyeOffIcon } from './EyeIcon.styles.tsx';
import React from 'react';


interface IEyeIconProps {
  isHeld: boolean;
  onMouseDown: (event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => void;
  onMouseUp: (event: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>) => void;
}

function EyeIcon({ isHeld, onMouseDown, onMouseUp }: IEyeIconProps) {
  return (
    <>
      {isHeld ? (
        <StyledEyeOffIcon
          onMouseDown={onMouseUp}
          onMouseUp={onMouseUp}
          onTouchStart={onMouseUp}
          onTouchEnd={onMouseDown}
        />
      ) : (
        <StyledEyeIcon
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onMouseUp}
          onTouchEnd={onMouseDown}
        />
      )}
    </>
  );
}

export default EyeIcon;