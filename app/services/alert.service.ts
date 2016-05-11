declare const alertify: any;

export class AlertService {
    alert(message: string) {
        alertify.alert(message);
    }
    confirm(message: string, callbackSuccess) {
        alertify.confirm(message, callbackSuccess);
    }
}