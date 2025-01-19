// src/utils/twoFactorAuth.ts
import speakeasy from 'speakeasy';
// import qrcode from 'qrcode';

export class TwoFactorAuth {
  static generateSecret(email: string): { secret: string; otpauthUrl: string } {
    const secret = speakeasy.generateSecret({
      name: `TaskForcePro:${email}`,
    });
    return {
      secret: secret.base32, // Store this in the database
      otpauthUrl: secret.otpauth_url || '', // Optional: For QR code generation
    };
  }

  static generateOTP(secret: string): string {
    return speakeasy.totp({
      secret,
      encoding: 'base32',
    });
  }

  static verifyOTP(secret: string, token: string): boolean {
    return speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 1, // Allow a 1-step window for time drift
    });
  }
}
