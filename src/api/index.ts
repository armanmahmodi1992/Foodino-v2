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

export const getCartList = async (input:any) => {

    const url=`food_cart`

    const food_id=input?.item.id
    const user_id=input?.id

    const data = await instance({
             url:url,
             method: 'get',
             params:{         
                 food_id:food_id,
                 user_id:user_id
                    }
        })
        return data;
    }

    export const getUserCart = async (user_id:number) => {

        const url=`food_cart`

            const data = await instance({
                 url:url,
                 method: 'get',
                 params:{         
                     user_id:user_id
                        }
            })
            return data;
        }

  export const updateCartNumber = async (item:any) => {
    console.log('item in update ',item)
    const url=`food_cart/${item?.id}`
    const number=item?.number

      const result = await instance({
          url: url,
          method:'put',
          data:{
              number:number,
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

export const postCart = async (item:any) => {

    console.log('item in post cart',item)
    const url=`food_cart`
    
    const user_id=item?.user_id
    const name=item?.name
    const number=item?.number
    const price=item?.price
    const subset=item?.subset
    const pic=item?.pic
    const food_id=item?.id

    const result = await instance({

          url: url,
          method:'post',
          data:{
            user_id:user_id,
            name:name,
            number:number,
            price:price,
            subset:subset,
            pic:pic,
            food_id:food_id
          }  
      })
      return result;
  }

        export const getCartListByUserId = async (input:any) => {

            const url=`food_cart`
        
            const [{user_id}]=input
           
        
            const data = await instance({
                     url:url,
                     method: 'get',
                     params:{         
                         user_id:user_id
                            }
                })
                return data;
            }

   


  export const getFoodCart = async (input:any) => {

    const user_id=input?.user_id
    const food_id=input?.food_id

    const url=`food_cart`

        const data = await instance({
             url:url,
             method: 'get',
             params:{         
                 user_id:user_id,
                 food_id:food_id
                    }
        })
        return data;
    }

  export const deleteCart = async (input:any) => {

    const id=input
    const url=`food_cart/${id}`

    const result = await instance({
          url: url,
          method:'delete', 
      })
      return result;
  }

export const postOrder = async (item:any) => {

    const url=`food_order`
    const name=item?.name
    const number=item?.number
    const price=item?.price
    const subset=item?.subset
    const pic=item?.pic
    const user_id=item?.user_id
    const food_id=item?.food_id

    const result = await instance({
          url: url,
          method:'post',
          data:{
         name:name,
         number:number,
         price:price,
         subset:subset,
         pic:pic,
         user_id:user_id,
         food_id:food_id,
          }  
      })
      return result;
  }
  
  export const getOrderList = async (user_id:number) => {

    const data = await instance({
        url: `food_order`,
        method: 'get',
        params:{
            user_id:user_id
        }
      
    })
    return data;
}