'use client'
// import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import store, { persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AURA</title>
      </head>
      <body >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
