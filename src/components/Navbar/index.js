import React from 'react'
import {Nav, NavIcon, NavLink, Bars, Badge} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>Pizza</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars />
                <Badge>1</Badge>
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar
