import React from "react";
import logo from "./logo.svg";
import {
  Paper,
  Tabs,
  Tab,
  Box,
  Typography,
  isMuiElement,
  Card,
} from "@material-ui/core";
import "./App.css";
import SwipeableViews from "react-swipeable-views";
import { PropTypes } from "prop-types";
import CardItem from "./CardItem";
import Questions from "./Questions/Questions";
import BigQuestion from "./Questions/BigQuestion";

function TabPanel(props) {
  const { value, index } = props;

  return (
    <>{value === index && <Card className="box">{props.component}</Card>}</>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const content = (item, value, index) => (
  <TabPanel
    value={value}
    index={index}
    component={
      <CardItem
        name={item.name}
        priceOne={item.priceOne}
        priceTwo={item.priceTwo}
      />
    }
  />
);

function App() {
  const [value, setValue] = React.useState(0);
  const domainsItems = [
    {
      name: ".COM",
      priceOne: "$5.99/y",
      priceTwo: "Instead of $10.99/yr",
    },
    {
      name: ".AI",
      priceOne: "$55.99/yr",
      priceTwo: "Instead 0f $10.99/yr",
    },
    {
      name: ".NET",
      priceOne: "$55.99/yr",
      priceTwo: "Instead of $10.99yr",
    },
    {
      name: ".HEALTH",
      priceOne: "7.99/yr",
      priceTwo: "Instead of $10.99yr",
    },
    {
      name: ".CO.UK",
      priceOne: "$3.99/yr",
      priceTwo: "Instead of $10.99yr",
    },
    {
      name: ".ORG",
      priceOne: "$15.99/yr",
      priceTwo: "Instead of $10.99yr",
    },
    {
      name: ".CO",
      priceOne: "$26.33/yr",
      priceTwo: "Instead of $10.99yr",
    },
    {
      name: ".SEA",
      priceOne: "$26.33/yr",
      priceTwo: "Instead of $10.99yr",
    },
  ];
  const webHostItems = [
    {
      name: "BlueHost",
      priceOne: "$2.75/m",
      priceTwo: "$10/m",
    },
    {
      name: "HostGator",
      priceOne: "2.64/m",
      priceTwo: "$10/m",
    },
    {
      name: "Hostinger",
      priceOne: "$9.99/m",
      priceTwo: "$10/m",
    },
    {
      name: "Inmotion",
      priceOne: "2.49/m",
      priceTwo: "$10/m",
    },
    {
      name: "Hostwinds",
      priceOne: "$90/m",
      priceTwo: "$10/m",
    },
    {
      name: "Dreamhost",
      priceOne: "$2.59/m",
      priceTwo: "$10/m",
    },
    {
      name: "GreenGeks",
      priceOne: "$2.95",
      priceTwo: "$10/m",
    },
    {
      name: "Domain.com",
      priceOne: "9.99/m",
      priceTwo: "$10/m",
    },
  ];

  return (
    <div class="div-1">
      <div>
        <Card square className="card">
          <Tabs
            class="tab-list"
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            variant="fullWidth"
          >
            <Tab label="Domains" />
            <Tab label="Web Hosting" />
            <Tab label="Dedicated Servers" />
            <Tab label="Virtual Cloud Servers" />
            <Tab label="Word Press Hosting" />
            <Tab label="Email Hosting" />
            <Tab label="VPS Hosting Servers" />
            <Tab label="Free Hosting" />
          </Tabs>
          <Box className="box-1">
            {domainsItems.map((item) => content(item, value, 0))}
            {webHostItems.map((item) => content(item, value, 1))}
            {domainsItems.map((item) => content(item, value, 2))}
            {webHostItems.map((item) => content(item, value, 3))}
            {domainsItems.map((item) => content(item, value, 4))}
            {webHostItems.map((item) => content(item, value, 5))}
            {domainsItems.map((item) => content(item, value, 6))}
            {webHostItems.map((item) => content(item, value, 7))}
          </Box>
        </Card>
      </div>
      <Questions />
      <BigQuestion />
    </div>
  );
}

export default App;
