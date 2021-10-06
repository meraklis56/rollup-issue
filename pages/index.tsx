import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import React, { useState } from 'react';
import { Infobar, TestComponent, Header } from '../src';

const Home: NextPage = () => {
  return (
    <div>
        <Header options={[
            { slug: 'lendme', url: 'lendme.dk' },
            { slug: 'laina', url: 'axofinans.no'}
        ]} />
      <Infobar texts={['text1', 'text2']} />
      <TestComponent content={"test"} heading={"test2"}/>

    </div>
  )
}

export default Home
