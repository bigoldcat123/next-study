'use client';

import { getRandomValues } from "crypto";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function () {

  console.log('x');
  const router = useRouter()
  function ss() { router.push('/') }

  useEffect(() => {
    //@ts-ignore
    var map = new BMapGL.Map("container");
        //@ts-ignore
    var point = new BMapGL.Point(116.404, 39.915);
    map.centerAndZoom(point, 15); 
   })
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
    </main>
  );
}
