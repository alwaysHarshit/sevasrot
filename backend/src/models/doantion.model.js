import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		lowercase: true
	},
	phone: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	transactionId: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
},{timestamps: true});

export const Donation = mongoose.model("Donation", donationSchema);