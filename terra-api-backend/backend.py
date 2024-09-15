import logging

import flask
from flask import request
from terra.base_client import Terra

logging.basicConfig(level=logging.INFO)

_LOGGER = logging.getLogger("app")

app = flask.Flask(__name__)

webhook_secret = "eb096f329ef9de0144b29f3749c733892d448780d0bc8216"
dev_id = "hackharvard-testing-YKiLVT7N6z"
api_key = "hEUAjiSyQbVYYbqqZNCP20MyNYUgKJbD"

terra = Terra(api_key=api_key, dev_id=dev_id, secret=webhook_secret)

@app.route("/consumeTerraWebhook", methods=["POST"])
def consume_terra_webhook():
    print("Consumed")
    body = request.get_json()

    verified = terra.check_terra_signature(request.data.decode('utf-8'), request.headers['terra-signature'])
    print(verified)

    if not verified:
        _LOGGER.info("NO")
        return flask.Response(status=403)


    _LOGGER.info("Recieved Terra Webhook: %s", body)

    return flask.Response(status=200)


@app.route('/authenticate', methods=["GET"])
def authenticate():
    return terra.generate_widget_session(providers=["APPLE"],reference_id="1234").get_json()


if __name__ == "__main__":
    app.run(debug=True)