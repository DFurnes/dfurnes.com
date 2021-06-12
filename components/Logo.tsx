import styled from '@emotion/styled';
import { confetti } from 'dom-confetti';
import { useRef } from 'react';

import 'twin.macro';

const SURPRISE = {
  angle: 80,
  spread: 100,
  startVelocity: 15,
  elementCount: 80,
  decay: 0.95,
};

const ConfettiCannon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default function Logo() {
  const el = useRef(null);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    confetti(el.current, SURPRISE);
  };

  return (
    <h1>
      <a
        data-splitbee-event="Confetti"
        tw="relative cursor-pointer"
        onClick={onClick}
        href="#"
      >
        David Furnes
        <ConfettiCannon ref={el} />
      </a>
    </h1>
  );
}
