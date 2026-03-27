export type FilterQuery = Record<
  string,
  string | number | undefined | null
>;

export function buildFilterHref(
  pathname: string,
  query: FilterQuery
): string {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      params.set(key, String(value));
    }
  });

  const queryString = params.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
}