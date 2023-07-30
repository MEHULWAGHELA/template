
import '../Style/DStaff.scss'
import imageFour from '../assets/image/pro8.jpg'
import imageFive from '../assets/image/pro54.jpg'
import imageSix from '../assets/image/sp3.jpg'
import imageSeven from '../assets/image/pro44.jpg'
import imageEight from '../assets/image/sp6.jpg'
import imageNine from '../assets/image/pro61.jpg'
import { Fragment } from 'react'

const array = [
    {
        image: imageFour,
        title: 'Treadmill Running Machine',
        price: '$365.00'
    },
    {
        image: imageFive,
        title: 'Sugar Hill Bra',
        price: '$180.00'
    },
    {
        image: imageSix,
        title: 'Sneaker',
        price: '$432.00'
    },
    {
        image: imageSeven,
        title: 'Rib Seamless Leggins',
        price: '$125.00'
    },
    {
        image: imageEight,
        title: 'Push Up Bar',
        price: '$325.00'
    },
    {
        image: imageNine,
        title: 'Pro Boardshorts',
        price: '$29.00',
    }
]
function StaffImage() {
    return (
        <Fragment>
            {array.map((x, i) => {
                return (
                    <div className="col-12 col-sm-6 col-md-4" key={i}>
                        <div>
                            <div className='staffImage'>
                                <img src={x.image} className='w-100' alt="" />
                            </div>
                            <h4>{x.title} </h4>
                            <h2>{x.price}</h2>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    )
}
function DStaff() {
    return (
        <div className="container">
            <div className='py-5'>
                <h1 className='text-center grey'>Staff.Pick</h1>
                <div className="row">
                    <StaffImage />
                </div>
            </div>
        </div>
    )
}

export default DStaff
