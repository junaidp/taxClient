import React from 'react'
import Header from '../components/home/header'
import Body from '../components/contact/body'

const Contact = ({ setShowLoginDialog, setShowMyProfileDialog }) => {
    return (
        <div className='cards-wrapper'>
            <Header
                setShowLoginDialog={setShowLoginDialog}
                setShowMyProfileDialog={setShowMyProfileDialog}
            />
            <Body />
        </div>
    )
}

export default Contact