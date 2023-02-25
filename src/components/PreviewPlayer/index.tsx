import { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { Container } from './styles';

interface IAudiPreviewPlayer {
  previewUrl: string;
  duration_ms: number;
}

export function AudioPreviewPlayer(props: IAudiPreviewPlayer) {
  const { previewUrl, duration_ms } = props;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [inPlaying, setInPlaying] = useState(false);
  const [timePlayed, setTimePlayed] = useState(0);

  function handlePlayPreview() {
    audioRef.current?.play();
    setInPlaying(true);
    console.log(inPlaying);
  }

  function handlePausePreview() {
    audioRef.current?.pause();
    setInPlaying(false);
  }

  function updateTime(e: React.SyntheticEvent) {
    const { currentTime }: { currentTime: number } =
      e.target as HTMLMediaElement;
    setTimePlayed(currentTime);
  }

  return (
    <Container>
      <span>Resumo</span>
      <span>
        {inPlaying && timePlayed < duration_ms ? (
          <button onClick={handlePausePreview} className='play'>
            <FaPause size={16} />
          </button>
        ) : (
          <button onClick={handlePlayPreview} className='play'>
            <FaPlay size={16} />
          </button>
        )}

        <audio src={previewUrl} ref={audioRef} onTimeUpdate={updateTime} />
      </span>
    </Container>
  );
}
