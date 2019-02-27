import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import moment from "moment-timezone";
import sunny from "../assets/sunny.jpg";
import cloudy from "../assets/cloudy.jpg";
import lightning from "../assets/lightning.jpg";
import mist from "../assets/mist.jpg";
import snowy from "../assets/snowy.jpg";
import overcast from "../assets/overcast.jpg";
import rainy from "../assets/rainy.jpg";

const styles = theme => ({
  card: {
    minWidth: 275,
    minHeight: 200
  },
  mainFeaturedPost: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  }
});

class Overview extends React.Component {
  state = {
    time: moment()
      .tz(this.props.data[this.props.currentcity].location.tz_id)
      .format("HH:mm:ss")
  };
  handleImage = code => {
    switch (code) {
      case 1000:
        return sunny;
      case 1003:
      case 1006:
        return cloudy;
      case 1009:
        return overcast;
      case 1030:
      case 1135:
      case 1147:
        return mist;
      case 1066:
      case 1114:
      case 1117:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1237:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
        return snowy;
      case 1087:
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        return lightning;
      default:
        return rainy;
    }
  };

  updateTime() {
    this.timerID = setInterval(
      () =>
        this.setState({
          time: moment()
            .tz(this.props.data[this.props.currentcity].location.tz_id)
            .format("HH:mm:ss")
        }),
      1000
    );
  }

  componentDidMount() {
    this.updateTime();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper
        className={classes.mainFeaturedPost}
        style={{
          backgroundImage: `url(${this.handleImage(
            this.props.data[this.props.currentcity].current.condition.code
          )})`
        }}
      >
        <Grid container>
          <Grid item sm={12} md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {this.props.data[this.props.currentcity].current.temp_c}°C
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {this.props.data[this.props.currentcity].location.name}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {this.props.data[this.props.currentcity].current.condition.text}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {this.state.time}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Overview.propTypes = {
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
)(withStyles(styles)(Overview));
