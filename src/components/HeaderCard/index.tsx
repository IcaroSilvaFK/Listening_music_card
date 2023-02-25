import { Container } from './styles';

interface IHeaderCardProps {
  imageSource: string;
  title: string;
  isPlaying: boolean;
}

export function MusicTitle(props: IHeaderCardProps) {
  const { imageSource, isPlaying, title } = props;

  return (
    <Container>
      <img src={imageSource} alt={title} />
      <div>
        <span>{isPlaying ? 'Tocando agora!' : 'Em pause'}</span>
        <h1>{title}</h1>
      </div>
    </Container>
  );
}
