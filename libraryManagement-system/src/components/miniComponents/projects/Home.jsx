import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const projects = ["Todo List","Calculator"];

  return (
    <>
        <div className='w-screen h-screen bg-slate-500'>
            <div className="projects w-2/3 mx-auto h-auto border-black border-2 bg-gray-400">
            <h1 className='text-start text-3xl font-bold'>Projects</h1>
            <ul>
                {projects.map((project)=>{
                    
                    let a = project.split(" ").map((s)=>{
                        return s
                    })
                    
                    let pname = "";

                    for (let i = 0; i < a.length; i++) {
                        pname += a[i];
                    }

                    console.log(pname)
                    return <li><Link to={`${window.location.href}/${pname}`}>{project}</Link></li>
                })}
            </ul>
            </div>
        </div>
    </>
  )
}

export default Home