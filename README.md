# codewithalok

🚀 ## Setup Instructions
### 1. Create a Python Virtual Environment

You can create a virtual environment using either of the following methods:

Using virtualenv:

    virtualenv env --python=python3


Using venv (Python 3+):

    python3 -m venv env


Activate the environment:

On Windows:

    env\Scripts\activate


On macOS/Linux:

    source env/bin/activate

### 2. Install Required Dependencies

Install all dependencies listed in requirements.txt:

    pip install -r requirements.txt

### 3. Generate Keys for JWT

To securely sign JWTs, you need a pair of private and public RSA keys.

You can either:

Run the provided Python script gen_key.py, or

Use the OpenSSL commands below:

Generate a 2048-bit private key:

    openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048


Extract the public key:

    openssl rsa -pubout -in private.pem -out public.pem


⚠️ Important: Store private.pem and public.pem files securely and do not commit them to version control.

### 4. Create PostgreSQL Database

Create a PostgreSQL database named authdb:

    CREATE DATABASE authdb;


Then, update your database connection string in the project configuration (e.g., .env or settings.py) with your PostgreSQL credentials.

Example connection URL:

postgresql://<username>:<password>@localhost:5432/authdb

### 5. Run the Application

Start the FastAPI application using Uvicorn:

    uvicorn main:app --reload


The application will now be available at:
👉 http://localhost:8000

🧠 ## Additional Notes

Ensure your PostgreSQL instance is running and accessible.

You can customize the JWT authentication logic to fit your application’s requirements.

The HTML templates can be modified to match your front-end design.

🛠️ ## Tech Stack

FastAPI – Web framework

PostgreSQL – Database

SQLAlchemy – ORM

JWT (JSON Web Token) – Authentication mechanism