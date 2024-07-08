import { FontAwesome } from '@expo/vector-icons';

interface PlayCircleProps {
  size: number;
  color: string;
}

export default function PlayCircle({ size, color }: PlayCircleProps) {
  return <FontAwesome name='play-circle-o' size={size} color={color} />;
}
