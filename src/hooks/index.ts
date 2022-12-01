import { useMutation, useQuery } from '@tanstack/react-query';
import * as api from '~/api';

const useFoodCategory = () => {
    const query = useQuery(['food_grouping'], () => api.getFoodCategory())
    return query;
}

const useFoodList = (subset: any) => {
    const query = useQuery(['food_list', subset], async => { return api.getFoodList(subset) })
    return query;
}

const UseUpdateFoodList = () => {
    return useMutation( async (item:any)=> {
        return api.updateNumber(item);
    },
    )
}

export {
    useFoodCategory,
    useFoodList,
    UseUpdateFoodList,
};
