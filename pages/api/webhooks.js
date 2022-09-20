import Stripe from 'stripe';
import { buffer } from 'micro';
import Cors from 'micro-cors';
import { MongoClient } from "mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const URL = process.env.URL;

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const cors = Cors({
  allowMethods: ['POST', 'HEAD'],
});



const sendConfirmationEmail = async (e) => {

  try {
    const res = await fetch('https://keruproject.org/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(e),
    })

    const { error } = await res.json()

    if (error) {

 const response = await 
 fetch("https://keruproject.org/api/post_error", {
   method: "POST",
   body: JSON.stringify({email:e.email,souvenir_name:e.souvenir_name,edition:e.edition,error:error}),
   headers: 
   {
     "Content-Type": 
     "application/json",
   },
    });
      return
    }

  } catch (error) {
  //console.log(error)
  }

}

async function submitdata(enteredData) {

const response = await 
fetch("https://keruproject.org/api/post_paid", {
  method: "POST",
  body: JSON.stringify(enteredData),
  headers: 
  {
    "Content-Type": 
    "application/json",
  },
});
const data = await response.json();
//console.log(data);
}






const webhookHandler = async (req, res) => {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const signature = req.headers['stripe-signature'];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        signature,
        webhookSecret
      );
    } catch (err) {
      // On error, log and return the error message.
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event.
    console.log('✅ Success:', event.id);

    const paymentIntent = event.data.object;

    if(event.type=='payment_intent.succeeded'){
    }

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        submitdata({email: paymentIntent.receipt_email,location:paymentIntent.metadata.location,image_url:paymentIntent.metadata.image_url,edition:paymentIntent.metadata.edition}) //send to mongodb
        sendConfirmationEmail({email:paymentIntent.receipt_email,souvenir_name:paymentIntent.description,edition:paymentIntent.metadata.edition}) //send a receipt email
        console.log(`PaymentIntent status: ${paymentIntent.status}`);
        break;
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object;
        console.log(
          `❌ Payment failed: ${paymentIntent.last_payment_error?.message}`
        );
        break;
      }
      case 'charge.succeeded': {
        const charge = event.data.object;
        console.log(`Charge id: ${charge.id}`);
        break;
      }
      default: {
        console.warn(`Unhandled event type: ${event.type}`);
        break;
      }
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};

export default cors(webhookHandler);