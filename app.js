"use strict";

const { useState } = React;

function TableData() {
  const [data, setData] = useState([
    ["Technical Audit", "Website Access", "Google Search Console Access"],
    ["Onboardng Call", "Google Analytics Access", "On Page Optimization"],
    ["Competitor Analysis", "Premium Press Release", "Site Level Optimization"],
  ]);


  const [month, setMonth] = useState([
    {
      MONTH: "MONTH 1",
    },
    {
      MONTH: "MONTH 2",
    },
    {
      MONTH: "MONTH 3",
    },
  ]);

  let edit = (row,col,value) => {
    let newArr = [...data] ;
    newArr[col][row] = value ;
    // instead of "alert" we can write logic for posting data from here as we will be getting the updated data after editing so we can successfully post the data.
    alert("data ready to post") ;
    setData(newArr) ; 
  };

  return (
    <>
      <div className="container">
        <div className="table_heading">
          {month.map((item) => {
            return (
              <div>
                <h2>{item.MONTH}</h2>
              </div>
            );
          })}
        </div>
        <div className="table_row">
          {data.map((elem, col) => {
            return (
              <div key={col} className="table_row_data">
                {elem.map((item, row) => {
                  return (
                    <EditableCell
                      value={item}
                      onEdit={(value) => edit(row,col,value)}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

function EditableCell({ value, onEdit }) {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    onEdit(inputValue);
  }
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="para_btn">
      {editing ? (
        <>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {value}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TableData />);
