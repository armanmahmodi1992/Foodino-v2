import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as api from '~/api';

const useFoodCategory = () => {
    const query = useQuery(['food_grouping'], () => api.getFoodCategory())
    return query;
}

const useFoodList = (subset: any) => {
    const query = useQuery(['food_list', subset], async => { return api.getFoodList(subset) })
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
            console.log('item in hook',item)
      
            return api.updateUser(item);
        },
        {
            // onSuccess:(data)=>{
            //     queryClient.invalidateQueries(['users'])
            // }
        }
        )
    }

export {
    useFoodCategory,
    useFoodList,
    useUpdateFoodList,
    useCartList,
    useLogin,
    useUpdateUser
};

