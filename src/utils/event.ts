import API from '../api';

export type LinkItemProps = {
  link: string,
  tags?: [],
  title?: ""
}

export async function fetchAPI(setTransformLink: Function, linkItem: LinkItemProps) {
  try {
    const fetchItem = await API.getBitlinks(linkItem);
    setTransformLink(fetchItem);
  } catch (error) {
    console.error(error);
  }
}

const urlRegex = new RegExp(
  /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/, 'gi',
);
  
export const checkRegex = (url: string) => urlRegex.test(url);

export const findUrl = (fetchLinks: { long_url: string; }[], transformLink: { long_url: string; }) => fetchLinks.find((item) => item.long_url === transformLink.long_url);
