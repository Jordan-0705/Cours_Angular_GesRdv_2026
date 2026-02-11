import { User } from "../core/models/user.model";

export const MOCK_USERS: User[] = [
    {
        id: 1,
        fullName: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
        role: "PATIENT"
    },
    {
        id: 2,
        fullName: "Dr. Smith",
        email: "dr.smith@example.com",
        password: "password123",
        role: "MEDECIN"
    },
    {
        id: 3,
        fullName: "Admin User",
        email: "admin@example.com",
        password: "password123",
        role: "ADMIN"
    },
    {
        id: 4,
        fullName: "Jane Doe",
        email: "jane.doe@example.com",
        password: "password123",
        role: "SECRETAIRE"
    }
];