import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type AuthState = {
    token: any;
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
    setToken: (token: any) => void;
};

type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>,
) => StateCreator<AuthState>;

const initialState: any = {
    isLogin: false,
    token: '',
}
export const authStore = create<AuthState>(
    (persist as unknown as AuthPersist)(
        set => ({
            ...initialState,
            setIsLogin: (isLogin: boolean) => set({ isLogin }),
            setToken: (token: any) => set({ token }),
            reset: () => set(initialState)
        }),
        {
            name: 'auth-storage',
            getStorage: () => AsyncStorage,
        },

    ),
);

export default authStore;