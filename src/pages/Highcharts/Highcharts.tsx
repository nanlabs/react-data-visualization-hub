import React, { useRef } from 'react';
import * as Highchart from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options: Highchart.Options = {
  title: {
    text: 'My chart',
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3],
    },
  ],
};

const Highcharts = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div>
      <HighchartsReact highcharts={Highchart} options={options} ref={chartComponentRef} {...props} />
    </div>
  );
};

export default Highcharts;
