import React, {useEffect, useState} from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DoneIcon from '@mui/icons-material/Done';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const StepCard = ({step}) => {

    const [open, setOpen] = useState(true);
   // const [subSteps, setSubSteps] = useState(step.SubSteps);

    const handleClick = () => {
        setOpen(!open);
    };

    // useEffect(() => {
    //     // console.log("new step")
    //     // console.log(step)
    // },[step])
    // // console.log(step.SubSteps)

    return (
        <div className="step">
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary={step.Title} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Sub step</StyledTableCell>
                                        <StyledTableCell align="right">Done</StyledTableCell>
                                        <StyledTableCell align="right">Not Sure</StyledTableCell>
                                        <StyledTableCell align="right">Error</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {step?.SubSteps.map((subStep) => (
                                        <StyledTableRow key={subStep.Title}>
                                            <StyledTableCell component="th" scope="row">
                                                {subStep.Title}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {subStep.Done === 0 ? <DoneIcon color="grey" disabled/> : <DoneIcon color="green"/>}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {subStep.NotSure === 0 ? <QuestionMarkIcon disabled/> : <QuestionMarkIcon />}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">
                                                {subStep.Error === 0 ? <ErrorOutlineIcon disabled/> : <ErrorOutlineIcon />}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </List>
                </Collapse>
            </List>

        </div>
    );
}

export default StepCard;