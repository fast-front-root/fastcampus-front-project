import { vars } from "@fastcampus/themes";
import { getVideosPopularList } from "@/src/features/main/api/getVideosPopularList";

export const VideosPopularList = async () => {
  const data = await getVideosPopularList({});

  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>{data.lists?.[0].title}</p>
    </section>
  );
};
