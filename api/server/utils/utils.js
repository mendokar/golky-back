class Util {
constructor() {
        this.success = false;
        this.origin = "";
        this.process = "0";
        this.status = undefined;
        this.message = "Failed transaction";
        this.response = undefined;
        this.token = null;
    }
    setSuccess(success) {
        this.success = success;
        return this;
    }
    setOrigen(origin) {
        this.origin = origin;
        return this;
    }
    setProcess(process) {
        this.process = process;
        return this;
    }
    setStatus(status) {
        this.status = status;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setResponse(response) {
        this.response = response;
        return this;
    }
    setToken(token) {
        this.token = token;
        return this;
    }
    build() {
        return {
            success: this.success,
            origin: this.origin,
            process: this.process,
            status: this.status,
            message: this.message ||
                (this.success ? "Execution successfully" : "Failed transaction"),
            token: this.token,
            response: this.response
        };
    }
  }

  module.exports = {Util}