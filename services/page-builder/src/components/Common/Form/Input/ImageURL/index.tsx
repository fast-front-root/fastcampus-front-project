import { Text, Flex } from "@fastcampus/react-components-layout";
import { useState } from "react";

export type ImageURLInputProps = {
  defaultValue?: string; // 이미 업로드 된 것이 있다면 url을 넘겨 받을 수 있게
  onChange?: (value: string) => void; // URL이 R2 버킷에 업로드 되면 onChange를 통해 url을 넘겨준다.
  placeholder?: string;
};

export const ImageURLInput = ({
  defaultValue,
  onChange,
  placeholder = "이미지 선택",
}: ImageURLInputProps) => {
  const [imageURL, setImageURL] = useState(defaultValue);

  const handleInputFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file && file.type.match("image.*")) {
      console.log(file); // R2 버킷에 업로드를!! 성공. response에 받은 URL을 onChange에 전달해준다.
    }
  };

  return (
    <label htmlFor="imageFile">
      <input
        type="file"
        id="imageFile"
        accept=".png, .jpg, .jpeg, .webp"
        style={{ display: "none" }}
        onChange={handleInputFileChange}
      />
      <Flex
        justify="center"
        align="center"
        borderRadius="lg"
        background="gray"
        style={{
          width: "240px",
          height: "180px",
          cursor: "pointer",
        }}
      >
        {imageURL ? (
          ""
        ) : (
          <Text color="gray" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Flex>
    </label>
  );
};
