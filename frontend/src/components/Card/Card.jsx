import React, { useEffect, useState } from 'react'
import "./Card.scss"
import axios from 'axios'

const Card = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(res => {
                setData(res.data);
            })
    }, [])

    return (

        <>
            {data ? data.map(elem => {
                return (
                    <div className="col-4">
                        <div className='card'>
                            <div className="cardBody">
                                <div className="cardBodyImg">
                                    <img src={elem.image} alt="" />
                                </div>

                                <div className="cardInfo">
                                    <h3>{elem.title}</h3>
                                    <p>{elem.price}</p>
                                    <button onClick={() => {

                                    }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }) : ''}
        </>
    )
}

export default Card