import OtherComponent from "./component/OtherComponent";
import { useCounterStore } from "./Store";
import { useEffect } from "react";


const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
}


const setCount = () => {
  useCounterStore.setState({count: 10});
}

const App = () => {
  const count= useCounterStore((state) => state.count);

  useEffect(() => {
    setCount(); 
  }, []);

  useEffect(() => {
    logCount();
  }, []);
  
  return (
      <div>
        <OtherComponent count={count}/>
    </div>
  );
};

export default App;