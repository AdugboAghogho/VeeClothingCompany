import React from 'react'
import './Brand.css'
import { brands } from '@/constants/data'
import Image from 'next/image'

const Brand = () => {
  return (
    <div>
      <div className='body'>
        <ul className="accordion">
          <li>
            <img src="img1.jpg" />
            <div className="content">
              <span>
                <h2>Carmen Rios</h2>
                <p>Frontend</p>
              </span>
            </div>
          </li>
          {brands.map((brand) => (
                <li className="box big">
                <Image 
                    src={brand.imgUrl} 
                    alt={brand.title}
                    width={130}
                    height={50}
                />
                    
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Brand
