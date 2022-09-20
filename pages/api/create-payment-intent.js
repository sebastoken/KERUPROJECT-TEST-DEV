// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


const calculateOrderAmount = (items) => {
  
  return 1400;
};


export default async function handler(req, res) {
  const { items } = req.body;

  const price_1 = await stripe.prices.retrieve(
    items[0].price
  );

  const product = await stripe.products.retrieve(
    items[0].id
);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price_1.unit_amount,
    currency: "eur",
    metadata:product.metadata,
    description : product.description,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};