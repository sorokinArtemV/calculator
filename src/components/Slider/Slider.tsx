import React, { ReactNode } from 'react';


interface ISliderProps {
  children: ReactNode,
  images: string[]
}

function Slider({ children, images }: ISliderProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Slider;