import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteData, addData, changeCity } from "./actions";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AddIcon from "@material-ui/icons/Add";
import SimpleLineChart from "./components/SimpleLineChart";
import SimpleTable from "./components/SimpleTable";
import Overview from "./components/Overview";
import axios from "axios";

const api =
  "https://api.apixu.com/v1/forecast.json?key=56a90074d49e4f6081095437192301&q=Shanghai&days=7";

const drawerWidth = 230;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  card: {
    minWidth: 275,
    margin: "50px 50px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

class App extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  async request(city) {
    if (typeof this.props.data[city] === "undefined") {
      try {
        const baseapi = `https://api.apixu.com/v1/forecast.json?key=56a90074d49e4f6081095437192301&q=${city}&days=7`;
        const { data } = await axios.get(baseapi);
        this.props.addData({ city: data.location.name, data });
        this.props.changeCity({ currentcity: city });
      } catch (error) {
        window.alert("Nothing found!");
      }
    } else {
      this.props.changeCity({ currentcity: city });
    }
  }

  handleClick = event => {
    this.request(event.target.innerHTML);
  };

  handleAdd = () => {
    const capitalisedName =
      document
        .getElementById("cityInput")
        .value.charAt(0)
        .toUpperCase() + document.getElementById("cityInput").value.slice(1);
    this.request(capitalisedName);
    document.getElementById("cityInput").value = "";
  };

  async componentDidMount() {
    if (this.props.currentcity === "Loading") {
      try {
        const { data } = await axios.get(api);
        this.props.addData({ city: "Shanghai", data });
        this.props.changeCity({ currentcity: "Shanghai" });
        this.props.deleteData({ id: "Loading" });
      } catch (error) {
        window.alert("Nothing found!");
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Weather
            </Typography>
            <Paper className={classes.search} elevation={1}>
              <InputBase
                className={classes.input}
                placeholder="Enter a city name"
                id="cityInput"
              />
              <IconButton
                className={classes.iconButton}
                aria-label="Add"
                onClick={this.handleAdd}
              >
                <AddIcon />
              </IconButton>
            </Paper>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <div>
              <ListSubheader inset>Saved cities</ListSubheader>
              {Object.keys(this.props.data).map((obj, i) => (
                <ListItem button key={i}>
                  <ListItemIcon>
                    <LocationCityIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={this.props.data[obj].location.name}
                    onClick={this.handleClick}
                  />
                </ListItem>
              ))}
            </div>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Overview />
          <Grid container>
            <Grid item sm={12} md={8}>
              <Typography variant="h4" gutterBottom component="h2">
                Trend
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <SimpleLineChart />
              </Typography>
            </Grid>
            <Grid item sm={12} md={4}>
              <Typography variant="h4" gutterBottom component="h2">
                Details
              </Typography>
              <div className={classes.tableContainer}>
                <SimpleTable />
              </div>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

App.propTypes = {
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
  { deleteData, addData, changeCity }
)(withStyles(styles)(App));
