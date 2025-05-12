# EXPLANATIONS.md

## Front-end and Back-end Architecture

The project uses a **modular front-end/back-end separation**, with the front-end built using Next.js  and the back-end powered by NestJS. This choice enables clean separation of concerns, easier testing, and scalability. The front-end communicates with the back-end through a REST API and leverages `react-hook-form` for managing form state efficiently.

The back-end uses Prisma as the ORM for type-safe and efficient database operations, following a domain-driven approach where each feature is encapsulated in its module.

Use of `zod` for type-safety

## Typing 

**TypeScript** is used across both the front-end and back-end to enforce strong typing, catch errors at compile time, and improve developer experience. On the back-end, types are automatically inferred from the Prisma schema, reducing duplication.

## Data Model
The core data model is centered around `TranslationKey` and `Translation`, with a compound unique constraint on `(projectId, key)` to ensure unique keys per project. This allows efficient upserts and supports multilingual values per key. we can see the model in the `prisma/schema.prisma` file.

```prisma
model Translation {
  id        String   @id @default(uuid())
  projectId String
  key       String
  value     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model TranslationKey {
  id        String   @id @default(uuid())
  projectId String
  key       String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Challenges
- Ensuring react-hook-form's useFieldArray stayed in sync with watch() and setValue() after dynamic file imports.
- Handling translation flattening/unflattening while maintaining structure integrity. 
- Prisma's upsert with compound keys required careful structure of the where clause.
- UI for managing translation keys and values.
- Designing the right Schema used for react-hook-form to handle translations and translation keys.


## What Would I Do Differently
 - Use a UI  framework for front-end
 - create a reppository for schema then  back-end end front-end will use the same schema

## Suggested Features for the Next Iteration
 - History/versioning of translation changes
 - Role-based access control for collaborative editing
 - Real-time translation collaboration using WebSockets