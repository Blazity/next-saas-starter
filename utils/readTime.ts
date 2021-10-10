import * as readingTime from 'reading-time';

export function getReadTime(text: string) {
  const readTime = Math.round(readingTime.default(text).minutes);
  return `${readTime < 1 ? '< 1' : Math.round(readTime)}min read`;
}
