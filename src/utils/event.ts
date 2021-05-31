import API from '../api';

export async function fetchAPI(setTransformLink: Function, linkItem: any) {
  try {
    const fetchItem = await API.getBitlinks(linkItem);
    setTransformLink(fetchItem);
  } catch (error) {
    console.error(error);
  }
}

export const Messages = {
  success: '정상적으로 등록되었습니다 😆',
  copyedSuccess: '정상적으로 복사했습니다 😆',
  deletedSuccess: '정상적으로 삭제했습니다 😆',
  failed: '등록을 실패했습니다 😢',
  overlapFailed: '이미 등록된 URL입니다 😫',
  blankValueFailed: '변경할 url을 입력해주세요 🤔',
}

const urlRegex = new RegExp(
  /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/, 'gi',
);
  
export const checkRegex = (url: string) => urlRegex.test(url);

export const findUrl = (fetchLinks: [], transformLink: {long_url: string}) => fetchLinks.find((item: { long_url: string; }) => item.long_url === transformLink.long_url);
