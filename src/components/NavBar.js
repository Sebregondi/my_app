import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-error">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Trajano Libros</a>
            </div>
            <CartWidget />
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Menú</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Libros</a></li>
                    <li><a>Otras cosas</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar