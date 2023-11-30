import React from 'react'
import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <header>
        <div className="container d-flex justify-content-between align-items-center">
            <a href="" className="logo-wrapper">
                <img src={logo} width="170px" alt="" />
            </a>
            <button className="btn-1"> Blijf op de hoogte</button>
        </div>
  </header>
  )
}
