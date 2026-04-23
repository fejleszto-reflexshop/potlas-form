export type ReplacementFormData = {
    nameOrOrderId: string;
    gameName: string;
    replacementDescription: string;
    replacementType: string;
    addressOrPickup: string;
    email: string;
    phone: string;
    attachment: File | null;
};

export async function sendData(data: ReplacementFormData): Promise<Response> {
    const formData = new FormData();

    formData.append("nameOrOrderId", data.nameOrOrderId);
    formData.append("gameName", data.gameName);
    formData.append("replacementDescription", data.replacementDescription);
    formData.append("replacementType", data.replacementType);
    formData.append("addressOrPickup", data.addressOrPickup);
    formData.append("email", data.email);
    formData.append("phone", data.phone);

    if (data.attachment) {
        formData.append("attachment", data.attachment);
    }

    return fetch("https://reflexshop.app.n8n.cloud/webhook-test/api/clickup-task", {
        method: "POST",
        body: formData,
    });
}