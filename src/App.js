import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, TextField, Button, Container, Box } from "@mui/material";
import { Add, ThreeDRotation } from "@mui/icons-material";
import "../src/App.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function App() {
  return (
    <div className="App">
      <Box
        item
        style={{
          backgroundColor: "black",
          height: "70px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          MERN Stack Developer practical Task
        </h1>
      </Box>
      <Container maxWidth="xl">
        <Box
          flexDirection={"row"}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            // display={"flex"}
            flexDirection={"row"}
            style={{ justifyContent: "space-between" }}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button variant="contained">Contained</Button>
          </Box>
          <Box
            // display={"flex"}
            flexDirection={"row"}
            gap={2}
            // style={{ justifyContent: "space-between" }}
          >
            <Button variant="contained" size="small" startIcon={<Add />}>
              Add User
            </Button>
            <Button variant="contained" size="small">
              Export to CSV
            </Button>
          </Box>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default App;
