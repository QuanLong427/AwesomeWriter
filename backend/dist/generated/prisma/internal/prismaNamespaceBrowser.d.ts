import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Project: "Project";
    readonly Chapter: "Chapter";
    readonly Scene: "Scene";
    readonly Character: "Character";
    readonly Script: "Script";
    readonly ConversionJob: "ConversionJob";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly username: "username";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly content: "content";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const ChapterScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly number: "number";
    readonly title: "title";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum];
export declare const SceneScalarFieldEnum: {
    readonly id: "id";
    readonly chapterId: "chapterId";
    readonly number: "number";
    readonly location: "location";
    readonly time: "time";
    readonly content: "content";
    readonly scriptFormat: "scriptFormat";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SceneScalarFieldEnum = (typeof SceneScalarFieldEnum)[keyof typeof SceneScalarFieldEnum];
export declare const CharacterScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum];
export declare const ScriptScalarFieldEnum: {
    readonly id: "id";
    readonly projectId: "projectId";
    readonly title: "title";
    readonly content: "content";
    readonly format: "format";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ScriptScalarFieldEnum = (typeof ScriptScalarFieldEnum)[keyof typeof ScriptScalarFieldEnum];
export declare const ConversionJobScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly projectId: "projectId";
    readonly status: "status";
    readonly input: "input";
    readonly output: "output";
    readonly error: "error";
    readonly createdAt: "createdAt";
    readonly completedAt: "completedAt";
};
export type ConversionJobScalarFieldEnum = (typeof ConversionJobScalarFieldEnum)[keyof typeof ConversionJobScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map