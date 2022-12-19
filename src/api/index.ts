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

export const getFoodList = async () => {

    const data = await instance({
        url: `food_list`,
        method: 'get',
      
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

  export const postUser = async (item:any) => {

    const url=`users`
    const email=item.email
    const password=item.password
      const result = await instance({
          url: url,
          method:'post',
          data:{
              email:email,
              password:password,
          }  
      })
      return result;
  }

  export const resetPassword = async (item:any) => {

    console.log('item in api',item)

    const url=`users/${item?.id}`
    const password=item?.item.password
          const result = await instance({
          url: url,
          method:'put',
          data:{
              password:password,
          }  
      })
      return result;
  }

  export const searchUser = async (email:any) => {

    const mail=email
    const data = await instance({
        url: `users`,
        method: 'get',
        params:{         
             email:mail
                }
    })
    return data;
}

export const postOrder = async (item:any) => {

    const url=`food_order`
   const [{name,price,number,subset,pic}]=item

    const result = await instance({
          url: url,
          method:'post',
          data:{
         name:name,
         number:number,
         price:price,
         subset:subset,
         pic:pic
          }  
      })
      return result;
  }
  

  export const getOrderList = async () => {

    const data = await instance({
        url: `food_order`,
        method: 'get',
      
    })
    return data;
}