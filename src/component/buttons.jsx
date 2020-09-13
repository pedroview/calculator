import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = ({ handleValue, resolveCalculation, clear, handleOperator }) => {
  return (
    <div className="buttons">
      <Button value="ac" className="botton2 operatorStyle" variant="contained" onClick={() => clear("one")}>
        DEL
      </Button>
      <Button value="ac" className="botton2 clearStyle" variant="contained" onClick={() => clear("all")}>
        CLEAR
      </Button>

      <Button id="zero" value="0" className="botton1 operatorStyle" variant="contained" onClick={() => handleOperator("sqrt")}>
        sqrt
      </Button>
      <Button id="zero" value="0" className="botton1 operatorStyle" variant="contained" onClick={() => handleOperator("rand")}>
        rand
      </Button>
      <Button id="zero" value="0" className="botton1 operatorStyle" variant="contained" onClick={() => handleOperator("cbrt")}>
        cbrt
      </Button>

      <Button className="botton1 operatorStyle" variant="contained" onClick={() => handleValue(" / ")}>
        /
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(7)}>
        7
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(8)}>
        8
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(9)}>
        9
      </Button>
      <Button className="botton1 operatorStyle" variant="contained" onClick={() => handleValue(" * ")}>
        x
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(4)}>
        4
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(5)}>
        5
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(6)}>
        6
      </Button>
      <Button className="botton1 operatorStyle" variant="contained" onClick={() => handleValue(" - ")}>
        -
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(1)}>
        1
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(2)}>
        2
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(3)}>
        3
      </Button>
      <Button id="add" value="+" className="botton1 operatorStyle" variant="contained" onClick={() => handleValue(" + ")}>
        +
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(0)}>
        0
      </Button>
      <Button className="botton1" variant="outlined" color="primary" onClick={() => handleValue(".")}>
        .
      </Button>
      <Button className="botton2 equalsStyle" variant="contained" onClick={resolveCalculation}>
        =
      </Button>
    </div>
  );
};

export default Buttons;
