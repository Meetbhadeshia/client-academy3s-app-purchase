import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export function StickyHeadTable({ columns, rows, tableFlips, handleTableFlip }) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    console.log(columns)
    console.log(tableFlips)
    console.log(rows)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{
            width: {
                xs: "100%", sm: "100%", lg: '95%'
            }, overflow: 'hidden'
        }}>
            < TableContainer sx={{
                maxHeight: 440,
                height: "100vh",
            }} >
                <Table stickyHeader aria-label="sticky table" sx={{ userSelect: "none", width: { xs: '100%', sm: '100%', md: '75%' } }}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    sx={{ minWidth: column.minWidth, fontSize: "1rem" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            console.log(typeof row[column.id])
                                            return (
                                                <TableCell key={column.id} align={column.align}
                                                    sx={
                                                        column.id === 'answer' && tableFlips[row.index] && row[column.id] === "number"
                                                            ? {
                                                                background: 'grey', color: 'grey'
                                                            }
                                                            : ""
                                                    }
                                                    onClick={() => handleTableFlip(row.index)}>
                                                    {typeof value === 'number'
                                                        ? row[column.id]
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer >
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}