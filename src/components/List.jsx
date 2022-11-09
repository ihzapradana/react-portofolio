import React from 'react'

function List({data}) {
  return (
    <ol>
        {data.map((item, index) => {
            return <li key={index}>{item}</li>
        })}
    </ol>
  )
}

export default List