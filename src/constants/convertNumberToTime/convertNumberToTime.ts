type convertToTimeType = (duration: number) => string;

export const convertNumberToTime: convertToTimeType = (duration) => {
  const hour = Math.floor(duration / 60);
  const minutes = duration % 60;

  return (hour && `${hour} ч. ${minutes} мин.`) || `${minutes} мин.`;
};
