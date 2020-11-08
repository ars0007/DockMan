import React from "react";
import "./customTable.styles.scss";

const CustomTable = (props: any) => {
  const columns: Array<string> = props.columns || [];
  const items: Array<any> = props.items || [];

  const buildRow = (item: any) => {
    const a = (
      <tr className="one_row">
        {columns.map((col) => {
          return <td>{item[col]}</td>;
        })}
      </tr>
    );

    console.log(a);
    return a;
  };

  return (
    <div className="custom-table">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length <= 0 ? (
            <div className="custom-table__no-items">
              <span>No Items</span>
            </div>
          ) : (
            items.map((item) => {
              return (
                <React.Fragment>
                  {buildRow(item)}
                  <tr className="spacer"></tr>
                </React.Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
