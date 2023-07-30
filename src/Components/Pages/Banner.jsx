import React from 'react'
import '../Style/Banner.scss'
import imageOne from '../assets/image/pexels-anush-gorak-1229356.jpg'
function Banner() {
    return ( 
        <div className="container-fluid banner g-0">
            <div className='bannerimg'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 py-5">
                            <h1 className='text-white py-5 text display-2'>TRY <br />
                                TO CHANGE
                            </h1>
                            <div><button className='btn text-white border border-1 border-white'>Shop Now</button></div>
                        </div>
                        <div className="col-12 col-md-6 g-0 d-none d-md-block">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
