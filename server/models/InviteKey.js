import mongoose from 'mongoose';

const inviteKeySchema = new mongoose.Schema({
  key: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const InviteKey = mongoose.model('InviteKey', inviteKeySchema);

export default InviteKey;