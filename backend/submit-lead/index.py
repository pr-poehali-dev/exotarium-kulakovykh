import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Принимает заявку из формы обратной связи и сохраняет в БД."""
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
            "body": {"error": "Имя и телефон обязательны"},
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

    return {
        "statusCode": 200,
        "headers": cors,
        "body": {"ok": True, "id": lead_id},
    }