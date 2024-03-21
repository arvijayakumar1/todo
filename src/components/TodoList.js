import React, { Fragment } from "react";
import './ToDoList.css';
import styled1 from './ToDoList.module.css'
import styled from 'styled-components';
const List = styled.ul `
list-style: none;
border-bottom: 1px solid gray;
background-color: lightred;`

const ListItem = styled.li `
border-bottom: 1px solid violet;
line-height: 30px;`
function ToDoList({myitems, mytitle})
{   
    const todoitems = myitems;
    return (
        <>
        <div>{mytitle}</div>
            <List className= {styled1.grouplist}>
               {
               todoitems.map((i)=>(<ListItem key={i} className= {styled1.grouplistitem}>{i}</ListItem>))
               }    
            </List>
        </>
    )
}

export default ToDoList;