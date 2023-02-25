import React from 'react'
import col from "../img/lop1.jpg"
import smile from "../img/smile.png"
import file from "../img/file.png"
import sta from "../img/sta.png"
import gif from "../img/gif.png"
import '../Center/Center.css'

function Center() {
  return (
    <div className='center'>
        <h1 className='center__title'>
        Home
        </h1>
        <hr />
          <ul className="center__list1">
            <li className='center__item1'>
              <img src={col} alt="rasm"  className="center__item1_img" />
              <h2 className='center__item1__title' >What’s happening</h2>
            </li>
          </ul>
          
          
          <ul className="center__list2">
            <li className='center__item2'>
                <div className="center__item2__box">
                <i class="fa fa-image center__item2__box_photos"></i>
                  <img src={gif} alt="" className='center__item2__img' />
                  <img src={sta} alt="" className='center__item2__img' />
                  <img src={smile} alt="" className='center__item2__img' />
                  <img src={file} alt="" className='center__item2__img' />
                </div>
            </li>
            <li className='center__item2'>
               <button className='center__item2__btn'>Tweet</button>
            </li>
          </ul>
          <hr />
    </div>
  )
}

export default Center