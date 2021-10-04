import * as readingTime from 'reading-time';

export function getReadTime(text) {
  const readTime = Math.round(readingTime(text).minutes);
  return `${readTime < 1 ? '< 1' : Math.round(readTime)}min read`;
}
