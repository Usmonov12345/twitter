import React from 'react'
import col from "../img/lop1.jpg"
import smile from "../img/smile.png"
import file from "../img/file.png"
import sta from "../img/sta.png"
import ima from "../img/ima.png"
import gif from "../img/gif.png"
import Elli from "../img/Elli.svg"
import Ellip from "../img/Ellip.svg"
import El from "../img/El.svg"
import Vector from "../img/Vector.png"
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
              {/* <h2 className='center__item1__title' >What’s happening</h2> */}
              <input type="text" name="" id="" placeholder='What’s happening' className='center__item1__input' />
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
          
          <ul className="center_list3">
            <li className="center_item3">
              <img src={Elli} alt="" className='center_item__img3'/>
              <div className="cqrfdd">
              <h2 className="center_item3__title">
                 Designsta
                 <span className='center_item3__title_span'>
                 @inner · 25m
                 </span>
              </h2>
              <p className="center_item3__text">
              Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?
              </p>
              </div>
            </li>
          </ul >
          
          <ul className='center_list44'>
          <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-comment center_item3__text3_comments"></i> <p className="center_item3__text4">10</p> 
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-retweet"></i> <p className="center_item3__text4">1</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-heart"></i> <p className="center_item3__text4">8</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-arrow-up-from-bracket"></i> 
              </p>
            </li>
            
            <li className="center_item3">
              <p className='center_item3__text3'>
                  <img src={Vector} alt="" />
              </p>
            </li>
          </ul>
          <hr />
          <ul className="center_list3">
            <li className="center_item3">
              <img src={Ellip} alt="" className='center_item__img3'/>
              <div className="cqrfdd">
              <h2 className="center_item3__title">
              cloutexhibition
                 <span className='center_item3__title_span'>
                 @RajLahoti · 22m
                 </span>
              </h2>
              <p className="center_item3__text">
              YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.
              </p>
              </div>
            </li>
          </ul >
          
          
          
          <ul className='center_list4'>
          <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-comment center_item3__text3_comments"></i> 
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-retweet"></i> <p className="center_item3__text4">5</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-heart" style={{color:"red"}}></i> <p className="center_item3__text4" style={{color:"red"}}>9</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-arrow-up-from-bracket"></i> 
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
                  <img src={Vector} alt="" />
              </p>
            </li>
          </ul>
          <hr />
          
          
          
          
            <ul className="center_listy">
              <li className="center__itemy">
              <div className="center__itemy_card">
                  <img src={El} alt="Rasm" />
                </div>
                <div className="center__itemy_card">
                  <h2 className='center__itemy_card__title'>
                  CreativePhoto
                    <span className='center__itemy_card__title__span'>@cloutexhibition · 1h</span>
                  </h2>
                  <p className="center__itemy_card__text">
                        Обетда..... 
                        <br />
                       Кечиринглар
                  </p>
                </div>
              </li>
              <li className="center_itemy">
                <img src={ima} alt="" className='center_itemy_image' />
              </li>
            </ul>
            <ul className='center_list44'>
          <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-comment center_item3__text3_comments"></i> <p className="center_item3__text4">10</p> 
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-retweet"></i> <p className="center_item3__text4">1</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-heart"></i> <p className="center_item3__text4">8</p>
              </p>
            </li>
            <li className="center_item3">
              <p className='center_item3__text3'>
              <i class="fa fa-arrow-up-from-bracket"></i> 
              </p>
            </li>
            
            <li className="center_item3">
              <p className='center_item3__text3'>
                  <img src={Vector} alt="" />
              </p>
            </li>
          </ul>
    </div>
  )
}

export default Center
 