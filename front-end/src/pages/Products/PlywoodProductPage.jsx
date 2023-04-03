import React from 'react'
import PlywoodSidebar from './PlywoodSidebar'
import '../Styles/ProductPage.scss'
import ProductTopCard from './ProductTopCard'
import ProductBottomCard from './ProductBottomCard'
import axios from 'axios'
import { baseURL } from '../../utils/variables'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlywoodProducts } from '../../redux/Admin/admin.action'

const PlywoodProductPage = () => {

  const [data, setData] = useState([])

  // const dispatch = useDispatch()

  // const { plyWoodProducts} = useSelector(
  //   (store) => store.product
  // );
  useEffect(()=>{
    axios.get(`${baseURL}plywood`,{
      headers:{
        "Content-Type":"application/json",
        "token":sessionStorage.getItem('token')
      }
    })
    .then((res) => {
      setData(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })

// dispatch(getPlywoodProducts())
  },[])

 

  console.log(data)

  let topbar = [
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/SY/HS/XL/92368/shuttering-plywood-125x125.jpg",
      title: "Shuttering Plywood"
    },
    {
      img: "https://4.imimg.com/data4/BF/KU/GLADMIN-180549/waterproof-plywood-125x125.jpg",
      title: "Waterproof Plywood"
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/DB/OW/SW/92368/mr-grade-plywood-125x125.jpg",
      title: "MR Grade Plywood"
    },
    {
      img: "https://5.imimg.com/data5/NN/SM/GLADMIN-2/gurjan-core-plywood-125x125.jpg",
      title: "Gurjan Plywood"
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/LB/GG/PH/92368/laminated-plywood-125x125.jpg",
      title: "Laminated Plywood"
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/XH/PQ/ZG/92368/marine-plywood-125x125.jpg",
      title: "Marine Plywood"
    },
    {
      img: "https://5.imimg.com/data5/GLADMIN/Default/2022/7/EU/QP/YY/92368/bwp-plywood-125x125.jpg",
      title: "BWP Plywood"
    },
    {
      img: "https://3.imimg.com/data3/AL/IH/MY-2/hardwood-plywood-125x125.jpg",
      title: "Hardwood Plywood"
    },
    {
      img: "https://3.imimg.com/data3/PE/QK/GLADMIN-27483/film-faced-plywood-125x125.jpg",
      title: "Film Faced Plywood"
    }
  ]


  return (
    <div className='productMain_PS' id='productMain_PS'>
      <div className='productSidebar_PS'>
        <PlywoodSidebar />
      </div>
      <div className='productright_PS'>
        <div className='productrightTOP_PS'>
          {
            topbar.map((el) => (
              <ProductTopCard 
              img={el.img} title={el.title}
              />
            ))
          }
        </div>
        <div className='productrightBOTTOM_PS'>
          {
            data?.map((el) => (
              <ProductBottomCard
                img={el.img1} title={el.title} price={el.price} supplier={el.supplier} supplier_Addres={el.supplier_Addres} mob={el.mob}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PlywoodProductPage