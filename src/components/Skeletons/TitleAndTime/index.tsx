import ContentLoader from 'react-content-loader';

export function TitleAndTimeSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={132}
      height={41}
      viewBox='0 0 132 41'
      backgroundColor='RGBA(0, 0, 0, 0.2)'
      foregroundColor='RGBA(255, 255, 255, 0.04)'
    >
      <rect x='12' y='12' rx='0' ry='0' width='172' height='12' />
      <rect x='36' y='29' rx='0' ry='0' width='72' height='12' />
    </ContentLoader>
  );
}
