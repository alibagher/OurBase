import React from 'react';
import {StyleSheet} from 'react-native';
import HTMLView from 'react-native-htmlview';

export default class Html extends React.Component {
  render() {
    const htmlContent = '<!DOCTYPE HTML><html> <head> <title>Purchase</title> <link href="./static/style.css" rel="stylesheet"> <script src="./static/lib.js"></script> <script src="./static/script.js"></script> <script src="https://js.stripe.com/v3/"></script> <script src="https://checkout.stripe.com/checkout.js"></script> <script> var GLOBALS = { SERVICE_PATH: "willwang.stripe-store[@dev]", STRIPE_PUBLISHABLE_KEY: "pk_test_RH7ysFucp4nCzNylyIygfuUY" }; var stripe = Stripe(GLOBALS.STRIPE_PUBLISHABLE_KEY); var stripeHandler = StripeCheckout.configure({ key: GLOBALS.STRIPE_PUBLISHABLE_KEY, image: "./static/images/stdlib-logo.png", locale: "auto" }); </script> </head> <body> <div class="stripe"> <div class="modal" name="loading"> <div class="dialog"> <div class="header"> <div class="name"> Placing Order... </div> </div> <div class="order-complete"> Your order is being placed, please be patient... <div class="animation"> <div class="loader"></div> </div> </div> </div></div><div class="modal" name="complete"> <div class="dialog"> <div class="header"> <div class="name"> Thank You! </div> </div> <div class="order-complete"> Thank you for ordering <span name="product-name"></span>!<br><br> Your order has been placed. We appreciate your business, feel free to check out more items! </div> <div class="order-complete-actions"> <button class="button">Okay!</button> </div> </div></div> <div class="nav"> <!-- <div class="links"> <a href="https://dashboard.stripe.com/dashboard" target="_blank">Stripe Dashboard</a> <a href="https://stdlib.com" target="_blank">StdLib</a> </div> --> <!-- <div class="company"> <a href="https://stdlib.com" class="no-change" target="_blank"> <img class="logo" src="./static/images/stdlib-logo-wordmark-light.svg"> </a> <a href="https://stripe.com" class="no-change" target="_blank"> <img class="powered" src="./static/images/powered-by-stripe.svg"> </a> </div> --> <div class="about"> <div class="title"> Purchase a card </div> <div class="description"> Issuing a new card using Stripe is a two-step process: <br>1. Create a cardholder with some information about them <br>2. Create a card for the cardholder <br>Issued cards must be activated before they can be used to make purchases. </div> </div> </div> <div class="storefront"> <div class="product" data-id="prod_DUIyOBKPOoHzOF" data-name="Bronze Card" data-description="Exclusively for OurBase members Earn up to 1% on all purchases!" data-shippable="1"> <div class="header"> <div class="name"> Bronze Card </div> </div> <div class="info"> <div class="image" style="background-image: url("https://www.colourbox.com/preview/10757821-luxury-bronze-member-card.jpg");" data-default="https://www.colourbox.com/preview/10757821-luxury-bronze-member-card.jpg"> </div> <div class="price"></div> <div class="description"> Exclusively for OurBase members Earn up to 1% on all purchases! </div> </div> <div class="footer"> <div> <select class="sku" name="sku"> <option value="sku_DUIyGQ7l4JY4kK,599," > , $5.99 </option> </select> </div> <div> <button class="button" name="order"> Place Order </button> </div> </div></div> <div class="product" data-id="prod_DUIySpsZOldwR9" data-name="Silver Card" data-description="Exclusively for OurBase members Earn 2% cash back at restaurants and 1% on all other purchases!" data-shippable="1"> <div class="header"> <div class="name"> Silver Card </div> </div> <div class="info"> <div class="image" style="background-image: url("https://previews.123rf.com/images/liliwhite/liliwhite1408/liliwhite140800003/30543798-silver-member-card.jpg");" data-default="https://previews.123rf.com/images/liliwhite/liliwhite1408/liliwhite140800003/30543798-silver-member-card.jpg"> </div> <div class="price"></div> <div class="description"> Exclusively for OurBase members Earn 2% cash back at restaurants and 1% on all other purchases! </div> </div> <div class="footer"> <div> <select class="sku" name="sku"> <option value="sku_DUIyzLvwgCSuaU,799," > , $7.99 </option> </select> </div> <div> <button class="button" name="order"> Place Order </button> </div> </div></div> <div class="product" data-id="prod_DUIyqziMKNXH9h" data-name="Gold Card" data-description="Exclusively for OurBase members Earn 3% cash back at restaurants, 2% on gas and up to 1% on all other purchases!" data-shippable="1"> <div class="header"> <div class="name"> Gold Card </div> </div> <div class="info"> <div class="image" style="background-image: url("https://www.colourbox.com/preview/10757839-gold-member-card.jpg");" data-default="https://www.colourbox.com/preview/10757839-gold-member-card.jpg"> </div> <div class="price"></div> <div class="description"> Exclusively for OurBase members Earn 3% cash back at restaurants, 2% on gas and up to 1% on all other purchases! </div> </div> <div class="footer"> <div> <select class="sku" name="sku"> <option value="sku_DUIyEhYW1icdew,1199," > , $11.99 </option> </select> </div> <div> <button class="button" name="order"> Place Order </button> </div> </div></div> </div> <div class="end"> <div class="by"> This store is powered by <a href="https://stripe.com/" target="_blank">Stripe</a> and brought to you by <a href="https://stdlib.com" target="_blank">StdLib</a>. </div> <div class="tm"> The Stripe name and logos are trademarks or service marks of Stripe, Inc. or its affiliates in the U.S. and other countries. Other names may be trademarks of their respective owners. </div> </div> </div> </body></html>';

    return (
      <HTMLView
        value={htmlContent}
        stylesheet={styles}
      />
    );
  }
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});