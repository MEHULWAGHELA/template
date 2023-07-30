import '../Style/ESale.scss'
import React from 'react'
import imageTen from '../assets/image/pexels-andrea-piacquadio-863977.jpg'
function ESale() {
    return (
        <div className='sale container-fluid my-5 g-0'>
            <div className="container-fluid saleOne py-5 g-0">
                <div className="container py-5">
                    <div className="row my-5">
                        <div className="col-12 col-md-7">
                            <div>
                                <img src={imageTen} className="w-100 rounded-3" alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className='Esalebottom'>
                                <h2 className='text-white'>Accessories Sale</h2>
                                <h3 className='text-white py-1'>Shop Now </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ESale
