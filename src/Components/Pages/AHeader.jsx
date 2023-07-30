import React from 'react'
import '../Style/AHeader.scss'

function AHeader() {
    return (
        <div className='header'>
            <div className='mx-5'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid d-block d-lg-flex justify-content-between">
                        <a className="navbar-brand display-2 order-2 order-lg-1" href="#">
                            <span>AppM5</span>
                            <span className='headerarrow'>&rarr;</span>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className='order-1 flex-grow-1'>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-block d-lg-flex text-center">
                                    <li className="nav-item px-2">
                                        <a className="nav-link fs-5 fw-bold" href="#">About us</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fs-5 fw-bold">Service</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fs-5 fw-bold">Portfolio</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fs-5 fw-bold">Blog</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link fs-5 fw-bold">Shop</a>
                                    </li>
                                </ul>
                                <div className=' order-4 text-center'>
                                    <button className='hbutton'>Let's Talk</button>
                                </div>
                            </div>
                        </div >
                    </div>
                </nav>
            </div>
        </div>

    )
}

export default AHeader
