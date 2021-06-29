import React from 'react'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                  <img src="/images/googleLogo.png" alt="Logo"/>
                </div>
                <form className="home__form">
                    <div className="home__group">
                       <input type="text" className="home__input"/>
                       <div className="home__group">
                         <input type="submit" value="Google Search"/>
                       </div>
                    </div>
                </form>
            </div>  
        </div>
    )
}
