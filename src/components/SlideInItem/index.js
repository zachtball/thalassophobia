import './slideInItem.scss';
import clsx from 'clsx';
import { useRef } from 'react';
import { useWindowScroll, useIntersection } from '@mantine/hooks';
import { ReactComponent as ScubaDiver } from '../../images/ScubaDiver.svg';

export const SlideInItem = () => {
  const [scroll] = useWindowScroll();
  const containerRef = useRef();
  const [ref, observer] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });
  console.log(observer?.isIntersecting);
  const hasPassed = scroll.y * 2 > 130;
  return (
    <div
      className={clsx(
        'slide',
        hasPassed && 'in',
        hasPassed && !observer?.isIntersecting && 'out'
      )}
    >
      slide in
      <ScubaDiver ref={ref} />
    </div>
  );
};
