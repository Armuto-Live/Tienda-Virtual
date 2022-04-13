import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'



export default function GroupProducts({productos}){
    console.log(productos)

    return(
        <div>
            <div className="container">
                <div className='row mt-3'>
                    
                    {productos.map((prod,i)=>(
                        <div className='col-6 col-lg-3' key={i}>
                            <Link className='card mb-4' to={`/detalle/${prod.id}`}>
                                <div>
                                    <img src={prod.imagen} 
                                        alt={prod.imagen} 
                                        className="card-img-top"></img>
                                </div>
                            </Link>
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