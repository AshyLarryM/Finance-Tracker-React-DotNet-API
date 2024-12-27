# Project README: Running the Project with Docker

## Overview
This project consists of a frontend, an API backend, and a SQL Server database, all containerized using Docker. The setup ensures the application can be easily run and tested locally with minimal configuration.

---

## Prerequisites

Before you start, ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop) (Docker Desktop for Windows/Mac or Docker Engine for Linux)
- [Git](https://git-scm.com/)

---

## Clone the Repository

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

---

## Environment Configuration

1. Create a `.env` file in the root of the repository. Use the provided `.env.example` as a template:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your specific values:
   ```env
   SA_PASSWORD=YourStrongPassword
   JWT_SIGNING_KEY=YourSuperSecretKey
   FMP_KEY=YourFMPKey
   ```

---

## Running the Project with Docker

1. Build and start the containers:
   ```bash
   docker-compose up --build
   ```

2. Access the application:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **API**: [http://localhost:7087](http://localhost:7087)

3. Verify the database:
   - Connect to the database using any SQL client (e.g., Azure Data Studio).
   - Host: `localhost`
   - Port: `1433`
   - User: `sa`
   - Password: The password defined in your `.env` file (`SA_PASSWORD`).

---

## Services Overview

### 1. Frontend
- **Location**: `./frontend`
- **Port**: `3000`
- **Description**: React-based frontend for the application.

### 2. API
- **Location**: `./api`
- **Port**: `7087`
- **Description**: .NET Core API backend providing data and authentication services.

### 3. SQL Server
- **Image**: `mcr.microsoft.com/mssql/server:2022-latest`
- **Port**: `1433`
- **Description**: SQL Server database for storing application data.
- **Initialization**: Automatically creates the `FinanceApp` database using the `init.sql` script.

---

## Stopping the Project

To stop and remove all containers:
```bash
docker-compose down
```

---

## Troubleshooting

### Common Issues

1. **Port Conflicts**:
   - If a port is already in use, update the `docker-compose.yml` file to use a different port.

2. **Database Connection Issues**:
   - Ensure the `SA_PASSWORD` in your `.env` file matches the password in the `docker-compose.yml` file.
   - Check if the SQL Server container is running and healthy.

3. **Environment Variable Errors**:
   - Ensure all required variables are defined in your `.env` file.

### Viewing Logs

To view logs for a specific service:
```bash
docker-compose logs <service-name>
```
- Replace `<service-name>` with `frontend`, `api`, or `sqlserver`.

---

## Additional Notes

- Ensure the `.env` file is not committed to version control to protect sensitive information.
- Update `appsettings.json` or other configuration files as needed for production environments.
- Contributions and pull requests are welcome!

