export class AlertService {
    confirm(message: string, callbackSuccess) {
        alertify.confirm(message, callbackSuccess);
    }
}