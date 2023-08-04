import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  if (request.body) {
    const body = await request.json();

    console.log("Revalidating", body.entityId);

    if (body.entityId) {
      revalidateTag(body.entityId);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }
  }
}
