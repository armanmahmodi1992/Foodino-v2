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



export {
    useFoodCategory,
    useFoodList,
    useUpdateFoodList,
    useCartList
};

