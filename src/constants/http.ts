export class HttpCodes {
	static get SUCCESS() {
		return 200
	}

	static get BAD_REQUEST() {
		return 400
	}

	static get UNAUTHORIZED() {
		return 401
	}

	static get UNAUTHORIZED_LOGOUT() {
		return 418
	}

	static get NOT_FOUND() {
		return 404
	}

	static get AWAITING_LIBERATION() {
		return 419
	}

	static get APPLICATION_EXCEPTION() {
		return 420
	}

	static get INTERNAL_SERVER_ERROR() {
		return 500
	}
}
