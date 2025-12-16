Wallet Service API (NestJS)

///  Overview
A simple wallet service built with NestJS and TypeScript as part of a backend take-home assessment.

/// Tech Stack
- NestJS
- TypeScript
- In-memory storage (Map)

/// Setup Instructions
1. Clone the repository
2. Navigate to the backend folder
3. Install dependencies
   npm install
4. Start the server
   npm run start:dev
5. API runs on http://localhost:3000

/// API Endpoints
- POST /wallets – Create wallet
- POST /wallets/:id/fund – Fund wallet
- POST /wallets/transfer – Transfer funds
- GET /wallets/:id – Fetch wallet details

/// Postman Collection
A Postman collection is included in the repository for easy API testing.
Import the collection, set the base_url variable, and run the requests in order.

/// Assumptions
- Only USD currency is supported
- In-memory storage resets on application restart
- No authentication required

/// Scaling Notes
For production:
- Replace in-memory storage with a database (Postgres)
- Add database transactions for transfers
- Introduce idempotency keys
- Add authentication and authorization
