import { convertToMinutesString } from '../../utils/convertToMinutesString';
import { Container } from './styles';

interface IMusicDetailsProps {
  duration: number;
  artists: {
    id: string;
    name: string;
  }[];
}

export function MusicDetails(props: IMusicDetailsProps) {
  const { artists, duration } = props;
  return (
    <Container>
      {artists.map((artist) => (
        <span key={artist.id}>{artist.name}</span>
      ))}
      <span>{convertToMinutesString(duration)}</span>
    </Container>
  );
}
