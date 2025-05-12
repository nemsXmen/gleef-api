import { Injectable } from "@nestjs/common";
import { Prisma ,TranslationKey} from "generated/prisma";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class TranslationKeyService {
    constructor(private readonly prisma: PrismaService) {}

    async  translationKeys(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TranslationKeyWhereUniqueInput;
        where?: Prisma.TranslationKeyWhereInput;
        orderBy?: Prisma.TranslationKeyOrderByWithRelationInput;
    }): Promise<TranslationKey[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.translationKey.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
}