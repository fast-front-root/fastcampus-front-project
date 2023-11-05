import { putImageFile } from "@/src/apis/r2/putImageFile";
import { Text, Flex } from "@fastcampus/react-components-layout";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

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
  const { randomUUID } = new ShortUniqueId({ length: 4 });
  const [uuid] = useState(randomUUID());

  const [imageURL, setImageURL] = useState(defaultValue);

  const handleInputFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (file && file.type.match("image.*")) {
      try {
        const { randomUUID } = new ShortUniqueId({ length: 20 });
        const fileName = randomUUID();

        const imageURL = await putImageFile({
          fileName,
          file,
        });

        setImageURL(imageURL);
        onChange?.(imageURL);
      } catch {
        console.error("이미지 업로드 실패");
      }
    }
  };

  return (
    <label htmlFor={`imageFile-${uuid}`}>
      <input
        type="file"
        id={`imageFile-${uuid}`}
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
          <img
            src={imageURL}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <Text color="gray" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Flex>
    </label>
  );
};
