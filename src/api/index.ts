import axios from 'axios';
export const apiConfig = {
    
    tools: 'tools',
    baseUrl: 'https://637b3f866f4024eac20819cd.mockapi.io',
    timeout: 1000,
}

const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: apiConfig.timeout,
    headers: { 
        'Content-Type': 'application/json'
      },
    }); 
export default instance;

export const getFoodCategory = async () => {

    const data = await instance({
        url: `food_grouping`,
        method: 'get',
    })
    return data;
}

export const getFoodList = async (subset:any) => {

    const data = await instance({
        url: `food_list`,
        method: 'get',
        params:{         
             subset:subset
                }
    })
    return data;
}

export const postFoodCart=async(item:any)=>{

    console.log('item in api>>>>',item)
    const data=await instance({
        url: `food_cart`,
        method:'put',
        data:{
            id_food:item?.id,
            name:item?.name,
            subset:item?.subset,
            number:item?.number+1,
            price:item?.price
        }
    })
    return data;
}

export const updateNumber = async (item:any) => {

  const url=`food_list/${item.id}`
  const number=item.number
  const order=number > 0 ? true : false;
  console.log({url,number,order})
    const result = await instance({
        url: url,
        method:'put',
        data:{
            number:number,
            order:order
        }  
    })
    return result;
}

