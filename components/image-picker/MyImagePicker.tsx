const MyImagePicker = () => {
    return (
        <>
            <label htmlFor="image-path">Upload</label>
            <div>
                <input
                    type="file"
                    id="image-path"
                    name="image-path"
                    accept="image/png, image/jpeg"
                />
            </div>
        </>
    );
};

export default MyImagePicker;
