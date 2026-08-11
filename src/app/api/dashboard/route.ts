import { getDashboard } from "@/lib/dashboard";

export const revalidate = 1800;

export async function GET() {
  const data = await getDashboard();
  return Response.json(data);
}
