import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJson = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });

      const sheetName = workbook.SheetNames[0]; // Get first sheet
      const worksheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData); // Array of objects
    };

    reader.readAsBinaryString(file);
  };

  console.log(data)

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExcelToJson;
