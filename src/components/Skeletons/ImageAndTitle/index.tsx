import ContentLoader from 'react-content-loader';

export function ImageAndTitleSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={180}
      height={160}
      viewBox='0 0 180 180'
      backgroundColor='RGBA(0, 0, 0, 0.2)'
      foregroundColor='RGBA(255, 255, 255, 0.04)'
    >
      <rect x='0' y='158' rx='3' ry='3' width='184' height='19' />
      <rect x='30' y='128' rx='3' ry='3' width='124' height='18' />
      <circle cx='261' cy='47' r='45' />
      <circle cx='87' cy='76' r='41' />
    </ContentLoader>
  );
}
