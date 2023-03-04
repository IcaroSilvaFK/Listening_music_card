import ContentLoader from 'react-content-loader';

import { Container } from './styles';

export function RatingSkeleton() {
  return (
    <Container>
      <span>Rating</span>
      <ContentLoader
        speed={2}
        width={300}
        height={41}
        viewBox='0 0 300 41'
        backgroundColor='RGBA(0, 0, 0, 0.2)'
        foregroundColor='RGBA(255, 255, 255, 0.04)'
      >
        <rect x='50' y='6' rx='0' ry='0' width='206' height='15' />
      </ContentLoader>
    </Container>
  );
}
