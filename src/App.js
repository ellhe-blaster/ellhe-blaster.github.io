import React from 'react'
import './App.css'

export default function App() {
  return (
    <>
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="/">
            Main
          </a>
        </div>
      </div>
    </header>

    <main className="main">
      <section className="section-block1">
        <div className="block1">
          <div className="container"> 
            <div className="block1__body">
              <div className="block1__item">
                <div className="face1">
                  <div className="circle1">
                    <div className="indicator1"></div>
                  </div> 
                  <div className="circle1" style={{marginLeft:" 5px"}}>
                    <div className="indicator1"></div>
                  </div>
                </div>
                <div className="face1 face2">
                  <div className="circle1">
                    <div className="indicator2"></div>
                  </div>
                  <div className="circle1" style={{marginLeft:" 2px"}}>
                    <div className="indicator2"></div>
                  </div>
                </div>
                <div className="face1 face3">
                  <div className="circle1">
                    <div className="indicator3"></div>
                  </div>
                  <div className="circle1" style={{marginLeft:" 1px"}}>
                    <div className="indicator3"></div>
                  </div>
                </div>
              </div>
              <div className="block1__item">
                <h1 className="block1__title">ellhe-blaster</h1>
                <span className="block1__sub-title"> full-stack developer </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="section-block-form">
        <div className="block-form">
          <div className="block-form__img1"></div>
          <div className="container">
            <div className="block-form__body">
              <div className="block-form__item">
                <h2 className="block-form__title">
                  drop us a line to get what you need
                </h2>
              </div>
              <div className="block-form__item">
                <div className="block-form__img2">
                  <div className="face">
                    <div className="circle">
                      <div className="indicator"></div>
                    </div>
                    <div className="circle" style={{marginLeft:" 5px"}}>
                      <div className="indicator"></div>
                    </div>
                  </div>
                </div>

                <form className="form"> 
                  <p className="block-form__descr">all fields are required</p>
                  <input
                    id="Name"
                    type="text"
                    className="form__input"
                    name="entry.1454992494"
                    placeholder="your name"
                    required
                  />
                  <input
                    id="Mail"
                    type="email"
                    className="form__input"
                    name="entry.12738361"
                    placeholder="example@mail.com"
                    required
                  />
                  <input
                    id="Phone"
                    type="text"
                    className="form__input js-phone-input"
                    name="entry.665628659"
                    placeholder="phone number"
                    required
                    minlength="4"
                    maxlength="20"
                  />
                  <textarea
                    id="Quession"
                    name="entry.991843766"
                    className="form__textarea"
                    placeholder="your issue"
                    required
                            ></textarea>
                   <input type="submit" value="send" className="btn"></input> 
                   
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="block-form__popup">
          <div className="block-form__popup-inner">
            <button className="block-form__popup-close js-close-button"></button>
            <p className="block-form__popup-inner-text">Thanks for the inquiry!<br/>We will contact you soon</p>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__item">
            <a href="mailto:danielprisco09@gmail.com" className="footer__a">
              <div className="icons8-gmail-logo"></div> 
            </a> 
            
            <a href="https://github.com/ellhe-blaster" className="footer__a">
              <div className="icons8-github"></div>
              <span className="footer__a-span"></span>
            </a>
            
            <a href="https://discord.gg/GxApMgES"  >
              <div className="icons8-discord"></div>  
            </a>
            
            <a href="https://twitter.com/NyuhtHzagok" className="footer__b">
              <div className="icons8-twitter"></div> 
            </a>
            
          </div>
            
          <div className="footer__item">
            
            <p className="footer__p">@2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer> 
  </>
  )
}
