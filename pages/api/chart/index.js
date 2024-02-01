const generateMockSeries = () => {
  const mockSeries = [];
  const currentDate = new Date();
  const startDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  for (let i = 0; i < 30; i++) {
    const randomNivel = Math.random() * 100;
    const randomChuva = Math.random() * 50;
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    mockSeries.push({
      nivel: randomNivel,
      chuva: randomChuva,
      date: date.toISOString(),
      data_hora: date.toISOString(),
    });
  }

  return mockSeries;
};

export default async (_, res) => {
  const chart = generateMockSeries();
  res.status(200).json(chart);
};
