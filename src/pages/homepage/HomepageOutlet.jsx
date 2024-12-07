import React from 'react'
import { useAuthContext } from '../../contexts/Auth'
import Homepage from './Homepage';
import Landing from '../landing/Landing';

function HomepageOutlet() {
    const {user} = useAuthContext();
  return (
    <>
      {
        user ? <Homepage /> : <Landing/>
      }
    </>
  )
}

export default HomepageOutlet
