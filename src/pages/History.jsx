import React from 'react'

function History() {
  return (
    
    <>
    <div className='p-5'>
      <h2>Watch History</h2>
<table className='table table-bordered'>
  <thead>
    <tr>
      <th>Video ID</th>
      <th>Caption</th>
      <th>Video URL</th>
      <th>Date and Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Heeriye</td>
      <td>https://www.youtube.com/embed/RLzC55ai0eo?si=PTPXI_Ybqh0zCqK_&autoplay=1</td>
      <td>2024-8-16</td>
      <td><button className='btn '>
      <i className="fa-solid fa-trash " style={{ color: "#cb0b0b", }} />
        </button>
        </td>
    </tr>
  </tbody>
</table>
    </div>
    </>
  )
}

export default History