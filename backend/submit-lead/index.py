import json
import os
import smtplib
import psycopg2
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(name: str, phone: str, message: str):
    """Отправляет уведомление о новой заявке на почту."""
    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ["SMTP_PORT"])
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    notify_email = os.environ["NOTIFY_EMAIL"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = smtp_user
    msg["To"] = notify_email

    text = f"Новая заявка с сайта Экзотариума Кулаковых\n\nИмя: {name}\nТелефон: {phone}\nСообщение: {message or '—'}"
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px;">
      <h2 style="color: #2d7a4f;">Новая заявка с сайта</h2>
      <table style="width:100%; border-collapse:collapse;">
        <tr><td style="padding:8px; color:#666;">Имя</td><td style="padding:8px; font-weight:bold;">{name}</td></tr>
        <tr style="background:#f9f9f9;"><td style="padding:8px; color:#666;">Телефон</td><td style="padding:8px; font-weight:bold;"><a href="tel:{phone}">{phone}</a></td></tr>
        <tr><td style="padding:8px; color:#666;">Сообщение</td><td style="padding:8px;">{message or '—'}</td></tr>
      </table>
    </div>
    """

    msg.attach(MIMEText(text, "plain", "utf-8"))
    msg.attach(MIMEText(html, "html", "utf-8"))

    if smtp_port == 465:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, notify_email, msg.as_string())
    else:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, notify_email, msg.as_string())


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
