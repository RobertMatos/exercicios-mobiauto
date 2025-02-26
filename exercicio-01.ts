function maskify(string: string): string {
    if (string.length <= 4) return string;
    return "#".repeat(string.length - 4) + string.slice(-4);
  }
  
  export default maskify;
  