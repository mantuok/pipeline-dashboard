import React from 'react';
import Dashboard from '../dashboard/dashboard';
import Header from '../header/header';

const Page = () => {
  return (
    <section className="page">
      <Header />
      <main className="page__wrapper">
        <h1 className="page__heading">Pipeline Dashboard</h1>
        <Dashboard />  
      </main>
    </section>
  )
}

export default Page;