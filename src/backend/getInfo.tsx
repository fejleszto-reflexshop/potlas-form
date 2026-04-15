export function getInfo() {
    localStorage.clear();

    const name_field: HTMLInputElement = document.querySelector('#name') as HTMLInputElement;
    const email_field: HTMLInputElement = document.querySelector('#email') as HTMLInputElement;

    const data = {
        name: name_field.value,
        email: email_field.value,
    }

    localStorage.setItem("data", JSON.stringify(data));
}