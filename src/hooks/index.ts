import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '~/api';
import { authStore } from '~/store/AuthStore';

const useFoodCategory = () => {
    const query = useQuery(['food_grouping'], () => api.getFoodCategory())
    return query;
}

const useUserCart = () => {
    const { token } = authStore();
    const id = token?.[0]?.id

    const query = useQuery(['food_cart'], async => { return api.getUserCart(id) })
    return query
}

const useUserCartByFoodId = () => {
    
    return useMutation(food_id => {
        return api.getCartByFoodId(food_id)
    })
}

const useUpdateFoodList = () => {
const queryClient=useQueryClient()
    return useMutation( async (item:any)=> {
        return api.updateCartNumber(item);
    },
    {
        onSuccess:(data)=>{
            queryClient.invalidateQueries(['food_cart'])
        }
    }
    )
}

const useLogin = () => {
    
    return useMutation(user => {
        return api.loginUser(user)
    })
}

const useUpdateUser = () => {

    const { token } = authStore();
    const userId = token?.[0]?.id

    const queryClient=useQueryClient()
        return useMutation( async (item:any)=> {

            const items={item,userId}
            return api.updateUser(items);
        }
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

            const usePostCart = () => {
                const queryClient=useQueryClient()
                return useMutation( async (item:any)=> {
                    return api.postCart(item);
                }
                ,
                    {
                        onSuccess:(data)=>{
                            queryClient.invalidateQueries(['food_cart'])
                        }
                    }
                )
            }

            const useSearchFoodCartByUserId = () => {
                return useMutation(input => {
                    return api.getCartListByUserId(input)
                })
            }

            const useDeleteCart= () => {
                const queryClient=useQueryClient()
                    return useMutation( async (input:any)=> {
                        return api.deleteCart(input);
                    },
                    {
                        onSuccess:(data)=>{
                            queryClient.invalidateQueries(['food_cart'])
                            queryClient.invalidateQueries(['food_grouping'])
                        }
                    }
                    )
                }

                const useDeleteCartFromOrder= () => {
                    const queryClient=useQueryClient()
                        return useMutation( async (input:any)=> {
                            return api.deleteCartFromOrder(input);
                        },
                        {
                            onSuccess:(data)=>{
                                queryClient.invalidateQueries(['food_cart'])
                                queryClient.invalidateQueries(['food_grouping'])
                            }
                        }
                        )
                    }

            const usePostOrder = () => {
                const queryClient=useQueryClient()
                return useMutation( async (item:any)=> {
                    return api.postOrder(item);
                },
                {
                    onSuccess:(data)=>{
                        queryClient.invalidateQueries(['food_cart'])
                        queryClient.invalidateQueries(['food_order'])
                    }
                }
                )
            }

                const useOrderList = (user_id:number) => {

                    const query = useQuery(['food_order'], async => { return api.getOrderList(user_id) })
                    return query;
                }

export {
    useFoodCategory,
    useUpdateFoodList,
    useLogin,
    useUpdateUser,
    usePostUser,
    useResetPassword,
    useSearchUser,
    usePostOrder,
    useOrderList,
    usePostCart,
    useUserCart,
    useDeleteCart,
    useSearchFoodCartByUserId,
    useDeleteCartFromOrder,
    useUserCartByFoodId
};

