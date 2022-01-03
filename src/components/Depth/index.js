import './depth.scss';
import { Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';

export const Depth = () => {
  const [scroll] = useWindowScroll();

  return (
    <Text className='depth' weight={700} size='lg'>
      {scroll.y * 2} feet ---
    </Text>
  );
};
