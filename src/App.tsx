import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LatestPosts } from './components/LatestPosts';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LatestPosts />
    </div>
  );
};

export default App;