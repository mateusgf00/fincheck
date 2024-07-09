import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BankAccountRepository {
  constructor(private readonly prismaService: PrismaService) {}
  create(createDto: Prisma.BankAccountCreateArgs) {
    return this.prismaService.bankAccount.create(createDto);
  }

  findMany(findManyDto: Prisma.BankAccountFindManyArgs){
    return this.prismaService.bankAccount.findMany(findManyDto);
  }

  findFirst(findFirstDto: Prisma.BankAccountFindFirstArgs){
    return this.prismaService.bankAccount.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.BankAccountUpdateArgs){
    return this.prismaService.bankAccount.update(updateDto);
  
  }
  delete(deleteDto: Prisma.BankAccountDeleteArgs){
    return this.prismaService.bankAccount.delete(deleteDto);
  }

}
