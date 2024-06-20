import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
   console.log(searchParams);
  console.log( request.nextUrl.searchParams);
  
    return Response.json({ product:'hei' },{
      headers:{
        'set-cookie': 'name=123'
      }
    })
}
export async function  POST(request: Request) {
  const formdata = await request.formData()
  const name = formdata.get('name')
  return Response.json('hello '  + name + ' i am you!')
}