export interface User {
    id: number;
    fullName?: string;
    email: string;
    password: string;
    role: UserRole; 
}

type UserRole = 'PATIENT' | 'MEDECIN' | 'ADMIN' | 'SECRETAIRE';

export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface UserLoginResponse{
    token?: string;
    user: User;
}