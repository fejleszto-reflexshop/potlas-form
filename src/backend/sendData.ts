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
        formData.append("isAttachment", "true");
        formData.append("attachment", data.attachment);
    } else {
        formData.append("isAttachment", "false");
    }

    return fetch(import.meta.env.VITE_URL as string, {
        method: "POST",
        body: formData,
    });
}