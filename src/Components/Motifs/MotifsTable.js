import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import row2 from './data'
const columns = [
  { id: 'Actions', label: 'Actions', minWidth:100 },
  { id: 'id Module extrerne', label: 'id Module extrerne', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth:100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Abréviation',
    label: 'Abréviation',
    minWidth:100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Libéllé',
    label: 'Libéllé',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Libéllé patient',
    label: 'Libéllé patient',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Temps du rdv par defaut',
    label: 'Temps du rdv par defaut',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Montant de l\'acte',
    label: 'Montant de l\'acte',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Nombre de personnes',
    label: 'Nombre de personnes',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Accessible par internet',
    label: 'Accessible par internet',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Ordre pour internet',
    label: 'Ordre pour internet',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Temps decalage Prise de RDV',
    label: 'Temps decalage Prise de RDV',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Proposer un rdv après',
    label: 'Proposer un rdv après',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Proposer un RDV jusqu\'à',
    label: 'Proposer un RDV jusqu\'à',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Motif par defaut',
    label: 'Motif par defaut',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Couleur',
    label: 'Couleur',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Protocole',
    label: 'Protocole',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Controle Prise de RDV',
    label: 'Controle Prise de RDV',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Age minimum (inclus)',
    label: 'Age minimum (inclus)',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Age maximum (inclus)',
    label: 'Age maximum (inclus)',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Motif anonyme',
    label: 'Motif anonyme',
    minWidth:100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 12610000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744,10098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];

const rows = [
  {
    'id': 1,
    "Actions": "action1",
    "id Module externe": "uuid1",
    "population": 123,
    "Abréviation": "ab1",
    "Libéllé": "libellé1",
    "Libéllé patient": "libellé patient 1",
    "Temps du rdv par defaut": 10,
    "Montant de l'acte": 100,
    "Nombre de personnes": 5,
    "Accessible par internet": true,
    "Ordre pour internet": 1,
    "Temps decalage Prise de RDV": 30,
    "Proposer un rdv après": 20,
    "Proposer un rdv jusqu'à": 40,
    "Motif par defaut": "motif1",
    "Couleur": "#ff0000",
    "Protocole": "protocole1",
    "Controle Prise de RDV": true,
    "Age minimum (inclus)": 18,
    "Age maximum (inclus)": 65,
    "Motif anonyme": "anonyme1"
  },
  {
    'id': 2,
    "Actions": "action2",
    "id Module externe": "uuid2",
    "population": 456,
    "Abréviation": "ab2",
    "Libéllé": "libellé2",
    "Libéllé patient": "libellé patient 2",
    "Temps du rdv par defaut": 20,
    "Montant de l'acte": 200,
    "Nombre de personnes": 10,
    "Accessible par internet": false,
    "Ordre pour internet": 2,
    "Temps decalage Prise de RDV": 60,
    "Proposer un rdv après": 40,
    "Proposer un rdv jusqu'à": 80,
    "Motif par defaut": "motif2",
    "Couleur": "#00ff00",
    "Protocole": "protocole2",
    "Controle Prise de RDV": false,
    "Age minimum (inclus)": 20,
    "Age maximum (inclus)": 70,
    "Motif anonyme": "anonyme2"
  },
];

const CreateSelect=()=>{
  const [action, setAction] = React.useState('');

  return(
    <FormControl style={{ width: '100px' }}>
    <InputLabel id="Action" style={{ fontSize: "12px" }} >Action</InputLabel>
    <Select
    labelId="Action"
    id="Action"
    value={action}
    label="Action"
    onChange={(e) => setAction  (e.target.value)}
    style={{ fontSize: "12px" }} 
    >
    <MenuItem value={'Suppimer'} style={{ fontSize: "12px" }} >Suppimer</MenuItem>
    <MenuItem value={'Modifier'} style={{ fontSize: "12px" }} >Modifier</MenuItem>

    </Select>
</FormControl>
  )
}

export default function MotifsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, backgroundColor:'#bfcdff', fontSize: "12px", fontWeight: 'bold' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {row2
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} style={{ fontSize: "12px" }}>
                          {column.id=='Actions'?<CreateSelect/>: column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}