import React from 'react'
import Nav from '../components/nav/Nav'
import "../components/About/about.css";
const About = () => {
  return (
    <>
    <div className="container">
        <div className="talk-about">
          <div className="lets-talk">
                    <h2>A Few Words</h2>
                </div>
                <div className="shop">
                    <h2>ABOUT US</h2>
                </div>   
                </div>
                <div className="body">
        <div className="group-img">
            <div className="img-box"></div>
        </div>
        <div className="our-details">
            <div className="our-story">
                <div className="st1">Our Story</div>
                <div className="st2">OUR STORY IS ONE OF <span>PASSION, PERSEVERANCE, AND COMMITMENT</span></div>
            </div>
            <div className="our-journey">
                <div className="jr1">OUR JOURNEY BEGAN WHEN A GROUP OF DEDICATED INDIVIDUALS, 
                    FUELED BY A SHARED LOVE FOR EXCEPTIONAL DEALS AND UNMATCHED SAVINGS, CAME 
                    TOGETHER TO CREATE A SHOPPING EXPERIENCE LIKE NO OTHER</div>
                    <div className="jr2">
                        <p>Founded in 2008, BlackFridayShop set out with a simple mission – to make Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips. Over the years, we've dedicated ourselves to curating the finest selection 
                            of products, from electronics and fashion to home essentials and more, all with one goal in mind: providing you with the ultimate shopping experience.</p><br/>
                            <p>What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the finest products, establishing partnerships with trusted brands that share our commitment to excellence. This dedication ensures
                                 that every item you find at BlackFridayShop meets the highest standards of quality.</p>
                    </div>
            </div>
        </div>
        <div className="our-goal">
            <div className="goal-img">
                <h2>BOUNDLESS LOVE FOR SAVING
                </h2>
                <div className="gol1">
                    <h3>We've Scoured The Market For The Finest Products, Establishing Partnerships With Trusted Brands That Share Our Commitment To Excellence!
                    </h3>
                </div>
           
            </div>
            
        </div>
        <div className="our-values">
            <div className="valu-text">
                <div className="vlt1"><h2>Our Values</h2></div>
                <div className="vlt2"><h2>OUR VALUES ARE AT THE HEART OF EVERYTHING WE DO</h2></div>
                <div className="vlt3"><p>Our values are the foundation upon which BlackFridayShop is built. They’re not just words on a page; they’re the principles that drive our everyday actions and decisions.
                     We are dedicated to upholding these values and ensuring that they shine through in every aspect of your experience with us.</p><br/>
                     <p>Thank you for choosing BlackFridayShop, where our values meet your expectations.</p>
                    </div>
            </div>
            <div className="valu-img">
                <div className="img-box"></div>
            </div>
        </div>
        <div className="why-us">
            <div className="text-por">
                <div className="wtxt1"><h2>Why Choose BlackFridayShop?</h2></div>
                <div className="wtxt2"><h2>THE JOY OF SHOPPING AT ITS BEST
                </h2></div>
                <div className="text-por-sh"></div>
            </div>
            <div className="icon-por">
                <div className="icons-part1">
                <div className="icon1">
                    <div className="icn"><i className="las la-truck"></i></div>
                    <div className="icn-nm"><h2>FREE SHIPPING
                    </h2></div>
                    <div className="icn-dtl"><h3>Enjoy the treat of free shipping on all your Halloween must-haves
                    </h3></div>
                </div>
                <div className="icon2">
                    <div className="icn"><i className="las la-lock"></i></div>
                    <div className="icn-nm"><h2>SECURE PAYMENTS
                    </h2></div>
                    <div className="icn-dtl"><h3>Shop with confidence knowing that your payments are securely processed for a worry-free Halloween experience
                    </h3></div>
                </div>
            </div>
            <div className="icons-part2">
                <div className="icon3">
                    <div className="icn"><i className="las la-map-marker"></i></div>
                    <div className="icn-nm"><h2>ORDER TRACKING
                    </h2></div>
                    <div className="icn-dtl"><h3>Stay in the know with real-time order tracking to ensure your Halloween treasures arrive right on time
                    </h3></div>
                </div>
                <div className="icon4">
                    <div className="icn"><i className="las la-undo-alt"></i></div>
                    <div className="icn-nm"><h2>EASY RETURNS
                    </h2></div>
                    <div className="icn-dtl"><h3>Celebrate worry-free shopping with our hassle-free returns – because we're here to make your Black Friday experience as smooth as possible
                    </h3></div>
                </div>
            </div>
            </div>
        </div>
        <div className="sale">
            <div className="sl1">
                <h2>Black Friday Sale
                </h2>
            </div>
            <div className="sl2">
                <h2>SAVE BIG: UP TO <span>60% OFF</span>  ON ALL PRODUCTS
                </h2>
            </div>
            <div className="sl3">
                <p>Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your 
                    experience, so seize the moment and start shopping now!</p>
            </div>
            <div className="btn2">
                <button><a href="../shop/shop.html">SHOP NOW</a></button>
    
            </div>
        </div>
    </div>

   </div>
    </>
  )
}

export default About;