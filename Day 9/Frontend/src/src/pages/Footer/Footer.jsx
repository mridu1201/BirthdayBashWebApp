import React from 'react'

import './Footer.css';

function Footer() {
  return (
    <div><div>
    <title>Footer Design</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>HELLO,HERE TO HELP</h4>
            <ul>
              <li><a href="/contact">contact</a></li>
              <li><a href="#">order tracking</a></li>
              <li><a href="/feedback">Feedback</a></li>
              <li><a href="/faq">faqs</a></li>
              <li><a href="/terms">terms & conditions</a></li>
              <li><a href="/privacy">privacy & policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>GET TO KNOW US!</h4>
            <ul>
              <li><a href="#">about</a></li>
              <li><a href="#">blogs</a></li>
              <li><a href="#">gifts</a></li>
              <li><a href="#">partnerships</a></li>
              <li><a href="#">programme</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>YOUR GIFTS</h4>
            <ul>
              <li><a href="#">flowers</a></li>
              <li><a href="#">chocolates</a></li>
              <li><a href="#">cakes</a></li>
              <li><a href="#">plants</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>LET'S BE SOCIAL</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
  )
}

export default Footer

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="ct-footer">
//       <div className="container">
//   <div className="row" style={{display:"flex"}}>
//   <div className="col-md-12">
//   <h2 className="ct-newsletter__heading" style={{ fontFamily: "serif", fontWeight: "normal", fontSize: "24px", color: "#000" }}>
//     <span><small style={{ color: "#fff" }}>.Stay Tuned</small> Sign up <span style={{ color: "#fff" }}>now to our newsletter</span></span>
//   </h2>
// </div>


//     <div className="col-md-12">
//       <p className="ct-newsletter__content">
//         Sign up now and get news about updates, contests, events and so on without being spammed...
//       </p>
//     </div>
//     <div className="col-md-12">
//       <form className="ct-newsletter__form form-group from-inline">
//         <label htmlFor="newsletter-input" className="ct-newsletter__label">E-mail Address</label>
//         <input type="email" id="newsletter-input" placeholder="Enter your E-mail" required className="ct-newsletter__input form-control" />
//         <button type="submit" className="btn btn-default ct-newsletter__button">
//           <span className="ct-newsletter__submit">Subscribe</span>
//           <span className="ct-newsletter__wait"><i className="fa fa-spinner"></i></span>
//         </button>
//         <span className="ct-newsletter__subscribed">Thank you for subscribing</span>
//       </form>
//     </div>
//   </div>
// </div>

// <div className="container">
//   <div className="row" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
//     <div className="col-md-4">
//       <div className="widget">
//         <div className="widget-inner">
//           <h1 className="widget-title">More About Us</h1>
//           <img src="assets/images/demo-content/logo.png" alt="logo" className="ct-footer__logo" />
//           <p>
//             As it so contrasted oh estimating instrument. Size like body some one had.
//             Conduct viewing boy minutes warrant expense.
//           </p>
//           <div className="address-info">
//             <p>9870 St Vincent Place, Glasgow, DC 45 Fr 45.</p>
//             <p>Email: contact@myconfetti.com</p>
//             <p>Phone: (012) 345-6789</p>
//             <p>Owner: John Doe</p>
//           </div>
//         </div>
//       </div>
//     </div>

//           <div className="col-md-4">
//             <div className="widget widget_recent_entries">
//               <div className="widget-inner">
//                 <h4 className="widget-title">Recent Posts</h4>
//                 <div className="post">
//                   <img src="https://www.bing.com/th?id=OIP.boli1asQ-zOV7abDrqpu0QHaE8&pid=3.1&cb=&w=300&h=300&p=0" alt="post" className="post-image" />
//                   <div className="post-content">
//                     <h5>Title Comes Here</h5>
//                     <p>By an outlived insisted procured improved am. Paid hill fine ten now love even leaf.</p>
//                     <a href="#">August 21, 2015</a>
//                   </div>
//                 </div>
//                 <div className="post">
//                   <img src="https://www.bing.com/th?id=OIP.iNzauFZHHr5hScHRXzsQJQHaFe&w=142&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="post" className="post-image" />
//                   <div className="post-content">
//                     <h5>Title Comes Here</h5>
//                     <p>To make this treat, you will need to lorem ipsum</p>
//                     <a href="#">August 21, 2015</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4">
//             <div className="widget widget_flickr">
//               <div className="widget-inner">
//                 <h4 className="widget-title">Flickr Gallery</h4>
//                 <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=9&amp;display=random&amp;size=s&amp;layout=x&amp;source=group&amp;group=1035848@N23"></script>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//       <div className="ct-footer__copyright">
//         <span>© My Confetti Event Planning 2024</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
