import MyNewsletterDialog from "./partials/mynewsletterdialog";
import { Button } from "./ui/button";

export default function MyFooter() {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="grid grid-cols-12 mx-10 lg:mx-64 text-white gap-2">
        <div className="col-span-12 md:col-span-2">
          <p className="font-semibold pb-2">MY STORE</p>
          <ul>
            <li>
              <div>
                <a href="/about/">ABOUT US</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/store-locator/">RE-SELLERS</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/press/">PRESS</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/career/">CAREER</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/sustainability/">SUSTAINABILITY</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/faq/">FAQ</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/faq/">FAQ BRIDAL</a>
              </div>
            </li>
            <li>
              <div>
                <button type="button">Cookie</button>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <p className="font-semibold pb-2">CLIENT RELATIONS</p>
          <ul>
            <li>
              <div>
                <a href="/contact/">CONTACT US</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/returns/">EXCHANGES &amp; RETURNS</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/bridal-booking/">BOOK BRIDAL FITTING</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/shipping-returns/">SHIPPING METHODS</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/size-guide/">SIZE GUIDE</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/terms-and-conditions/">TERMS &amp; CONDITIONS</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/terms-and-conditions/">PRIVACY POLICY</a>
              </div>
            </li>
            <li>
              <div>
                <a href="/gift/">GIFT CARD</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-5">
          <p className="font-semibold pb-2">CONTACT US</p>
          <ul>
            <li>
              CUSTOMER SERVICE WEEKDAYS 9-17{" "}
              <a href="mailto: INFO@MYSTORE.COM">INFO@MYSTORE.COM</a> OR CALL +
              46732347760 . CLOSED FOR LUNCH 12-13 CET
            </li>
            <li>
              MY STORE FLAGSHIP STORE HUMLEGÅRDSGATAN 14, 114 46 STOCKHOLM,
              SWEDEN OR CALL +46 708124598. OPENING HOURS MON-FRI 10-18 SAT
              11-18 SUN CLOSED
            </li>
            <li>
              MY STORE BRIDAL SHOWROOM
              <br />
              BRUNNSGATAN 21, 111 38 STOCKHOLM, SWEDEN. CALL +46 729837523
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <p className="font-semibold pb-2">NEWSLETTER SIGNUP</p>
          <MyNewsletterDialog />
        </div>
      </div>
    </footer>
  );
}
