import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Details({ users }) {
    const { id } = useParams()
    const found = users.find(user => user.id == id)
    return (
        <div style={{ margin: '20px',marginBottom:'20px', padding:'20px', backgroundColor: '#FDF5E6', borderRadius: '10px', border: '1px solid black' }}>
            <h2 style={{ textAlign: 'center', color:'#1E90FF', fontSize:'xx-large' }}>{found.name}</h2>
            <div style={{ display: 'flex' }}><h4 style={{color:'#800000'}}>Username : </h4><h4>{found.username}</h4></div>
            <div style={{ display: 'flex' }}><h4 style={{color:'#800000'}}>Email : </h4><h4>{found.email}</h4></div>
            <div style={{ display: 'flex' }}><h4 style={{color:'#800000'}}>Phone : </h4><h4>{found.phone}</h4></div>
            <div style={{ display: 'flex' }}><h4 style={{color:'#800000'}}>Website: </h4><a href={`www.${found.website}`} target={'blank_'}><h4>www.{found.website}</h4></a></div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}><h4 style={{color:'#800000'}}>Company : </h4><h4>{found.company.name},{found.company.catchPhrase},{found.company.bs}</h4></div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}><h4 style={{color:'#800000'}}>Address : </h4><h4>{found.address.street},{found.address.suite},{found.address.city},{found.address.zipcode}</h4></div>
            <Link to='/'><Button variant='primary' style={{ marginTop: '20px' }}>Return</Button>
            </Link>
        </div>
    )
}

export default Details;