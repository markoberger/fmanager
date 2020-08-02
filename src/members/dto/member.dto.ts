export interface MemberDto {
    id: number | string; 
    name: string;
    lastName: string;
    role: number | string;
}; 

export interface CreateMemberDto {
    name: string;
    lastName: string;
    role: number | string; 
    password: string;
    address: string;
    city: string; 
    country: string; 
}