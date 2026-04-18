import json
import os
import urllib.request
import psycopg2


def send_telegram(name: str, phone: str, message: str):
    """Отправляет уведомление о новой заявке в Telegram."""
    token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    text = (
        f"🔔 Новая заявка!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"💬 Сообщение: {message or '—'}"
    )

    data = json.dumps({"chat_id": chat_id, "text": text}).encode("utf-8")
    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=data,
        headers={"Content-Type": "application/json"},
    )
    urllib.request.urlopen(req, timeout=10)


def handler(event: dict, context) -> dict:
    """Принимает заявку из формы, сохраняет в БД и отправляет уведомление в Telegram."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()
    message = (body.get("message") or "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors,
            "body": json.dumps({"error": "Имя и телефон обязательны"}),
        }

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    schema = os.environ.get("MAIN_DB_SCHEMA", "public")
    cur.execute(
        f"INSERT INTO {schema}.leads (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
        (name, phone, message or None),
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    try:
        send_telegram(name, phone, message)
    except Exception:
        pass

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": True, "id": lead_id}),
    }
