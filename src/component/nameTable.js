import React, { useState, useEffect } from 'react';

const NameTable = () => {
  const [names, setNames] = useState([]);

  const styleObj = {
    fontSize: 20,
    color: "#4a54f1",
    textAlign: "center",
    maxWidth:"100px",
    color:"black",
}

const tableObj = {
    border: "5pxSolid",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px"
    
}

  useEffect(() => {
    // Simulating fetching data from a mock service
    const mockData = [
      'Krishna',
      'Vijay',
      'Sandesh',
      'Krishna',
      'Prem',
      'Sandesh',
      'Krishna',
      'Vijay',
      'Ankush',
      'Sandesh',
      'Krishna',
      'Vijay',
      'Krishna',
      'Krishna',
      'Krishna',
      'Krishna',
      'Krishna',
      'Krishna',

    ];
    setNames(mockData);
  }, []);

  const getDistinctNamesWithCounts = () => {
    const nameCounts = {};

    names.forEach((name) => {
      if (nameCounts[name]) {
        nameCounts[name] += 1;
      } else {
        nameCounts[name] = 1;
      }
    });

    const distinctNamesWithCounts = Object.keys(nameCounts).map((name) => ({
      name,
      count: nameCounts[name],
    }));

    return distinctNamesWithCounts;
  };

  const distinctNames = getDistinctNamesWithCounts();

  return (
    <div className="Table" style={tableObj}>
    <table style={styleObj}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Table</th>
        </tr>
      </thead>
      <tbody>
        {distinctNames.map(({ name, count }) => {
          let rowColor = '';

          if (count > 0 && count < 3) {
            rowColor = 'red';
          } else if (count >= 3 && count < 10) {
            rowColor = 'yellow';
          } else if (count >= 10) {
            rowColor = 'green';
          }

          return (
            <tr key={name} style={{ backgroundColor: rowColor }}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default NameTable;
