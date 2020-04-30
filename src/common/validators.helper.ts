// validators ./common/validators.helper.ts

export function isFilledArray (value: any): boolean {
  return (value !== null && Array.isArray(value) && value.length > 0);
}

export function isFilledString (value: any): boolean {
  return (typeof value === "string" && value.length > 0);
}