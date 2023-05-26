import { ToastContainer } from 'react-toastify';

import CartContextProvider from "./Components/Context/CartContext";
import Router from './Components/Router/Router';


function App() {




  return (
    <>

            <CartContextProvider>
            <ToastContainer  position="bottom-center"  autoClose={3000}  theme="colored" />
            <Router/>
            </CartContextProvider>

    </>
  );
}
export default App;
