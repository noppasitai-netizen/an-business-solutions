export const dynamic = "force-dynamic";

export async function GET() {
  const commit =
    process.env.HOSTINGER_GIT_COMMIT_SHA ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.GITHUB_SHA ??
    "unknown";

  return Response.json(
    {
      app: "an-business-solutions",
      commit,
      checkedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    },
  );
}
