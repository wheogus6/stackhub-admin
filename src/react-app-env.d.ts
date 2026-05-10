/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_ACCOUNT_AUTH_API_URL: string;
        // 다른 환경 변수들도 여기에 추가
        readonly NODE_ENV: 'development' | 'production' | 'test';
    }
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
