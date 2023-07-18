import React from 'react';

const Analytics = () => {
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-ZGNCW7M894"
    ></script>
    dangerouslySetInnerHTML=
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-ZGNCW7M894');`}
  </>;
};

export default Analytics;
