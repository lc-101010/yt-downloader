import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="bg-red-200">
        <h1 className="text-ctp-mauve">Rsbuild with React</h1>
        <p className="dark:text-ctp-red">
          Start building amazing things with Rsbuild.
        </p>
      </div>
    </div>
  );
};

export default App;
