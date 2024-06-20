'use server'

export async function s(id:string,arg:FormData) {
    console.log("hi");
    return '__dirname'
}

export async function uploadform(prevState: any, formData: FormData) {
    console.log(formData.get('name'));
    return {
        message: 'Please enter a valid email',
      }
}