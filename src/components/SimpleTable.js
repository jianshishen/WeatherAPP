import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = {
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 400
  }
};

let id = 0;
function createData(name, value) {
  id += 1;
  return { id, name, value };
}

class SimpleTable extends React.Component {
  render() {
    const { classes } = this.props;
    let data = [
      createData(
        "Wind Speed",
        this.props.data[this.props.currentcity].current.wind_kph
      ),
      createData(
        "Wind Direction",
        this.props.data[this.props.currentcity].current.wind_dir
      ),
      createData(
        "Humidity",
        this.props.data[this.props.currentcity].current.humidity
      ),
      createData(
        "Visibility",
        this.props.data[this.props.currentcity].current.vis_km
      ),
      createData("UV", this.props.data[this.props.currentcity].current.uv)
    ];
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {data.map(n => (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell align="right">{n.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

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
)(withStyles(styles)(SimpleTable));
