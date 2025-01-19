import { Request, Response } from 'express';
import { ReportService } from '../services/ReportService';

export class ReportController {
  private reportService: ReportService;

  constructor(reportService: ReportService) {
    this.reportService = reportService;
  }

  async generateReport(req: Request, res: Response): Promise<void> {
    const accountId = parseInt(req.params.accountId, 10);
    const { startDate, endDate } = req.query;

    const transactions = await this.reportService.generateReport(
      accountId,
      new Date(startDate as string),
      new Date(endDate as string)
    );
    res.status(200).json(transactions);
  }
}
