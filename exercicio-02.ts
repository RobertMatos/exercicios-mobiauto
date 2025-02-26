function updateData<T extends Record<string, any>>(currentObject: T, newDataObject: Partial<T>): T {
    return Object.keys(currentObject).reduce((acc, key) => {
      return {
        ...acc,
        [key]: key in newDataObject ? newDataObject[key] : currentObject[key]
      };
    }, { ...currentObject });
  }
  
  export default updateData;
  