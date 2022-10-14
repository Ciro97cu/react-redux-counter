import Button from "./components/Button";

import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./redux/counter-slice";
import { Fragment, useRef } from "react";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const inputValue = useRef();

  const addOneHandler = () => {
    dispatch(counterActions.addOne());
  };

  const removeOneHandler = () => {
    dispatch(counterActions.removeOne());
  };

  const addValueToCounterHandler = () => {
    const enteredValue = inputValue.current.value;

    if (enteredValue < 1) {
      alert("Il valore inserito non può essere inferiore ad 1");
      return;
    } else if (enteredValue > 100) {
      alert("Il valore inserito non può essere maggiore di 100");
      return;
    }

    dispatch(counterActions.addCustomValue(enteredValue));

    inputValue.current.value = "";
  };

  return (
    <Fragment>
      <h1 className={classes.title}>REACT REDUX COUNTER</h1>
      <div className={classes.app}>
        <div>
          <Button onClick={addOneHandler} type="button">
            +1
          </Button>
          <Button onClick={removeOneHandler} type="button">
            -1
          </Button>
        </div>
        <div className={classes.counter}>{counter}</div>
        <div className={classes["input-control"]}>
          <input
            className={classes.input}
            type="number"
            min="1"
            max="100"
            ref={inputValue}
          />
          <Button onClick={addValueToCounterHandler}>Aggiungi</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
