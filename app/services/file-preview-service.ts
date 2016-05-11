export class FilePreviewService {
    getUrl(file: any) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            }

            reader.readAsDataURL(file);
        });
    }
}