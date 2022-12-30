import React from 'react'

function Post({item}) {
  return (
    <div>
        <h3>userId:  {item.userId}</h3>
        <h3>title:  {item.title}</h3>
        <h3>body:   {item.body}</h3>
    </div>
  )
}

export default Post