import React from 'react'

function lihatabsensi(props) {
  console.log(props.Attendance)
  return (
    <>
      <div className='m-[3rem]'>
        <div className='border-2 border-black h-[20rem] rounded-2xl'>
          <div>
              {props.Attendance.map((e=>e.title))}
          </div>
        </div>
      </div>
    </>
  )
}

export default lihatabsensi