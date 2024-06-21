export const GTM_ID = 'GTM-PXSZKGXJ';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
