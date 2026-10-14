import { useQuery } from "@tanstack/react-query"

import { request } from "@/api/client"
import type { RecentDeveloper } from "@/api/types"

export const developerKeys = {
  recent: ["developers", "recent"] as const,
}

export function useRecentDevelopers() {
  return useQuery({
    queryKey: developerKeys.recent,
    queryFn: async () =>
      (await request<RecentDeveloper[]>("/developers/recent")).data,
  })
}
