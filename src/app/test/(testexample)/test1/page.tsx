
function fetchdata () {
  return new Promise(resolve => {
    setTimeout(() => {
      
      resolve(Date())
    }, 3000)
  })
}
export default async function () {
 const d =  await fetchdata() as string


    return (
      <main>
        <div>test1 - {d} </div>
        {
          [1,2,3].map(x => {
            return <div style={{color: 'red',height:'400px'}} key={x}>{x}</div>
          })
        }
      </main>
    );
  }
  