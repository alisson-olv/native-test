import { Image, ImageProps, ImageSourcePropType } from 'react-native';

interface MovieCardProps extends ImageProps {
  imageUrl: ImageSourcePropType;
}

export default function MovieCard({ imageUrl }: MovieCardProps) {
  return <Image source={imageUrl} />;
}
