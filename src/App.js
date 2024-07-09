
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import s from './App.css';
import Main from './components/MainPage/Main';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
    return (
        <div className={s.wrapper}>
            <Router>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/product/:id/:slug' element={<ProductPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
