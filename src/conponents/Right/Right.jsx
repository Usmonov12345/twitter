import React from 'react'
import '../Right/Right.css'
import pol1 from '.././img/pol1.png'
import pol2 from '.././img/pol2.png'
function Right() {
  return (
    <div className='right'>
        <div className="right_inCard">
       <i class="fa fa-magnifying-glass right_inCard_lupa"></i> <input type="text" placeholder='Search Twitter' className='right_inCard_input' />
        </div>
        <div className="right_boxd">
   <ul className="right_list">
        <li className="right_item">
          <div className="right_item_card1">
            <h2 className='right_item_card1_title1'>Trends for you</h2>
          </div>
          <div className="right_item_card2">
          <i class="fa-solid fa-gear"></i>
          </div>
        </li>
        
        
        <li className="right_item">
        <div className="right_item_card1">
          <p className="right_item_card1__text">
          Trending in Germany
          </p>
          <h4 className='right_item_card1_title'>
          Revolution
          </h4>
          <p className='right_item_card1__text'>50.4K Tweets</p>
        </div>
          <div className="right_item_card2">
          <i class="fa-solid fa-ellipsis"></i>
          </div>
        </li>
        
        
        <li className="right_item">
        <div className="right_item_card1">
          <p className="right_item_card1__text">
          Trending in Germany
          </p>
          <h4 className='right_item_card1_title'>
          Revolution
          </h4>
          <p className='right_item_card1__text'>50.4K Tweets</p>
        </div>
          <div className="right_item_card2">
          <i class="fa-solid fa-ellipsis"></i>
          </div>
        </li>
        
        
        <li className="right_item">
        <div className="right_item_card1">
          <p className="right_item_card1__text">
          Trending in Germany
          </p>
          <h4 className='right_item_card1_title'>
          Revolution
          </h4>
          <p className='right_item_card1__text'>50.4K Tweets</p>
        </div>
          <div className="right_item_card2">
          <i class="fa-solid fa-ellipsis"></i>
          </div>
        </li>
        
        
        <li className="right_item">
        <div className="right_item_card1">
          <p className="right_item_card1__text">
          Trending in Germany
          </p>
          <h4 className='right_item_card1_title'>
          Revolution
          </h4>
          <p className='right_item_card1__text'>50.4K Tweets</p>
        </div>
          <div className="right_item_card2">
          <i class="fa-solid fa-ellipsis"></i>
          </div>
        </li>
        
        
      </ul>
        </div>
        
        <div className="right_bottom">
          <div className="right_bottom_card">
           <div className="right_bottom_card_boz">
              <img src={pol1} alt="" />
              <div className="right_bottom_card_boz_box">
                <h3 className="right_bottom_card_boz_box__title">
                   Mushtariy
                </h3>
                <p className="right_bottom_card_boz_box__text">
                @Mushtar565266
                </p>
              </div>
              <button className='right_bottom_card_boz_btn'>Follow</button>
            </div> 
          </div>
          <div className="right_bottom_card_boz">
              <img src={pol2} alt="" />
              <div className="right_bottom_card_boz_box">
                <h3 className="right_bottom_card_boz_box__title">
                Shuhratbek
                </h3>
                <p className="right_bottom_card_boz_box__text">
                @@mrshukhrat
                </p>
              </div>
              <button className='right_bottom_card_boz_btn'>Follow</button>
            </div>
            <p className='right_bottom_card_text'>Show more</p>
        </div>
    </div>
  )
}

export default Right