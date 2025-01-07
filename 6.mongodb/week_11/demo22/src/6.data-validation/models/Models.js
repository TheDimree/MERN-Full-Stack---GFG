import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, "Name is required"], // Custom error message
            minLength: [3, "Name must be at least 3 characters long"],
            maxLength: [50, "Name cannot exceed 50 characters"]
        },
        email: { 
            type: String, 
            unique: true, 
            required: [true, "Email is required"], 
            match: [/.+\@.+\..+/, "Please enter a valid email address"] // Regex validation
        },
        age: { 
            type: Number, 
            min: [18, "Age must be at least 18"], 
            max: [100, "Age cannot exceed 100"], 
            required: true 
        },
        gender: { 
            type: String, 
            enum: {
                values: ["Male", "Female", "Other"],
                message: "Gender must be either 'Male', 'Female', or 'Other'"
            },
            required: true
        },
        status: {
            type: String,
            default: "Active",
            enum: ["Active", "Inactive", "Suspended"], // Predefined set of values
            required: true
        },
        phoneNumber: {
            type: String,
            match: [/^\d{10}$/, "Phone number must be exactly 10 digits"], // Regex for 10-digit phone number
            required: [true, "Phone number is required"]
        },
        address: {
            street: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: {
                type: String,
                match: [/^\d{6}$/, "Postal code must be a valid 6-digit number"], // Regex for 6-digit postal code
                required: true
            }
        },
        hobbies: {
            type: [String], // Array of strings
            validate: {
                validator: function (v) {
                    return v && v.length > 0; // At least one hobby required
                },
                message: "At least one hobby must be specified"
            }
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("s_12-user_validation", UserSchema);

export default UserModel;