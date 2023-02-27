"use strict";

const { useState } = React;

function TableData() {
  const [data, setData] = useState([
    [
      "Technical Audit",
      "Website Access",
      "Google Search Console Access",
    ],
    [
      "Onboardng Call",
      "Google Analytics Access",
      "On Page Optimization",
    ],
    [
      "Competitor Analysis",
      "Premium Press Release",
      "Site Level Optimization",
    ]
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


  function handleEdit(index, column, value) {
    const newRows = [...state];
    newRows[index][column] = value;
    setState(newRows);
  }

  return (
    <>
      <div className="container">
        <div className="table_heading">
          {month.map((item) => {
            return (
              <div >
                <h2>{item.MONTH}</h2>
              </div>
            );
          })}
        </div>
        <div className="table_row">
        {data.map((elem,index) => {
            return (
                <div key={index} className="table_row_data">
              {
                  elem.map((item,index)=>{
                    return (
                        <p key={index} >{item}</p>
                    )
                })
              }
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
    <td>
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
    </td>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TableData />);
