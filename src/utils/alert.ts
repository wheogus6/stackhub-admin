import Swal from 'sweetalert2';

// iconType 정의 : 'success' | 'error' | 'warning' | 'info' | 'question'

export const defaultAlert = (msg: string) => {
    Swal.fire({
        text: msg,
        width: "80%"
    });
}


export const defaultConfirm = (
    msg: string,
    confirmButtonText: string,
    cancelButtonText: string,
    callback: (isConfirmed: boolean) => void
) => {
    Swal.fire({
        text: msg,
        confirmButtonText: confirmButtonText,
        showCancelButton: true,
        cancelButtonText: cancelButtonText,
        width: "80%",
        allowOutsideClick: false
    }).then((result) => {
        callback(result.isConfirmed);
    });
}



export const alertAfterFunction = (msg: string, action: () => void) => {
    Swal.fire({
        text: msg,
        width: "80%"
    }).then((result) => {
        if (result.isConfirmed) {
            action();
        }
    });
}
