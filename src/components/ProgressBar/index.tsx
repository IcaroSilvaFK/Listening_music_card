import { Container } from './styles';

interface IProgressBarProps {
  rating: number;
}

export function ProgressBar(props: IProgressBarProps) {
  const { rating } = props;

  return (
    <Container rating={rating}>
      <span>Rating</span>
      <div>
        <div />
      </div>
    </Container>
  );
}
