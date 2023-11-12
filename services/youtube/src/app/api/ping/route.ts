import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log('req', request);

  return Response.json({
    value: 'pong~!@#',
  });
}

export const POST = async (request: NextRequest) => {
  const requestBody = await request.json();

  return Response.json({
    value: 'pong~!@#',
    data: requestBody,
  });
}
