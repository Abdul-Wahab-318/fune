import React from 'react'
import fb from '../../assets/facebook.png'
import intsa from '../../assets/instagram.png'
import tw from '../../assets/twitter.png'

export default function Footer() {
  return (
    <footer>
        <div className="container footer-inner d-flex justify-content-between align-items-center">
            <div className="d-flex gap-5">
                <span>©FUNE 2024</span>
                <span>
                <a href="">Voorwaarden</a>
                </span>
                <span>
                <a href="">Privacy Statement</a>
                </span>
            </div>
            <div className="d-flex gap-3 social-icon-wrapper">
                <a href="">
                <img src={fb} width="12px" alt="" />
                </a>
                <a href="">
                <img src={tw} width="18px" alt="" />
                </a>
                <a href="">
                <img src={intsa} width="18px" alt="" />
                </a>
            </div>
        </div>
    </footer>
  )
}
