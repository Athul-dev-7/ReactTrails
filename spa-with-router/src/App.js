import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/product-detail/:productId">
                    <ProductDetails />
                </Route>
            </main>
        </div>
    );
}

export default App;
