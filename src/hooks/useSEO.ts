import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const BASE_TITLE = 'Makio Tours and Travel';

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | ${BASE_TITLE}`;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description]);
}
