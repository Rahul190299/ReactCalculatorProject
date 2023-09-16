import { useState } from "react";

export const Calculator = () => {
  const [error, SetError] = useState();
  const [num1, SetNum1] = useState("");
  const [num2, SetNum2] = useState("");
  const [result, SetResult] = useState();
  const oprations = ["+", "-", "*", "/"];
  const performOpration = (ele, num1, num2) => {
    switch (ele) {
      case "+":
        const sum = num1 + num2;
        SetResult(sum);
        SetError("");
        break;
      case "-":
        const sub = num1 - num2;
        SetResult(sub);
        SetError("");
        break;
      case "*":
        const mul = num1 * num2;
        SetResult(mul);
        SetError("");
        break;
      case "/":
        const devision = num1 / num2;
        SetResult(devision);
        SetError("");
        break;
      default:
        break;
    }
  };
  const checkValidation = (ele) => {
    if (num1 === "") {
      SetError("Num 1 cannot be Empty");
      SetResult();
      return;
    } else if (num2 === "") {
      SetError("Num2 cannot be Empty");
      SetResult();
      return;
    }
    let Num1 = parseFloat(num1);
    let Num2 = parseFloat(num2);
    if (isNaN(Num1)) {
      SetError("Enter a valid Num1");
      SetResult();
      return;
    } else if (isNaN(Num2)) {
      SetError("Enter a valid Num2");
      SetResult();
      return;
    }
    performOpration(ele, Num1, Num2);
  };
  return (
    <div className="outerheading">
      <div style={{ display: "flex" }}>
        <p>Calculator </p>
        {error && <p>-Error </p>} {error === "" && <p>-Successful </p>}
      </div>
      <div className="outerdiv">
        <h2>React Calculator </h2>
        <div className="innerdiv">
          <input
            style={{ padding: "5px" }}
            type="text"
            placeholder="Num 1"
            onChange={(e) => SetNum1(e.target.value)}
          />
          <br />
          <input
            style={{ marginTop: "5px", padding: "5px" }}
            type="text"
            placeholder="Num 2"
            onChange={(e) => SetNum2(e.target.value)}
          />
          <br />

          {oprations.map((ele) => {
            return (
              <button
                style={{
                  marginTop: "5px",
                  height: "30px",
                  marginLeft: "5px",
                  width: "40px"
                }}
                key={ele}
                onClick={() => checkValidation(ele)}
              >
                {ele}
              </button>
            );
          })}

          <div style={{ marginTop: "5px" }}>
            {error && (
              <>
                <p style={{ color: "red" }}>error</p>
                <p>{error}</p>
              </>
            )}
            {error === "" && (
              <>
                <p style={{ color: "blue" }}>Success</p>
                <p>Result : {result}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
