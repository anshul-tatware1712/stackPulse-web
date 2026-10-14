import { useMutation, useQueryClient } from "@tanstack/react-query"

import { request } from "@/api/client"
import type { SavedComparison } from "@/api/types"

export const comparisonKeys = {
  list: ["comparisons"] as const,
  detail: (id: number | string) => ["comparisons", String(id)] as const,
}

export interface CreateComparisonInput {
  name: string
  usernames: string[]
}

export function useCreateComparison() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (input: CreateComparisonInput) =>
      (
        await request<SavedComparison>("/comparisons", {
          method: "POST",
          body: input,
        })
      ).data,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: comparisonKeys.list }),
  })
}
