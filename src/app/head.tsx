import React from 'react';
import Script from 'next/script'

const Head: React.FC = () => {
  return (
    <head>
      <title>OS.dnnr</title>
      <meta name="description" content="Denner Azevedo - Web Developer" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BD497N434V"/>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BD497N434V');
        `}
      </Script>
    </head>
  );
}

export default Head;