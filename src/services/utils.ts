export function unflatten(data: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
  
    for (const flatKey in data) {
      const keys = flatKey.split('.');
      keys.reduce((acc, key, index) => {
        if (index === keys.length - 1) {
          acc[key] = data[flatKey];
          return;
        }
        if (!acc[key]) {
          acc[key] = {};
        }
        return acc[key];
      }, result);
    }
    
    return result;
  }
  