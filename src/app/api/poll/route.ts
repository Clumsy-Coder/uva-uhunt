import { fetchLiveSubmissionsUrl } from "@/utils/constants"

export const GET = async () => {
  const url = fetchLiveSubmissionsUrl()

  const response = await fetch(url)
  const data = await response.json();

  return Response.json(data)
}
