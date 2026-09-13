export interface Certificate {
    id: number;
    name: string;
    issuer: string;
    dateEmission: Date;
    dateExpiration: Date;
}

export const certificates: Certificate[] = [] 