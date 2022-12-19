import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '~/api';

const useFoodCategory = () => {
    const query = useQuery(['food_grouping'], () => api.getFoodCategory())
    return query;
}

const useFoodList = () => {
    const query = useQuery(['food_list'], async => { return api.getFoodList() })
    return query;
}

const useCartList = () => {
const res=useQuery(['cart_list'],async ()=> {return api.getCartList()})
return res
}

const useUpdateFoodList = () => {
const queryClient=useQueryClient()
    return useMutation( async (item:any)=> {
        return api.updateNumber(item);
    },
    {
        onSuccess:(data)=>{
            queryClient.invalidateQueries(['cart_list'])
        }
    }
    )
}

const useLogin = () => {
    return useMutation(user => {
        console.log(user)
        return api.loginUser(user)
    })
}

const useUpdateUser = () => {
    const queryClient=useQueryClient()
        return useMutation( async (item:any)=> {
      
            return api.updateUser(item);
        },
        )
    }

    const usePostUser = () => {
            return useMutation( async (item:any)=> {
                return api.postUser(item);
            },
            )
        }

        const useResetPassword = () => {
            const queryClient=useQueryClient()
            return useMutation( async (item:any)=> {
                
                return api.resetPassword(item);

                },
                )
            }

            const useSearchUser = () => {
                return useMutation(email => {
                    return api.searchUser(email)
                })
            }

            const usePostOrder = () => {
                return useMutation( async (item:any)=> {
                    return api.postOrder(item);
                },
                )
            }

            // const useUpdateCartList = () => {
            //     const queryClient=useQueryClient()
            //         return useMutation( async (item:any)=> {
            //             return api.resetCartList(item);

            //         },
                    
            //         {
            //             onSuccess:(data)=>{
            //                 queryClient.invalidateQueries(['cart_list'])
            //             }
            //         }
            //         )
            //     }

                const useOrderList = () => {
                    const query = useQuery(['food_order'], async => { return api.getOrderList() })
                    return query;
                }
           

export {
    useFoodCategory,
    useFoodList,
    useUpdateFoodList,
    useCartList,
    useLogin,
    useUpdateUser,
    usePostUser,
    useResetPassword,
    useSearchUser,
    usePostOrder,
    // useUpdateCartList,
    useOrderList
};

