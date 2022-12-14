import create from 'zustand';
import { persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';
import { useMemo } from 'react';
import { pick } from 'lodash';


interface IUseAuthStore {
  authToken: string | null | undefined;
  user:  null | undefined;
  session: boolean;
  redirectTo: string | null | undefined;
  setSession: (arg: boolean) => void;
  isClient: boolean;
  isAdmin: boolean;
  isLoading: boolean;
}

export const useAuthStore = create(
  persist<IUseAuthStore>(
    (set) => ({
      isLoading: false,
      authToken: null,
      user: null,
      session: true,
      redirectTo: null,
      isClient: false,
      isAdmin: false,
      setAuthLoading: (b: boolean) => {
        set({ isLoading: b });
      },
      setSession(boolean: boolean) {
        set({ session: boolean });
      },
    }),
    {
      name: 'authStorage',
      getStorage: () => window.sessionStorage,
    }
  )
);

const useAuth = (selector: Array<keyof IUseAuthStore>) => {
  const memo = useMemo(() => selector, [selector]);
  return useAuthStore((state) => pick(state, memo), shallow);
};
export default useAuth;