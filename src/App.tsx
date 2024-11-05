import './App.css';

const App = () => {
  return (
    <div className="flex justify-center w-full h-screen text-ctp-text">
      <div className="flex flex-col gap-2 bg-ctp-base w-2/3">
        <h1 className="p-5 font-bold text-2xl text-center">Download YouTube Videos</h1>
        <p className="px-2">Download YouTubve videos online for free</p>
        <div className="flex flex-col px-2 w-full">
          <div className="flex flex-row w-full">
            <input
              type="text"
              id="videoUrl"
              placeholder="Paste a URL here"
              className="bg-ctp-surface0 p-2 w-full outline-none"
            />
            <button className="bg-ctp-green px-4 py-2 text-white" type="button">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
