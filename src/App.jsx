import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

const App = () => {
  return (
    <div className='bg-gray-200 pt-10 text-center w-full h-screen'>
      <SaveButton />
      <StatusBar />
    </div>
  );
};

export default App;
