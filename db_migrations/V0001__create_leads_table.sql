CREATE TABLE IF NOT EXISTS t_p16904528_exotarium_kulakovykh.leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);