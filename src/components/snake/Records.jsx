import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function RecordList() {
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  useEffect(() => {
    async function getRecords() {
        axios
        .get("http://localhost:5001/records")
        .then((response) => {
          console.log(response);
          if (response.data.length <= 10) {
            setList1(response.data);
          } else {
            setList1(response.data.slice(0, 10));
            setList2(response.data.slice(10));
          }
          }
          )
        .catch((error) => console.error("Error fetching records:", error));;
    }

    getRecords();

  }, [list1.length]);

  // This method will map out the records on the table
  function recordList(list) {
    return list.map((record) => {
      return (
        <tr key={record.id}>
          <td>{record.name}</td>
          <td>{record.score}</td>
          <td>
          </td>
        </tr>
      );
    });
  }

  // This following section will display the table with the list of individuals.
  return (
    <div className="score-row">
      <div>
        <h3>High Scores.</h3>
        <table className="w3-table w3-striped w3-bordered" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{recordList(list1)}</tbody>
        </table>
      </div>
      {list2.length > 0 && (
        <div>
          <h3>High Scores</h3>
          <table className="w3-table w3-striped w3-bordered" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>{recordList(list2)}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}