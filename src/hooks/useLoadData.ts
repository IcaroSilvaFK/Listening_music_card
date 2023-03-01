import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

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

export function useLoadData() {
  const [timeToRetry, setTimeToRetry] = useState(0);

  const { data, isLoading } = useQuery(
    ['@music'],
    async () => {
      const data: ICardMusicProps = await fetch(
        `https://rest-go.onrender.com/api/_v1/now_playing`,
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          mode: 'cors',
        }
      ).then((resp) => resp.json());
      setTimeToRetry(data.result.item.duration_ms);
      return data;
    },
    {
      refetchInterval: timeToRetry,
    }
  );

  return {
    data: data?.result,
    isLoading,
  };
}
