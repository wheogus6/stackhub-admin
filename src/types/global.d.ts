declare global {
    interface Window {
        android?: {
            requestFCMToken: () => void;
            getAosDeviceId: () => void;
        };
        webkit?: {
            messageHandlers?: {
                nativeApp?: {
                    postMessage: (message: { type: string }) => void;
                };
            };
        };
        receiveFCMToken?: (token: string) => void;
        sendDeviceId?: (deviceId: string) => void;
    }
}

export {};