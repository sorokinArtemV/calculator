import React, { ReactNode, useState } from 'react';


interface ISliderProps {
  children: ReactNode,
  imageUrls: string[]
}

function Slider({ children, imageUrls }: ISliderProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      {children}
    </div>
  );
}

export default Slider;