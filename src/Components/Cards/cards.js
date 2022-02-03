import React from 'react'
import style from './Cards/Card.module.scss';

const Cards = ({ results }) => {
    let display;
    console.log(results);

    if (results) {
        display = results.map((x) => {
            let { id, name, image, location, status } = x;
            return (
                <div key={id} className="col-4 position-relative">
                    <div className=''>
                        <img src={image} alt='' className='img-fluid' />
                        <div className='content'>
                            <div className='fs-4 fw-bold mb-4'>{name}</div>
                            <div className=''>
                                <div className='fs-6'>Last Location</div>
                                <div className='fw-bold fs-5'>{location.name}</div>
                            </div>
                        </div>
                   </div>
                   <div className='position-absolute badge bg-danger'>{status}</div>
                </div>
            );
        });
    } else {
        display = "No characters found :/"
    }
    return (
        <div>
            {display}
        </div>
    )
}

export default Cards
