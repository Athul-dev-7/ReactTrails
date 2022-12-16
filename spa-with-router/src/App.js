import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/welcome" />}
                    />
                    <Route path="/welcome" element={<Welcome />}>
                        <Route
                            path="new-user"
                            element={<p>Welcome, new user</p>}
                        />
                    </Route>
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetails />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
