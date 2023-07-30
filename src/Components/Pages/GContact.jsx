import React from 'react'

function GContact() {
    return (
        <div className='container-fluid my-5'>
            <div className="row">
                <div className="col-12 col-md-6 my-2 pb-2">
                    <div>
                        <img src={require('../assets/image/pexels-andrea-piacquadio-863977.jpg')} className='w-100' alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className='my-2'>
                                <img src={require('../assets/image/pexels-nathan-cowley-1089164.jpg')} className='w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../assets/image/pexels-pixabay-416754.jpg')} className='w-100' alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className='my-2'>
                                <img src={require('../assets/image/pexels-li-sun-2294352.jpg')} className='w-100' alt="" />
                            </div>
                            <div>
                                <img src={require('../assets/image/pexels-pixabay-38631.jpg')} className='w-100' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center pt-5'>© Copyright 2025 Mobirise - All Rights Reserved</p>
        </div>
    )
}

export default GContact
