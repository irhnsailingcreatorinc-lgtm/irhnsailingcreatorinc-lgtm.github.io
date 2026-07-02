"""Backend tests for Nicole's AI Studio - Waitlist API"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://emergent-ai-app-9.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def _rand_email():
    return f"test_{uuid.uuid4().hex[:10]}@example.com"


# ---- Health ----
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "online"


# ---- Waitlist ----
class TestWaitlist:
    def test_count_endpoint(self, client):
        r = client.get(f"{API}/waitlist/count")
        assert r.status_code == 200
        assert isinstance(r.json().get("count"), int)

    def test_create_valid_and_count_increments(self, client):
        pre = client.get(f"{API}/waitlist/count").json()["count"]
        email = _rand_email()
        r = client.post(f"{API}/waitlist", json={"email": email, "interest": "TEST_marketplace"})
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["email"] == email
        assert data["interest"] == "TEST_marketplace"
        assert isinstance(data["position"], int)
        assert data["position"] == pre + 1
        assert "id" in data

        post = client.get(f"{API}/waitlist/count").json()["count"]
        assert post == pre + 1

    def test_duplicate_email_returns_409(self, client):
        email = _rand_email()
        r1 = client.post(f"{API}/waitlist", json={"email": email})
        assert r1.status_code == 200
        r2 = client.post(f"{API}/waitlist", json={"email": email})
        assert r2.status_code == 409
        assert "already" in r2.json().get("detail", "").lower()

    def test_invalid_email_returns_422(self, client):
        r = client.post(f"{API}/waitlist", json={"email": "not-an-email"})
        assert r.status_code == 422

    def test_case_insensitive_duplicate(self, client):
        email = _rand_email()
        r1 = client.post(f"{API}/waitlist", json={"email": email})
        assert r1.status_code == 200
        r2 = client.post(f"{API}/waitlist", json={"email": email.upper()})
        assert r2.status_code == 409
