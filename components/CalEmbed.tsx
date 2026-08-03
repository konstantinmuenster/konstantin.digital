'use client';

import { useEffect } from 'react';

import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_NAMESPACE = 'chat';
const CAL_LINK = 'konstantinruge/chat';

export const CalEmbed = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'light' }}
    />
  );
};
