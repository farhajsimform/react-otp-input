import React, { FC, useRef, useState } from "react";
import ReactAvatarEditor from "react-avatar-editor";

export const ImageCropperComponent: FC = (): JSX.Element => {
  const setEditorRef = useRef<any>(null);
  const [scale, setScale] = useState<number>(1);
  const [image, setImage] = useState<string>("avatar.jpg");
  const handleNewImage = (e: React.ChangeEvent<any>) => {
    setImage(e.target.files[0]);
  };
  const handleScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };

  const handleSave = async () => {
    const result = await setEditorRef?.current?.getImage()?.toDataURL();
    // Here we will buffer of image
    console.log("result =>>>", result);
  };

  return (
    <div>
      <div>
        <ReactAvatarEditor
          ref={setEditorRef}
          scale={scale}
          width={300}
          height={300}
          rotate={0}
          border={25}
          image={image}
          className="editor-canvas"
        />
        <br />
        New File:
        <input name="newImage" type="file" onChange={handleNewImage} />
        <br />
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={(e) => handleScale(e)}
          min={"1"}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <br />
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};
