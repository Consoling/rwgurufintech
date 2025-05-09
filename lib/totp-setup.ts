
import { authenticator } from 'otplib';
import QRCode from 'qrcode';

export default async function generateTotpSetup(clerkUserId: string) {
  // 1. Create a unique secret
  const secret = authenticator.generateSecret();

  // 2. Create a TOTP URI (compatible with Google Authenticator)
  const otpauth = authenticator.keyuri(clerkUserId, 'RW Guru Fintech', secret);

  // 3. Generate a data URL for the QR code
  const qrCodeUrl = await QRCode.toDataURL(otpauth);

  return { secret, qrCodeUrl };
}
