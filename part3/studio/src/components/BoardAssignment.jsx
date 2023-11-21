import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         value: "value1",
         label: "label1"
      },
      {
         value: "value12",
         label: "label2"
      },
      {
         value: "value3",
         label: "label3"
      }
   ];
   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }
   const board = boards.map((board, index) => (
      <li key={index}>{board}</li>
   ));

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            <option value={board.value}>{board.label}</option>
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
