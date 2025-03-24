import { React, useEffect } from 'react'

import Header from './sections/Header';

const Resume = () => {
    useEffect(() => {
        document.body.classList.add('resume-page');
        return () => document.body.classList.remove('resume-page'); // Clean up on unmount
    }, []);

  return (
    <div className="container main__container">
        <Header />
        <main className="main">
        
        
        
            </main>
    </div>
  )
}

export default Resume