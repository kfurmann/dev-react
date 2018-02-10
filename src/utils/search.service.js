/**
 * returns true is it found a string in any property value of given object
 * @param obj
 * @param query
 * @returns {boolean}
 */
export function searchInProperties(obj, query) {

  return Object.keys(obj)
      .some((key) => {

        if(obj[key] !== null && typeof obj[key] === 'object') {

          return searchInProperties(obj[key], query)
        }

        return (typeof obj[key] === 'string') &&
            obj[key].toUpperCase().includes(query.toUpperCase());
      });
}