import Routes from "./routes"
import { BrowserRouter } from 'react-router-dom';
import AuthState from "../src/context/auth/authState"
import CartState from "../src/context/carItems/cartState"
import PaymentDetailState from "../src/context/paymentDetail/paymentDetailState"
import ThemeProvider from './components/theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthState>
          <CartState>
            <PaymentDetailState>
              <Routes />
            </PaymentDetailState>
          </CartState>
        </AuthState>
      </ThemeProvider>
    </BrowserRouter>
  );
}