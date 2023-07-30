import '../Style/CFashion.scss'
import React from 'react'
import imageTwo from '../assets/image/pexels-li-sun-2475878.jpg'
import imageThree from '../assets/image/pexels-mister-mister-3490348.jpg'
function ImageArray(props) {
    console.log("image", props.image)
    return (
        <div className="col-12 col-md-6">
            <div className='fashionImage'><img src={props.image} className='w-100' alt="" /></div>
            <h1 className='text-center' style={{ color: `${props.color}` }}>{props.data}</h1>
        </div>
    )
}
function CFashion() {
    return (
        <div>
            <div className="container text-center py-5">
                <h1>Gym Fashion</h1>
                <p className='fw-bold fs-5'>Just For You</p>
            </div>
            <div className="container">
                <div className="row">
                    <ImageArray image={imageTwo} data={'Women Fashion'} color={'#0057fc'} />
                    <ImageArray image={imageThree} data={'Men Fashion'} />
                </div>
            </div>
        </div>
    )
}

export default CFashion
