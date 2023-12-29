import Link from 'next/link'
import React from 'react'

export default function Content() {
  return (
    <div>
        <div className='container'>
        <div>
            <div className='row '>
            <div className='col-md-5'>
                <div className='  border-start  border-2  border-primary'>
                <p className='h4 ms-5 pt-1 pb-4'>Tradition meets modernity</p>
                </div>
            </div>
            <div className='col-md-7'>
                <p className='text-muted'>We have created a comprehensive drilling fluid system in which the chemicals complement each other in such a way as to achieve the maximum possible field efficiency.
                     We have obtained these results by taking utmost care of every single ingredient.</p>
            
            <div>
                    <Link className='text-decoration-none' href='../Aboutus' >
                    ABOUT US <i class="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
                    </Link>
            </div>
            </div>
            </div>
            <div></div>
        </div>
        </div>
    </div>
  )
}
