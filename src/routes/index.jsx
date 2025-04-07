import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
}
