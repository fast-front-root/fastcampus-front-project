export const formatKoreanTextCompareDatesFromNow = (
  compareISODateString: string,
): string => {
  const now = new Date();
  const past = new Date(compareISODateString);
  const diff = now.getTime() - past.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return "1분 미만";
  }
  if (minutes < 60) {
    return `${minutes}분 전`;
  }
  if (hours < 24) {
    return `${hours}시간 전`;
  }
  if (days < 7) {
    return `${days}일 전`;
  }
  if (weeks < 4) {
    return `${weeks}주 전`;
  }
  if (months < 12) {
    return `${months}개월 전`;
  }

  return `${years}년 전`;
};
