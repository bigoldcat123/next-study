'use client'
 
export default function Modal({children}:{children:React.ReactNode}) {

  return (
    <>
    <div style={{position:'absolute',width:'100px',height:'100px',backgroundColor:'red',top:'50%',left:'50%'}}>
      {children}
      <button>close</button>
    </div >
    </>
  )
}