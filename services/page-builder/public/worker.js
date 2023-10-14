// Cloudflare Worker에서 사용하는 코드입니다.

/*
 * API는 총 4개입니다.
 * 1. GET /api/views : 모든 뷰의 목록을 가져옵니다.
 * 2. GET /api/views/:viewId : 특정 뷰의 값을 가져옵니다.
 * 3. PUT /api/views/:viewId : 특정 뷰의 값을 설정합니다.
 * 4. DELETE /api/views/:viewId : 특정 뷰의 값을 삭제합니다.
 */


const SUB_PATH = "/api/views";

const getViewId = (pathname) => {
  if (pathname.includes(`${SUB_PATH}/`)) {
    return pathname.split("/")[3];
  }

  return "";
};

const getResponseData = (data) =>
  new Response(
    JSON.stringify({
      status: 200,
      data,
    }),
    { headers: { "Content-Type": "application/json;charset=UTF-8" } },
  );

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    const { method } = request;

    if (method === "GET") {
      if (pathname === SUB_PATH) {
        const value = await env.KV_NAMESPACE.list();

        return getResponseData({
          keys: value.keys,
        });
      }

      const viewId = getViewId(pathname);
      if (viewId) {
        const { value, metadata } =
          await env.KV_NAMESPACE.getWithMetadata(viewId);

        if (!value) {
          return new Response("Value not found", { status: 404 });
        }

        return getResponseData({
          value,
          metadata,
        });
      }
    }

    if (method === "PUT") {
      const viewId = getViewId(pathname);
      if (viewId) {
        const body = await request.text();

        try {
          const parsedBody = JSON.parse(body);

          if (
            typeof parsedBody.value !== "string" ||
            typeof parsedBody.metadata !== "object"
          ) {
            return new Response("Error", { status: 500 });
          }

          await env.KV_NAMESPACE.put(viewId, parsedBody.value, {
            metadata: parsedBody.metadata,
          });

          return getResponseData({});
        } catch {
          return new Response("Error", { status: 500 });
        }
      }
    }

    if (method === "DELETE") {
      const viewId = getViewId(pathname);
      if (viewId) {
        try {
          await env.KV_NAMESPACE.delete(viewId);

          return getResponseData({});
        } catch {
          return new Response("Error", { status: 500 });
        }
      }
    }

    return new Response("Not Found", { status: 404 });
  },
};
