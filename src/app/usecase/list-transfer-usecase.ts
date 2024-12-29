import { TransferDoesNotExist } from "../../shared/error/transfer-does-not-exist-error";
import { TransferRepository } from "../repository";

export class ListTransferUseCase {
  constructor(private readonly repository: TransferRepository) {}

  async execute(id: string) {
    const transfer = await this.repository.listTransferById(id);
    
    if (!transfer) {
      throw new TransferDoesNotExist();
    }

    return { transfer };
  }
}