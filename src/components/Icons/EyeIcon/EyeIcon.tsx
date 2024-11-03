import { StyledEyeIcon, StyledEyeOffIcon } from './EyeIcon.styles.tsx';

interface IEyeIconProps {
  isHeld: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

function EyeIcon({ isHeld, onMouseDown, onMouseUp }: IEyeIconProps) {
  return (
    <>
      {isHeld ? (
        <StyledEyeOffIcon onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
      ) : (
        <StyledEyeIcon onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
      )}
    </>
  );
}

export default EyeIcon;