import React from "react";
import { connect } from "react-redux";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

class SimpleLineChart extends React.Component {
  render() {
    return (
      // 99% per https://github.com/recharts/recharts/issues/172
      <ResponsiveContainer width="99%" height={320}>
        <LineChart
          data={[
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[0].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[0].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[0].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[1].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[1].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[1].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[2].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[2].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[2].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[3].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[3].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[3].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[4].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[4].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[4].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[5].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[5].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[5].day.mintemp_c
            },
            {
              name: this.props.data[this.props.currentcity].forecast
                .forecastday[6].date,
              Max: this.props.data[this.props.currentcity].forecast
                .forecastday[6].day.maxtemp_c,
              Min: this.props.data[this.props.currentcity].forecast
                .forecastday[6].day.mintemp_c
            }
          ]}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Max" stroke="#82ca9d" />
          <Line
            type="monotone"
            dataKey="Min"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

function mapStateToProps(state) {
  const { data, currentcity } = state;
  return {
    data: data.data,
    currentcity: currentcity.currentcity
  };
}

export default connect(
  mapStateToProps,
  null
)(SimpleLineChart);
