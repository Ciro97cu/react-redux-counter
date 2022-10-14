import Button from "./components/Button";

import classes from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./redux/counter-slice";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const addOneHandler = () => {
    dispatch(counterActions.addOne());
  };

  const removeOneHandler = () => {
    dispatch(counterActions.removeOne());
  };

  const customValueHandler = (data) => {
    dispatch(counterActions.addCustomValue(data.number));
    reset();
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
        <form
          onSubmit={handleSubmit(customValueHandler)}
          className={classes["input-control"]}
        >
          <div className={classes["input-controls"]}>
            <input
              className={classes.input}
              type="number"
              {...register("number", {
                required: true,
                min: 1,
                max: 100,
              })}
            />
            {errors.number && (
              <span className={classes.span}>
                {errors.number.type === "required" && "Campo obbligatorio!!"}
                {errors.number.type === "min" && "Il valore minimo è 1!!"}
                {errors.number.type === "max" && "Il valore massimo è 100!!"}
              </span>
            )}
          </div>
          <input className={classes["input-submit"]} type="submit" />
        </form>
      </div>
    </Fragment>
  );
}

export default App;
