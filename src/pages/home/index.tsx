import { Suspense, useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

import { Logo } from '../../components/Logo';
import { convertToMinutesString } from '../../utils/convertToMinutesString';
import {
  Card,
  Container,
  Footer,
  LeftContentFooter,
  MusicEmpty,
  ProgressiveBarContainer,
  RightContentFooter,
} from './styles';

interface IDataProps {
  access_token: string;
}

interface ICardMusicProps {
  result: {
    is_playing: true;
    item: {
      album: {
        artists: [{ id: string; name: string }];
        images: [
          {
            url: string;
          }
        ];
      };
      duration_ms: number;
      name: string;
      popularity: number;
      preview_url: string;
    };
  };
}
type DataProps = {
  is_playing: true;
  item: {
    album: {
      artists: [{ id: string; name: string }];
      images: [
        {
          url: string;
        }
      ];
    };
    duration_ms: number;
    name: string;
    popularity: number;
    preview_url: string;
  };
};

export function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [inPlaying, setInPlaying] = useState(false);
  const [timePlayed, setTimePlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [token, setToken] = useState('');
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    (async () => {
      const data: IDataProps = await fetch(
        'http://localhost:8080/api/_v1/access_token',
        {
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        }
      ).then((resp) => resp.json());
      setToken(data.access_token);
    })();
  }, []);

  useEffect(() => {
    if (!token) return;
    (async () => {
      const data: ICardMusicProps = await fetch(
        `http://localhost:8080/api/_v1/now_playing/${token}`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          mode: 'cors',
        }
      ).then((resp) => resp.json());

      setData(data.result);
    })();
  }, [token]);

  function handlePlayPreview() {
    audioRef.current?.play();
    setInPlaying(true);
  }

  function handlePausePreview() {
    audioRef.current?.pause();
    setInPlaying(false);
  }

  return (
    <Container>
      {data ? (
        <Card>
          <header>
            <Logo />
          </header>
          <section>
            <div>
              <img src={data.item.album.images[0].url} alt={data.item.name} />
              <div>
                <span>{data.is_playing ? 'Tocando agora!' : ''}</span>
                <h1>{data.item.name}</h1>
              </div>
            </div>
            <Footer>
              <div>
                <LeftContentFooter>
                  {data?.item?.album.artists.map((artist) => (
                    <span key={artist.id}>{artist.name}</span>
                  ))}
                  <span>{convertToMinutesString(data.item.duration_ms)}</span>
                </LeftContentFooter>
                <RightContentFooter>
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
                      src={data.item.preview_url}
                      ref={audioRef}
                      onTimeUpdate={(e) => setTimePlayed(e.target.currentTime)}
                      onLoadedData={(e) => setDuration(e.target.duration)}
                    />
                  </span>
                </RightContentFooter>
              </div>
              <ProgressiveBarContainer rating={data.item.popularity}>
                <span>Rating</span>
                <div>
                  <div />
                </div>
              </ProgressiveBarContainer>
            </Footer>
          </section>
        </Card>
      ) : (
        <MusicEmpty>
          <h1>Nenhuma musica tocando...</h1>
        </MusicEmpty>
      )}
    </Container>
  );
}
