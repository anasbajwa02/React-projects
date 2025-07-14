import React from 'react'

import Nav from '../components/nav/Nav';
import "../components/Home/home.css"
const Home = () => {
  return (
    <div className="home">
  {/* <Nav></Nav> */}

    <div className="header-content">
      <div className="header-text">Hurry, Black Friday Is Almost Here!</div>
      <div className="header-details">TIME LEFT UNTIL OUR <span>BIGGEST SALE OF THE YEAR BEGINS</span></div>

    <div className='btn'>  <button><a href="">Shop Now</a></button></div>
    </div>

    {/* old */}
      <div class="sale1">
            <div class="box">
                <div class="content">
                <div class="sl-cnt1">Up To 50% Off</div>
                <div class="sl-cnt2">GRAB YOUR FAVORITES BEFORE THEY'RE GONE</div>
                <div class="sl-cnt3">You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</div>
            </div>
            <div class="sale-btn">
                <button><a href="../shop/shop.html">SHOP NOW</a></button>
            </div>
            <div class="product-img">
            <img src="/home-images/headset.png" alt=""/>

            </div>
        </div>
        </div>
        <div class="sale2">
            <div class="content2">
                <div class="sl2-cnt1">Black Friday Exclusive</div>
                <div class="sl2-cnt2">SAVE BIG:<span>UP TO 75% OFF </span>ON HEADPHONES</div>
                <div class="sl2-cnt3">You can trust us to bring you the latest technology at 
                    unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game.</div>
            </div>
            <div class="sale2-btn">
                <button><a href="../shop/shop.html">SHOP NOW</a></button>
            </div>
            <div class="sale2-images">
                <img src="/home-images/p2.jpg" alt="pink headset" class="img1"/>
                <img src="/home-images/p1.jpg" alt="white headset" class="img2"/>
            </div>
        </div>
        <div class="product-listing">
            <div class="info">
                <div class="info1"><h2>Unbelievable Discounts Await You</h2></div>
                <div class="info2"><h2>BLACK FRIDAY MADNESS IS HERE! </h2></div>
            </div>
            <div class="shape">
                <div class="sh"></div>
            </div>
            {/* <div class="products">
                  <div class="pro">
                <div class="product1">
                    <div class="pro-img1"></div>
                    <div class="pdt-name">NEXATONE HEADSET</div>
                    <div class="price">$110.00</div>
                </div>
                <div class="product2">
                    <div class="pro-img2"></div>
                    <div class="pdt-name">ECHOPLUS SOUNDGEAR</div>
                    <div class="price">$99.00</div>
                </div>
                <div class="product3">
                    <div class="pro-img3"></div>
                    <div class="pdt-name">AUDIOSCULPT ELITE</div>
                    <div class="price">$235.00</div>
                </div>
                <div class="product4">
                    <div class="pro-img4"></div>
                    <div class="pdt-name">SONOWAVES HEADPHONES</div>
                    <div class="price">$125.00</div>
                </div>
                </div>
            </div> */}
        </div>
        <div class="sale3">
            <div class="sale3-box">
                <div class="text">
                <div class="text1"><h2>Limited-Time Offer</h2></div>
                <div class="text2"><h2>SAVE BIG: UP TO <span>60% OFF</span>  ON ALL HEADPHONES</h2></div>
                <div class="text3"><h2>ACT FAST BEFORE THEY'RE GONE
                </h2></div>
            </div>
            <div class="sale3-btn">
                <button><a href="../shop/shop.html">SHOP NOW</a></button>
            </div>
            </div>
        </div>
        <div class="note">
            <h2>We Will Provide <span>YOU</span> The <span>BEST</span> Quality!</h2>
        </div>
        <div class="girl-img">
            <div class="img-box">
            <div class="client-says"><h2>What Our Clients Say</h2></div>
            <div class="coustmer"><h2>CUSTOMER TESTIMONIALS</h2></div>
            <div class="feed-back">
                <div class="feed-back1"><p>I couldn't be happier with my Black Friday Shop experience. The deals were incredible, and the quality of the products I purchased exceeded my expectations. 
                    I was particularly impressed with the seamless shopping process and the quick, hassle-free delivery.</p>
                    <h3>James Oliver</h3>
                </div>'
                <div class="feed-back2"><p>Absolutely thrilled with my experience at this online store! The selection is fantastic, 
                    the prices are unbeatable, and the customer service is top-notch. I recently purchased a camera, and not only did it arrive quickly,
                     but the quality exceeded my expectations. Highly recommended!</p>
                     <h3>Daniel Taylor</h3>
                    </div>
            </div>
        </div>
        </div>
        <div class="sale4">
            <div class="t1"><h3>Black Friday Sale</h3></div>
            <div class="t2"><h3>SAVE BIG: UP TO <span>60% OFF</span>  ON ALL PRODUCTS</h3></div>
            <div class="t3"><p>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. 
                It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!</p>
            </div>
            <div class="sale4-btn">
                <button><a href="../shop/shop.html">SHOP NOW</a></button>
            </div>
        </div>
  </div>
  )
}

export default Home