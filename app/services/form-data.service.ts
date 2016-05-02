export class FormDataService {
    buildToImage(image, id: string): FormData {
        let formData = new FormData();
        formData.append('picture', image);
        formData.append('id', id);
        return formData;
    }
}