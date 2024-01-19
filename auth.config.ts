import { NextAuthConfig } from 'next-auth';

export type {NextAuthConfig} from 'next-auth';

export const authConfig = {
    pages:{
        signIn: '/login',
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isDashboard = nextUrl.pathname.startsWith('/dashboard');

            if(isDashboard) {
                if(isLoggedIn) return true;
                return false; // redirect to login
            } else if(isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl))
            }

            return true;
        }
    },

    providers: [], // comtain github, google,...
} satisfies NextAuthConfig;