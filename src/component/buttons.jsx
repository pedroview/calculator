import React from "react";
import Button from "@material-ui/core/Button";

const Buttons = (props) => {
  const clearStyle = { background: "#ac1111", color: "white" },
    operatorStyle = { background: "grey", color: "white" },
    equalsStyle = { background: "#113399", color: "white" };

  return (
    <div className="buttons">
      <Button value="ac" className="botton1" variant="contained" style={operatorStyle} onClick={props.clear}>
        DEL
      </Button>
      <Button value="ac" className="botton2" variant="contained" style={clearStyle} onClick={props.clear}>
        CLEAR
      </Button>
      <Button value="divide" className="botton1" variant="contained" style={operatorStyle} onClick={props.operations}>
        /
      </Button>
      <Button id="seven" value="7" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        7
      </Button>
      <Button id="eight" value="8" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        8
      </Button>
      <Button id="nine" value="9" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        9
      </Button>
      <Button id="multiply" value="*" className="botton1" variant="contained" style={operatorStyle} onClick={props.operations}>
        x
      </Button>
      <Button id="four" value="4" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        4
      </Button>
      <Button id="five" value="5" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        5
      </Button>
      <Button id="six" value="6" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        6
      </Button>
      <Button id="subtract" value="-" className="botton1" variant="contained" style={operatorStyle} onClick={props.operations}>
        -
      </Button>

      <Button id="one" value="1" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        1
      </Button>
      <Button id="two" value="2" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        2
      </Button>
      <Button id="three" value="3" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        3
      </Button>
      <Button id="add" value="+" className="botton1" variant="contained" style={operatorStyle} onClick={props.operations}>
        +
      </Button>

      <Button id="zero" value="0" className="botton1" variant="contained" style={operatorStyle} onClick={props.numbers}>
        sqr
      </Button>
      <Button id="zero" value="0" className="botton1" variant="outlined" color="primary" onClick={props.numbers}>
        0
      </Button>
      <Button id="decimal" value="." onClick={props.decimal} className="botton1" variant="outlined" color="primary">
        .
      </Button>
      <Button
        id="equals"
        value="="
        className="botton1"
        variant="contained"
        className="grid-item-equal"
        style={equalsStyle}
        onClick={props.result}>
        =
      </Button>
    </div>
  );
};

export default Buttons;
