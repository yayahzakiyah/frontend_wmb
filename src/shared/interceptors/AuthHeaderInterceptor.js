export const authHeaderInterceptor = (config) => {
    if (config.url !== 'api/auth/login') {
        config.headers.Authorization = 'Bearer 123';
    }
    return config;
}
