'use client'

import Back from '@/componant/back';
import Footer from '@/componant/footer';
import Header from '@/componant/header';
import ExpediaModal from '@/componant/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';



export default function Home() {

  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000);
  
  }, [])

  return (
    <>
      <ExpediaModal show={show} onClose={() => setShow(false)} />
      <Header />
      <Back />
      <Footer />


    </>
  );
}


