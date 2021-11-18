import React from 'react'
import SectiuneInceput from '../Components/SectiuneInceput'
import SectiuneMiddle from '../Components/SectiuneMiddle'


function Home() {
    return (
        <div>
            <div className="inceput_tittle">
            <SectiuneInceput/>
            </div>
            <div className="middle">
            <SectiuneMiddle/>
            
            </div>
        </div>
    )
}

export default Home

