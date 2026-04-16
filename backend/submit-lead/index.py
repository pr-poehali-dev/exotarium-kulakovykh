import json
import os
import urllib.request
import urllib.parse
import psycopg2


def send_email(name: str, phone: str, message: str):
    """Отправляет уведомление о новой заявке через Mail.ru API."""
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    notify_email = os.environ["NOTIFY_EMAIL"]

    subject = f"Новая заявка с сайта — {name}"
    body_text = f"Новая заявка с сайта Экзотариума Кулаковых\n\nИмя: {name}\nТелефон: {phone}\nСообщение: {message or '—'}"

    data = urllib.parse.urlencode({
        "email": smtp_user,
        "password": smtp_password,
        "from": smtp_user,
        "to": notify_email,
        "subject": subject,
        "body": body_text,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://appsmail.ru/platform/send_mail",
        data=data,
        method="POST",
    )
    req.add_header("Content-Type", "application/x-www-form-urlencoded")

    with urllib.request.urlopen(req, timeout=10) as resp:
        result = resp.read().decode("utf-8")
        print(f"Mail.ru API response: {result}")


def handler(event: dict, context) -> dict:
    """Принимает заявку из формы обратной связи, сохраняет в БД и отправляет письмо на почту."""
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
        send_email(name, phone, message)
    except Exception as e:
        print(f"Email send error: {e}")

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"ok": True, "id": lead_id}),
    }
