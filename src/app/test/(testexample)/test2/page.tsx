'use client';

import { s, uploadform } from "@/app/s";
import { getRandomValues } from "crypto";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Child from "@/app/component/Child";

export default function () {

  console.log('x');
  const router = useRouter()
  async function  ss() { 
    // const v= await s()
    // console.log(v);
    
    // router.push('/')
   }

  useEffect(() => {
    //@ts-ignore
    var map = new BMapGL.Map("container");
        //@ts-ignore
    var point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 15); 
    fetch('/api').then( async res =>{
      console.log(await res.json());
    })
    // s()
    // s.bind(null,"string")
   })
   const initialState = {
    message: '',
  }
  const [state, formAction] =  useFormState(uploadform,initialState)
  return (
    <main>
      <div style={{height:'1000px',width:'1000px'}} id="container"></div>
      <div onClick={() => console.log('test')}>test2</div>
      <button onClick={ss}>home</button>
      {
        [1, 2, 3].map(x => {
          return <div style={{ color: 'red', height: '400px' }} key={x}>{x}</div>
        })
      }
      <form action={formAction}>
        <input type="text" name="name" />
        <input  type="submit" />
      </form>
      {state.message}
      <Child></Child>
    </main>
  );
}
