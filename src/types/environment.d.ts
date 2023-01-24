declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_HOST: string;
            CLOUDINARY: string;
        }
    }
}

export {};