import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { r2Instance } from ".";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import { CDN_BASE_URL } from "@/src/constants";

type Params = {
  file: File,
  fileName: string,
};

export const putImageFile = async ({ file, fileName }: Params) => {
  const key = `images/${fileName}`;

  try {
    const url = await getSignedUrl(r2Instance, new PutObjectCommand({
      Bucket: "fastcampus-front-project",
      Key: key,
      Body: file,
      ContentType: file.type,
      ACL: "public-read", // public-read 설정 시 파일이 공개되어 URL로 접근 가능
    }), { expiresIn: 3600 });

    await axios.put(url, file);

    return `${CDN_BASE_URL}/${key}`;
  } catch {
    throw new Error("이미지 업로드에 실패했습니다.");
  }
};
