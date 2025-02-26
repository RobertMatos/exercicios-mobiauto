function checkIfTheFirstLetterIsUppercase(word: string): boolean {
    if (!word) return false;
    return /^[A-Z]/.test(word);
  }
  
  export default checkIfTheFirstLetterIsUppercase;
  