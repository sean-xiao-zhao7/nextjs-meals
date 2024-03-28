"use server";

export const addNewImageHandler = async (formData: any) => {
    "use server";
    console.log(formData.get("image-path"));
};
