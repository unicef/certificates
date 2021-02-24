// This file has the table for the UNIN Blockchain Course that took place in October 2019
import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TablePagination from '@material-ui/core/TablePagination';

import { ModalsForTables } from './ModalsForTables'

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});
class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };


    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

let counter = 0;
function createData(handleOpenFn, handleCloseFn, imgSrc, name, date, courseName, ipfsLink, etherScanLink, modalState) {
    counter += 1;
    return {
        id: counter,
        handleOpenFn,
        handleCloseFn,
        imgSrc,
        name,
        date,
        courseName,
        ipfsLink,
        etherScanLink,
        modalState
    };
}

const styles = theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: "300",
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    tablecell: {
        fontSize: '10pt'
    },
    paper: {
        position: 'absolute',
        outline: 'none',
        width: '50%',
        backgroundColor: 'white',
        boxShadow: 'black'
    },
    paperImg: {
        width: '50%',
    }
})

export const DFamCertificateTable = () => {
    const classes = styles
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)
    let [open1, setOpen1] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [open4, setOpen4] = React.useState(false)
    const [open5, setOpen5] = React.useState(false)
    const [open6, setOpen6] = React.useState(false)
    const [open7, setOpen7] = React.useState(false)
    const [open8, setOpen8] = React.useState(false)
    const [open9, setOpen9] = React.useState(false)
    const [open10, setOpen10] = React.useState(false)
    const [open11, setOpen11] = React.useState(false)
    const [open12, setOpen12] = React.useState(false)
    const [modals, setModals] = React.useState([])
    const [rows] = React.useState(
        [
            createData(
                () => setOpen1(true),
                () => { setOpen1(false) },
                "/images/dfam2020/dennis.png",
                "Dennis Michalak",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmdCfUiKPmVUqadRtUDhM5QBrwsi5szEc8njACK33dRmWt",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open1
            ),
            createData(
                () => setOpen2(true),
                () => setOpen2(false),
                "/images/dfam2020/irina.png",
                "Irina Vayner",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmPveLaumddM25HPim4j7fx9rDiVGTd5DGcQB7fe1QFsbW",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open2
            ),
            createData(
                () => setOpen3(true),
                () => setOpen3(false),
                "/images/dfam2020/louisa.png",
                "Louisa Tinga",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmWYjQoByP3Kv8opHkdzr2oGy1DEdkUc7cPmV6RiBVsEtq",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open3
            ),
            createData(
                () => setOpen4(true),
                () => setOpen4(false),
                "/images/dfam2020/mahesh.png",
                "Mahesh Adhikari",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmXMmaCmMGrShsRA7S5T4qnFXVEvD2NRQ3am8sm7uvvhmW",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open4
            ),
            createData(
                () => setOpen5(true),
                () => setOpen5(false),
                "/images/dfam2020/mika.png",
                "Mika Takata",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmZz7KGN6ctseaJkKUm3nLn5r3W2ZsnN2yW9Zcq25xajxL",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open5
            ),
            createData(
                () => setOpen6(true),
                () => setOpen6(false),
                "/images/dfam2020/nana.png",
                "Nana Aba Kofua Laryea-Adjei",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmXjgj4wqUnGzajaegmecLPKMEDoEGMhMTKvn1ZjDfuUpB",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open6
            ),
            createData(
                () => setOpen7(true),
                () => setOpen7(false),
                "/images/dfam2020/rohan.png",
                "Rohan Gulrajani",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmQDpxcFimtk7xD2jD5DZBJGkomkWAsbJN9JcokRb8HmRi",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open7
            ),
            createData(
                () => setOpen8(true),
                () => setOpen8(false),
                "/images/dfam2020/sayan.png",
                "Sayan Chaudhuri",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmQTLiSnWEv3gvM9NNB6MXJy4qUzNp7sLGuZMMrRKmRtEZ",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open8
            ),
            createData(
                () => setOpen9(true),
                () => setOpen9(false),
                "/images/dfam2020/victor.png",
                "Victor Mucheru",
                "12/16/2020",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/Qma5oGGbHW5ajnQ1JWdyMS8qDaJaqnjWCM1kwn49iPpyiL",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open9
            ),
            createData(
                () => setOpen10(true),
                () => setOpen11(false),
                "/images/dfam2020/janice.png",
                "Janice Dean",
                "02/24/2021",
                "UNICEF Venture's Blockchain Learning Course",
                "https://ipfs.io/ipfs/QmRr4QXCJ3sDgocDAb58YMiEoWDbLosZn1r1jP8oJQnaye",
                "https://ropsten.etherscan.io/address/0x686aF035c5d3ac49c6591a76A9C349448aae3545",
                open10
            ),
        ]
    )
    React.useEffect(() => {
        createModals(rows)
    }, [open1])
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const handleChangePage = (event, page) => {
        setPage(page)
    }
    const handleChangeRowsPerPage = event => {
        setPage(0)
        setRowsPerPage(event.target.value)
    }
    const createModals = (rows) => {
        setModals(<ModalsForTables rows={rows} />)
    }

    return (
        <React.Fragment>
            {modals}
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablecell}>Certificate Preview</TableCell>
                        <TableCell className={classes.tablecell}>Participant Name</TableCell>
                        <TableCell className={classes.tablecell}>Date of Participation</TableCell>
                        <TableCell className={classes.tablecell}>Course Name</TableCell>
                        <TableCell className={classes.tablecell}>View certificate</TableCell>
                        <TableCell className={classes.tablecell}>Verify on Ethereum Blockchain</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <img onClick={() => row.handleOpenFn} src={row.imgSrc} alt="" border='1' height='100'></img>
                            </TableCell>
                            <TableCell>
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.tablecell} component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell className={classes.tablecell} component="th" scope="row">
                                {row.courseName}
                            </TableCell>
                            <TableCell className={classes.tablecell} ><Link target="_blank" href={row.ipfsLink}>See certificate</Link></TableCell>
                            <TableCell className={classes.tablecell} ><Link target="_blank" href={row.etherScanLink}>Check here</Link></TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActionsWrapped}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </React.Fragment>
    )
}