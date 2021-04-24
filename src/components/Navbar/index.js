import React from 'react'
import {Nav, NavIcon, NavLink, Bars, Badge} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>Pizza Store</NavLink>
            <NavIcon>
                <p>Menu</p>
                <Bars />
                <Badge>9</Badge>
            </NavIcon>
        </Nav>
        </>
    )
}

export default Navbar
