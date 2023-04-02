import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBulbs, getMachins, getPlywoods } from '../../../redux/sell/sell.action'

export default function Dashbord() {
  const {plyWoods,bulbs,machins} = useSelector((store)=>store.sellReducer)
  const {token} = useSelector((store)=>store.authReducer)
  const dispatch = useDispatch()

  console.log("plyWoods",plyWoods)
  console.log('bulbs',bulbs)
  console.log('machins',machins)

  useEffect(()=>{

    const headers = {     
      'Content-Type': 'application/json',
      token:token // replace token with your actual token value // replace token with your actual token value
    }

    dispatch(getBulbs(headers))
    dispatch(getPlywoods(headers))
    dispatch(getMachins(headers))

  },[])

  return (
    <div>Dashbord</div>
  )
}
