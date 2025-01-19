// src/utils/resendClient.ts
import { Resend } from 'resend';
import logger from './logger';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a budget exceeded notification email.
 * @param email - The recipient's email address.
 * @param budget - The budget amount.
 * @param expenses - The total expenses.
 */
export const sendBudgetExceededNotification = async (
  email: string,
  budget: number,
  expenses: number
): Promise<void> => {
  try {
    await resend.emails.send({
      from: 'budget@resend.dev',
      to: email,
      subject: 'Budget Exceeded',
      html: `<p>Your budget of <strong>${budget}</strong> has been exceeded. Total expenses: <strong>${expenses}</strong>.</p>`,
    });
    logger.info('Budget exceeded notification sent successfully');
  } catch (error) {
    logger.error('Failed to send budget exceeded notification:', error);
    throw new Error('Failed to send budget exceeded notification');
  }
};
