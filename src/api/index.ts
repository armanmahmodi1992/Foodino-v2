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

export const getCartList = async () => {
const order='yes'
    const data = await instance({
        url: `food_list`,
        method: 'get',
        params:{         
             select:order
                }
    })
    return data;
}

export const updateNumber = async (item:any) => {

  const url=`food_list/${item.id}`
  const number=item.number
  const select=number > 0 ? "yes" : "no";
    const result = await instance({
        url: url,
        method:'put',
        data:{
            number:number,
            select:select,
        }  
    })
    return result;
}

export const loginUser = async (user:any) => {
console.log(user)
    const data = await instance({
        url: `users`,
        method: 'get',
        params:{         
             email:user?.email,
             password:user?.password
                }
    })
    return data;
}

export const updateUser = async (item:any) => {
console.log('item in api',item)
    const url=`users/${item?.id}`
    const email=item?.email
    const password=item?.password
    const name=item?.name
    const address=item?.address
    const pic=item?.pic
          const result = await instance({
          url: url,
          method:'put',
          data:{
              email:email,
              password:password,
              name:name,
              address:address,
              pic:pic
          }  
      })
      return result;
  }