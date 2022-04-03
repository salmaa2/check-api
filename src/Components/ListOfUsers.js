import React from 'react'
import User from './User'
function ListOfUsers({ users }) {
    return (
        <div>
            <h2 style={{margin:'50px', color:'#1E90FF'}}>List of users</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {users.map(el => <User user={el} key={el.id} />)}
            </div>
        </div>
    )
}
export default ListOfUsers