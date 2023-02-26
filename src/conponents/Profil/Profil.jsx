import React from 'react'
import '../Profil/Profil.css'
import Lop from '../img/lop1.jpg'
import bol from '../img/boll.svg'
function Profil() {

  return (
    <div className='profil'>
      <h1 className='profil__title'>Usmonov_0_4</h1>
      <p className='profil__text'>1,070 Tweets</p>
      <ul className="profil__list1">
        <li className="profil__item1">
            <img src={Lop} alt="rasm"  className="profil__item1__img" />
        </li>
        <li className="profil__item1">
          <button className='profil__item1__btn'>Edit profile</button>
        </li>
      </ul>
        <ul className="profil__list2">
          <li className="profil__item2">
            <h2 className='profil__item2__title1'>Usmonov</h2>
            <p className="profil__item2__text1">
              usmonov_0_4
            </p>
            <h3 className='profil__item2__title2'>
            UX&UI designer at
            <span className="profil__item2__title2__span">
            @abutechuz
            </span>
            </h3>
          </li>
          
          <li className="profil__item3">
            <p className="profil__item3__text4"> 
            <i class="fa fa-location-dot"></i>
            Mashag’daman
            </p>
            <p className="profil__item3__text4-1">
            <i class="fa fa-link"></i>
            t.me/toxir_usmonov
            </p>
            <p className="profil__item3__text4">
            <img src={bol} alt="" />
            Born November 21, 2004
            </p>
            <p className="profil__item3__text4">
            <i class="fa fa-calendar-days"></i>
            Joined May 2020
            </p>
          </li>
          <li className="profil__item4">
            <p className='profil__item4__text1'> 67 <span className='profil__item4__sapn' id='sapn1'>Following</span> </p>
            <p className='profil__item4__text1'> 47  <span className='profil__item4__sapn' id='sapn2'>Followers</span></p>
            </li>
            
            <li className="profil__item5">
              <p className='profil__item5__title'>Tweets</p>
              <p className='profil__item5__title'>Tweets & replies</p>
              <p className='profil__item5__title'>Media</p>
              <p className='profil__item5__title'>Likes</p>
            </li>
        </ul>
        <hr />
    </div>
  )
}

export default Profil