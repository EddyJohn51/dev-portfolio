import Welcome from './Welcome.tsx'
import Banner from './Banner.tsx'
import './App.css'
import React from 'react'

const App: React.FC = () => (
    <>
      <div>
        <Welcome />
        <Banner />
      </div>
    </>
)

export default App
