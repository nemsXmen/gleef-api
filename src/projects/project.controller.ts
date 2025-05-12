import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.create.dto";

@Controller("api/projects")
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Get()
    async findAll() {
        return this.projectService.projects({
            skip: 0,
            take: 10,
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        return this.projectService.project({
            id: +id,
        });
    }

    @Post()
    async create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.createProject({
            name: createProjectDto.name,
            description: createProjectDto.description,
        });
    }
}