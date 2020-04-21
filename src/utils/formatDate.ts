const formatDate = (timestamp: Date): string => {
  const date = new Date(timestamp);

  return new Intl.DateTimeFormat('pt-BR').format(date);
};

export default formatDate;
