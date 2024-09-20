// src/redux-persist.d.ts or types/redux-persist.d.ts
declare module 'redux-persist/es/persistStore' {
    import { Persistor } from 'redux-persist';
    import { Store } from 'redux';
  
    export default function persistStore(store: Store): Persistor;
  }