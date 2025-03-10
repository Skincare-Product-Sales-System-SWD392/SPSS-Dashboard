import { useEffect, useState } from 'react';
import getChartColorsArray from 'Common/ChartsDynamicColor';

const useChartColors = (chartId: string) => {
  const [chartColors, setChartColors] = useState<string[]>([]);

  useEffect(() => {
    const colors : any = getChartColorsArray(chartId);
    setChartColors(colors);
  }, [chartId]);

  return chartColors;
};

export default useChartColors;
