const sanitize = (input) => {
  if (typeof input === "object") {
    return JSON.stringify(input);
  } else {
    return input;
  }
}

const sanitizeVariableType = (input, type) => {
  if (type === "list") {
      const sanitizedList = [];
      for (const item of input) {
        sanitizedList.push(sanitize(item));
      }
      return sanitizedList;
  } else {
      return sanitize(input);
  }
}

module.exports = {
  sanitize,
  sanitizeVariableType
}