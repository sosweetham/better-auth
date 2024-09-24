import type { APIRoute } from "astro";
import { auth } from "../../../auth";

export const GET: APIRoute = async (ctx) => {
	return auth.handler(ctx.request);
};

export const POST: APIRoute = async (ctx) => {
	return auth.handler(ctx.request);
};
