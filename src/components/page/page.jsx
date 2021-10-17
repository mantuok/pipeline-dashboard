import React from 'react';
import Dashboard from '../dashboard/dashboard';

const Page = () => {
  return (
    <section className="page">
      <div className="page__wrapper">
        <h1 className="page__heading">Pipeline Dashboard</h1>
        <Dashboard />  
      </div>
    </section>
  )
}

export default Page;