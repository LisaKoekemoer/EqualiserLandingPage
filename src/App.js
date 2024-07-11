import './App.css';
import equalizerLogo from './images/logo.svg';
import rightCornerPattern from './images/bg-pattern-1.svg';
import illustration from './images/illustration-app.png'
import patternTwo from './images/bg-pattern-2.svg';
import iOS from './images/icon-apple.svg';
import android from './images/icon-android.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';

function App() {
  return (
    <div className='equalizer-page'>

        <div className='header-section'>
          <img className='logo' src={equalizerLogo} alt=''/>
          <img className='patternOne' src={rightCornerPattern} alt="" />
        </div>

        <div className='cta'>
          <h1>We make your music sound extraordinary.</h1>
          <p> A system audio equalizer specifically designed for Android and iOS.
              Freely tune the way your music sounds with a professional grade 
              parametric EQ & volume mixer. Control bass, mids, treble, 
              gain control, reverb, and more!
          </p>
        </div>

        <div className='product'>
          <img className='illustration' src={illustration} alt="" />
          <img className='patternTwo' src={patternTwo} alt="" />
          <div className='premiumEQ'>
            <div className='product-description'>
              <h1>Premium EQ</h1>
              <p>Get expert-level control with a robust equalizer, volume mixer, 
                and spatial audio. Take your listening experience to a whole new 
                level and access all our incredible features!
              </p>
            </div>
            <div className='pricing'>
              <h2>$4</h2>
              <p>/month</p>
            </div>
            <button className='btn-ios' type='submit'>
              <img className='iOS' src={iOS} alt="" />
              iOS Download
            </button>
            <button className='btn-android' type='submit'>
              <img className='android' src={android} alt="" />
              Android Download
            </button>
          </div>
        </div>

        <div className='footer'>
          <img className='footer-logo' src={equalizerLogo} alt="" />
          <div className='footerPar'>
            <p>All rights reserved © Equalizer 2021</p>
            <p>Have any problems? Contact us via social media or email 
               us at <span>equalizer@example.com</span></p>
          </div>
          <div className='social-links'>
            <img className='facebook' src={facebook} alt="" />
            <img className='instagram' src={instagram} alt="" />
            <img className='twitter' src={twitter} alt="" />
          </div>
        </div>

    </div>
  );
}

export default App;
