import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const Items = props => (
  <TableRow>
    <TableCell>{props.logsItem.title}</TableCell>
    <TableCell>{props.logsItem.description}</TableCell>
    <TableCell>
      {new Date(props.logsItem.date).toLocaleDateString() +
        " | " +
        new Date(props.logsItem.date).toLocaleTimeString()}
    </TableCell>
    <TableCell>
      <Button variant="contained" color="default" size="small">
        <Link to={"/edit/" + props.logsItem._id}>Edit</Link>
      </Button>
    </TableCell>
  </TableRow>
);

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/log/")
      .then(respond => {
        this.setState({
          logs: respond.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  LogLists() {
    return this.state.logs.map((currentItem, i) => {
      return <Items logsItem={currentItem} key={i} />;
    });
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Deskripsi</TableCell>
              <TableCell>Waktu</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.LogLists()}</TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ListPage;
