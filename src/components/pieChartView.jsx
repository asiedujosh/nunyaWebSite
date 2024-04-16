import { PieChart } from 'react-minimal-pie-chart';

const PieChartView = ({pieData}) => {


  const defaultLabelStyle = {
    fontSize: '10px',
    fill: '#ffffff'
  };


    return (
      <div className = "h-60">
      <PieChart
      data={[
        { title: 'Correct', value: pieData[0], color: '#2C72D2' },
        { title: 'Wrong', value: (pieData[1] - pieData[0]), color: '#042046' },
      ]}
      totalValue={pieData[1]}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{
          ...defaultLabelStyle,
        }}
        background="#bfbfbf"
    />
    </div>
    )
}

export default PieChartView

