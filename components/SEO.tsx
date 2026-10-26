import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://hyperlandhq.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.png`;
const DEFAULT_OG_IMAGE_ALT = 'HyperlandHQ: Design, develop and scale products built properly';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: object | object[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  jsonLd,
  noindex = false,
}) => {
  const url = `${SITE_URL}${path}`;
  const isDefaultImage = image === DEFAULT_OG_IMAGE;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="HyperlandHQ" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      {isDefaultImage && <meta property="og:image:type" content="image/png" />}
      {isDefaultImage && <meta property="og:image:width" content="1200" />}
      {isDefaultImage && <meta property="og:image:height" content="630" />}
      {isDefaultImage && <meta property="og:image:alt" content={DEFAULT_OG_IMAGE_ALT} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {isDefaultImage && <meta name="twitter:image:alt" content={DEFAULT_OG_IMAGE_ALT} />}

      {jsonLdList.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
};
