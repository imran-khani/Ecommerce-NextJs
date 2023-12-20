import { client } from "@/app/lib/sanity"

     const getData = async ()=>{
        const query = "*[_type == 'product']"
        const data = await client.fetch(query)
        return data
     }

const Newest = async() => {
    const products = await getData()
    console.log('products: ', products);
     
  return (
    <div>Newest</div>
  )
}

export default Newest