import { useState, useEffect } from 'react';

interface IDataProps {
  access_token: string;
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
  const [token, setToken] = useState('');
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    (async () => {
      const data: IDataProps = await fetch(
        'https://rest-go.onrender.com/api/_v1/access_token',
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
        `https://rest-go.onrender.com/api/_v1/now_playing/${token}`,
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

  return {
    data,
  };
}
