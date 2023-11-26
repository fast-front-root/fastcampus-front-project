import { getMockVideosPopularList } from "@/src/features/main/api/getVideosPopularList.mock";
import { HttpHandler } from "msw";

export const handlers: HttpHandler[] = [getMockVideosPopularList];
