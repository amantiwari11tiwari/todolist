import React from 'react'
import Sidebar from './sidebar'
import Task from './task'

const content = () => {
    return (
        <section className="content">

            <Sidebar />
            <Task />
        </section>
    )
}

export default content
