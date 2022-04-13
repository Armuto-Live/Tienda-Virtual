import {useState,useEffect} from 'react'

export default function GroupProducts({productos}){
    console.log(productos)
    return(
        <div>
            <div className="container">
                <div className='row mt-3'>
                    {productos.map((prod,i)=>(
                        <div className='col-6 col-lg-3'>
                            <div>
                                <img scr={prod.imagen} alt={prod.nombre} className="card-img-top"></img>
                            </div>
                            <div className='card-body'>
                                <h6 className='card-tittle'>
                                    {prod.nombre}
                                </h6>
                                <span className='fw-bold'>
                                    S/ {prod.precio}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}