type convertToTimeType = (duration: number) => { hour: number; minutes: number };

export const convertNumberToTime: convertToTimeType = (duration) => {
  const hour = Math.floor(duration / 60);
  const minutes = duration % 60;

  return { hour, minutes };
};
