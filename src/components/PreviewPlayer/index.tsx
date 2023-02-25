import { useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { Container } from './styles';

interface IAudiPreviewPlayer {
  previewUrl: string;
}

export function AudioPreviewPlayer(props: IAudiPreviewPlayer) {
  const { previewUrl } = props;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [inPlaying, setInPlaying] = useState(false);
  const [timePlayed, setTimePlayed] = useState(0);
  const [duration, setDuration] = useState(0);

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
        {inPlaying && timePlayed < duration ? (
          <button onClick={handlePausePreview} className='play'>
            <FaPause size={16} />
          </button>
        ) : (
          <button onClick={handlePlayPreview} className='play'>
            <FaPlay size={16} />
          </button>
        )}

        <audio
          src={previewUrl}
          ref={audioRef}
          onTimeUpdate={updateTime}
          onLoadedData={(e) => setDuration(e.currentTarget.duration)}
        />
      </span>
    </Container>
  );
}
