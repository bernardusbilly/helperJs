/**
 * To filter object with props that has undefined value
 * This was meant mostly for patch call
 */
export function generateObject(payload) {
  const result = {};
  Object.entries(payload).map(([key, value]) => {
    if (value !== undefined) {
      result[key] = value;
    }
  });
  return result;
}
