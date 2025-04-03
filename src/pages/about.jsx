import React from 'react'
import Header from '../components/home/header'
import Body from '../components/about/body'

const About = ({ setShowLoginDialog, setShowMyProfileDialog }) => {
    return (
        <div>
            <Header
                setShowLoginDialog={setShowLoginDialog}
                setShowMyProfileDialog={setShowMyProfileDialog}
            />
            <Body />
        </div>
    )
}

export default About