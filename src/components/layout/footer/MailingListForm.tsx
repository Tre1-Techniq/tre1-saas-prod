import { useEffect } from 'react';

const MailingListForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(m, o, n, t, e, r, _) {
        m['__GetResponseAnalyticsObject'] = e;
        m[e] = m[e] || function() {
          (m[e].q = m[e].q || []).push(arguments)
        };
        r = o.createElement(n);
        _ = o.getElementsByTagName(n)[0];
        r.async = 1;
        r.src = t;
        r.setAttribute('crossorigin', 'use-credentials');
        _.parentNode.insertBefore(r, _)
      })(window, document, 'script', 'https://an.gr-wcon.com/script/153e051e-4ee4-429c-a53c-ddb55f58423c/ga.js', 'GrTracking');
    `;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default MailingListForm;