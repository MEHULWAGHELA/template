import '../Style/FNews.scss'
import React from 'react'
let array = [
    {
        image: require('../assets/image/pexels-pixabay-38631.jpg'),
        data: 'How to exercise effectively'
    },
    {
        image: require('../assets/image/pexels-andrea-piacquadio-868483.jpg'),
        data: 'Diet when exercising weight loss, science for women'
    },
    {
        image: require('../assets/image/pexels-nathan-cowley-1089164.jpg'),
        data: 'How to know enough or not?'
    }

]
function FNews() {
    return (
        <div>
            <div className="container">
                <h1 className='text-center'>Latest News</h1>
                <div className="row">
                    {array.map((x, i) => {
                        return <div className="col-12 col-md-4">
                            <div className='newsImage'>
                                <img src={x.image} className='w-100' alt="" />
                            </div>
                            <p className='py-2'>-news</p>
                            <h3>{x.data}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FNews
