import * as s from './style.css';
import { PopularListItem } from "@/src/features/main/api/getVideosPopularList";
import { getVideoDetailPageLink } from '@/src/shared/utils/link/page';
import Link from "next/link";
import { useState } from 'react';

type Props = {
  video: PopularListItem;
};

export const VideosPopularListItem = ({ video }: Props) => {
  const {
    videoId,
    title,
    thumbnail,
    channelTitle,
    viewCountDisplayText,
    publishedAtDisplayText,
  } = video;

  // 성능이슈 대응용
  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <div className={s.wrapper}>
      <Link
        href={getVideoDetailPageLink({ videoId })}
        className={s.link}
        onPointerEnter={() => {
          setActiveVideo(true);
        }}
        onPointerLeave={() => {
          setActiveVideo(false);
        }}
      >
        <div className={s.thumbnailWrapper}>
          <img
            className={s.image}
            width={thumbnail.width}
            height={thumbnail.height}
            src={thumbnail.url}
            alt={title}
          />
          {activeVideo && (
            <iframe
              className={s.video}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1`}
            />
          )}
        </div>
        <div className={s.contentsWrapper}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.metadataWrapper}>
            <p className={s.metadataLinkText}>{channelTitle}</p>
            <p className={s.metadataText}>
              <span>조회수 {viewCountDisplayText}회</span> •{" "}
              <span>{publishedAtDisplayText}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
