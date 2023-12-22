"use client"
import { ReactNode } from "react";
import { CartProvider as Provider } from "use-shopping-cart";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="localhost:3000/success"
      cancelUrl="localhost:3000/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </Provider>
  );
};

export default Providers;
