
class Metadata {
  constructor(code, message) {
    this.code = code;
    this.message = message;
    this.timestamp = new Date().toISOString();
  }
}
class Response {

  constructor(data = null, errors = [], metadata = null) {
    this.data = data;
    this.errors = errors;
    this.metadata = metadata;
  }
}

module.exports = { Response, Metadata };