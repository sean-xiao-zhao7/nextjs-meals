import { colors } from "@/app/styles/colors/colors";

const MyImagePicker = () => {
    return (
        <div
            style={{
                borderColor: "black",
                borderRadius: 5,
                backgroundColor: colors.mainColor,
                padding: "1rem",
            }}
        >
            <input
                type="file"
                id="image-path"
                name="image-path"
                accept="image/png, image/jpeg"
            />
        </div>
    );
};

export default MyImagePicker;
