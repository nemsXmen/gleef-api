import { Injectable } from "@nestjs/common";
import { Prisma, Project } from "generated/prisma";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class ProjectService {
    constructor(private readonly prisma: PrismaService) {}

    async project(projectWhereUniqueInput: Prisma.ProjectWhereUniqueInput): Promise<Project | null> {
        return this.prisma.project.findUnique({
            where: projectWhereUniqueInput,
        });
    }

    async projects(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.ProjectWhereUniqueInput;
        where?: Prisma.ProjectWhereInput;
        orderBy?: Prisma.ProjectOrderByWithRelationInput;
    }): Promise<Project[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.project.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async countProjects(where?: Prisma.ProjectWhereInput): Promise<number> {
        return this.prisma.project.count({
            where,
        });
    }

    async createProject(data: Prisma.ProjectCreateInput): Promise<Project> {
        return this.prisma.project.create({
            data,
        });
    }
}