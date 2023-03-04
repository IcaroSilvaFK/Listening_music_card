import { MusicTitle } from '../../components/HeaderCard';

import { Logo } from '../../components/Logo';
import { MusicDetails } from '../../components/MusicDetails';
import { AudioPreviewPlayer } from '../../components/PreviewPlayer';
import { ProgressBar } from '../../components/ProgressBar';
import { ImageAndTitleSkeleton } from '../../components/Skeletons/ImageAndTitle';
import { RatingSkeleton } from '../../components/Skeletons/Rating';
import { TitleAndTimeSkeleton } from '../../components/Skeletons/TitleAndTime';
import { useLoadData } from '../../hooks/useLoadData';
import { Card, Container, Footer, MusicEmpty } from './styles';

export function App() {
  const { data, isLoading } = useLoadData();

  return (
    <Container>
      {isLoading && (
        <Card>
          <header>
            <Logo />
          </header>
          <section>
            <ImageAndTitleSkeleton />
            <Footer>
              <div>
                <TitleAndTimeSkeleton />
                <TitleAndTimeSkeleton />
              </div>
              <RatingSkeleton />
            </Footer>
          </section>
        </Card>
      )}
      {!isLoading && !data && (
        <MusicEmpty>
          <h1>Nenhuma musica tocando...</h1>
        </MusicEmpty>
      )}
      {!isLoading && data && (
        <Card>
          <header>
            <Logo />
          </header>
          <section>
            <MusicTitle
              imageSource={data.item.album.images[0].url}
              isPlaying={data.is_playing}
              title={data.item.name}
            />
            <Footer>
              <div>
                <MusicDetails
                  artists={data?.item.album.artists}
                  duration={data.item.duration_ms}
                />
                <AudioPreviewPlayer previewUrl={data.item.preview_url} />
              </div>
              <ProgressBar rating={data.item.popularity} />
            </Footer>
          </section>
        </Card>
      )}
    </Container>
  );
}
