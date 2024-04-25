import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout/Layout/Layout';
import { FeaturesBlock } from './components/FeaturesBlock/FeaturesBlock';
import { ReviewsBlock } from './components/ReviewsBlock/ReviewsBlock';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route path="features/:camperId" element={<FeaturesBlock />} />
          <Route path="reviews/:camperId" element={<ReviewsBlock />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
