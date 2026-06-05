import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Scene
 *
 */
export type SceneModel = runtime.Types.Result.DefaultSelection<Prisma.$ScenePayload>;
export type AggregateScene = {
    _count: SceneCountAggregateOutputType | null;
    _avg: SceneAvgAggregateOutputType | null;
    _sum: SceneSumAggregateOutputType | null;
    _min: SceneMinAggregateOutputType | null;
    _max: SceneMaxAggregateOutputType | null;
};
export type SceneAvgAggregateOutputType = {
    number: number | null;
};
export type SceneSumAggregateOutputType = {
    number: number | null;
};
export type SceneMinAggregateOutputType = {
    id: string | null;
    chapterId: string | null;
    number: number | null;
    location: string | null;
    time: string | null;
    content: string | null;
    scriptFormat: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SceneMaxAggregateOutputType = {
    id: string | null;
    chapterId: string | null;
    number: number | null;
    location: string | null;
    time: string | null;
    content: string | null;
    scriptFormat: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SceneCountAggregateOutputType = {
    id: number;
    chapterId: number;
    number: number;
    location: number;
    time: number;
    content: number;
    scriptFormat: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SceneAvgAggregateInputType = {
    number?: true;
};
export type SceneSumAggregateInputType = {
    number?: true;
};
export type SceneMinAggregateInputType = {
    id?: true;
    chapterId?: true;
    number?: true;
    location?: true;
    time?: true;
    content?: true;
    scriptFormat?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SceneMaxAggregateInputType = {
    id?: true;
    chapterId?: true;
    number?: true;
    location?: true;
    time?: true;
    content?: true;
    scriptFormat?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SceneCountAggregateInputType = {
    id?: true;
    chapterId?: true;
    number?: true;
    location?: true;
    time?: true;
    content?: true;
    scriptFormat?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SceneAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Scene to aggregate.
     */
    where?: Prisma.SceneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scenes to fetch.
     */
    orderBy?: Prisma.SceneOrderByWithRelationInput | Prisma.SceneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SceneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scenes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Scenes
    **/
    _count?: true | SceneCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SceneAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SceneSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SceneMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SceneMaxAggregateInputType;
};
export type GetSceneAggregateType<T extends SceneAggregateArgs> = {
    [P in keyof T & keyof AggregateScene]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScene[P]> : Prisma.GetScalarType<T[P], AggregateScene[P]>;
};
export type SceneGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SceneWhereInput;
    orderBy?: Prisma.SceneOrderByWithAggregationInput | Prisma.SceneOrderByWithAggregationInput[];
    by: Prisma.SceneScalarFieldEnum[] | Prisma.SceneScalarFieldEnum;
    having?: Prisma.SceneScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SceneCountAggregateInputType | true;
    _avg?: SceneAvgAggregateInputType;
    _sum?: SceneSumAggregateInputType;
    _min?: SceneMinAggregateInputType;
    _max?: SceneMaxAggregateInputType;
};
export type SceneGroupByOutputType = {
    id: string;
    chapterId: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SceneCountAggregateOutputType | null;
    _avg: SceneAvgAggregateOutputType | null;
    _sum: SceneSumAggregateOutputType | null;
    _min: SceneMinAggregateOutputType | null;
    _max: SceneMaxAggregateOutputType | null;
};
export type GetSceneGroupByPayload<T extends SceneGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SceneGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SceneGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SceneGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SceneGroupByOutputType[P]>;
}>>;
export type SceneWhereInput = {
    AND?: Prisma.SceneWhereInput | Prisma.SceneWhereInput[];
    OR?: Prisma.SceneWhereInput[];
    NOT?: Prisma.SceneWhereInput | Prisma.SceneWhereInput[];
    id?: Prisma.StringFilter<"Scene"> | string;
    chapterId?: Prisma.StringFilter<"Scene"> | string;
    number?: Prisma.IntFilter<"Scene"> | number;
    location?: Prisma.StringFilter<"Scene"> | string;
    time?: Prisma.StringFilter<"Scene"> | string;
    content?: Prisma.StringFilter<"Scene"> | string;
    scriptFormat?: Prisma.StringFilter<"Scene"> | string;
    createdAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
};
export type SceneOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    scriptFormat?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    chapter?: Prisma.ChapterOrderByWithRelationInput;
};
export type SceneWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SceneWhereInput | Prisma.SceneWhereInput[];
    OR?: Prisma.SceneWhereInput[];
    NOT?: Prisma.SceneWhereInput | Prisma.SceneWhereInput[];
    chapterId?: Prisma.StringFilter<"Scene"> | string;
    number?: Prisma.IntFilter<"Scene"> | number;
    location?: Prisma.StringFilter<"Scene"> | string;
    time?: Prisma.StringFilter<"Scene"> | string;
    content?: Prisma.StringFilter<"Scene"> | string;
    scriptFormat?: Prisma.StringFilter<"Scene"> | string;
    createdAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
    chapter?: Prisma.XOR<Prisma.ChapterScalarRelationFilter, Prisma.ChapterWhereInput>;
}, "id">;
export type SceneOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    scriptFormat?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SceneCountOrderByAggregateInput;
    _avg?: Prisma.SceneAvgOrderByAggregateInput;
    _max?: Prisma.SceneMaxOrderByAggregateInput;
    _min?: Prisma.SceneMinOrderByAggregateInput;
    _sum?: Prisma.SceneSumOrderByAggregateInput;
};
export type SceneScalarWhereWithAggregatesInput = {
    AND?: Prisma.SceneScalarWhereWithAggregatesInput | Prisma.SceneScalarWhereWithAggregatesInput[];
    OR?: Prisma.SceneScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SceneScalarWhereWithAggregatesInput | Prisma.SceneScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    chapterId?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    number?: Prisma.IntWithAggregatesFilter<"Scene"> | number;
    location?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    time?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    scriptFormat?: Prisma.StringWithAggregatesFilter<"Scene"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Scene"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Scene"> | Date | string;
};
export type SceneCreateInput = {
    id?: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    chapter: Prisma.ChapterCreateNestedOneWithoutScenesInput;
};
export type SceneUncheckedCreateInput = {
    id?: string;
    chapterId: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SceneUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapter?: Prisma.ChapterUpdateOneRequiredWithoutScenesNestedInput;
};
export type SceneUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneCreateManyInput = {
    id?: string;
    chapterId: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SceneUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneListRelationFilter = {
    every?: Prisma.SceneWhereInput;
    some?: Prisma.SceneWhereInput;
    none?: Prisma.SceneWhereInput;
};
export type SceneOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SceneCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    scriptFormat?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SceneAvgOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type SceneMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    scriptFormat?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SceneMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    scriptFormat?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SceneSumOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type SceneCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput> | Prisma.SceneCreateWithoutChapterInput[] | Prisma.SceneUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.SceneCreateOrConnectWithoutChapterInput | Prisma.SceneCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.SceneCreateManyChapterInputEnvelope;
    connect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
};
export type SceneUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput> | Prisma.SceneCreateWithoutChapterInput[] | Prisma.SceneUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.SceneCreateOrConnectWithoutChapterInput | Prisma.SceneCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.SceneCreateManyChapterInputEnvelope;
    connect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
};
export type SceneUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput> | Prisma.SceneCreateWithoutChapterInput[] | Prisma.SceneUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.SceneCreateOrConnectWithoutChapterInput | Prisma.SceneCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.SceneUpsertWithWhereUniqueWithoutChapterInput | Prisma.SceneUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.SceneCreateManyChapterInputEnvelope;
    set?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    disconnect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    delete?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    connect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    update?: Prisma.SceneUpdateWithWhereUniqueWithoutChapterInput | Prisma.SceneUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.SceneUpdateManyWithWhereWithoutChapterInput | Prisma.SceneUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.SceneScalarWhereInput | Prisma.SceneScalarWhereInput[];
};
export type SceneUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput> | Prisma.SceneCreateWithoutChapterInput[] | Prisma.SceneUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.SceneCreateOrConnectWithoutChapterInput | Prisma.SceneCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.SceneUpsertWithWhereUniqueWithoutChapterInput | Prisma.SceneUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.SceneCreateManyChapterInputEnvelope;
    set?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    disconnect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    delete?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    connect?: Prisma.SceneWhereUniqueInput | Prisma.SceneWhereUniqueInput[];
    update?: Prisma.SceneUpdateWithWhereUniqueWithoutChapterInput | Prisma.SceneUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.SceneUpdateManyWithWhereWithoutChapterInput | Prisma.SceneUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.SceneScalarWhereInput | Prisma.SceneScalarWhereInput[];
};
export type SceneCreateWithoutChapterInput = {
    id?: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SceneUncheckedCreateWithoutChapterInput = {
    id?: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SceneCreateOrConnectWithoutChapterInput = {
    where: Prisma.SceneWhereUniqueInput;
    create: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput>;
};
export type SceneCreateManyChapterInputEnvelope = {
    data: Prisma.SceneCreateManyChapterInput | Prisma.SceneCreateManyChapterInput[];
    skipDuplicates?: boolean;
};
export type SceneUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.SceneWhereUniqueInput;
    update: Prisma.XOR<Prisma.SceneUpdateWithoutChapterInput, Prisma.SceneUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.SceneCreateWithoutChapterInput, Prisma.SceneUncheckedCreateWithoutChapterInput>;
};
export type SceneUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.SceneWhereUniqueInput;
    data: Prisma.XOR<Prisma.SceneUpdateWithoutChapterInput, Prisma.SceneUncheckedUpdateWithoutChapterInput>;
};
export type SceneUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.SceneScalarWhereInput;
    data: Prisma.XOR<Prisma.SceneUpdateManyMutationInput, Prisma.SceneUncheckedUpdateManyWithoutChapterInput>;
};
export type SceneScalarWhereInput = {
    AND?: Prisma.SceneScalarWhereInput | Prisma.SceneScalarWhereInput[];
    OR?: Prisma.SceneScalarWhereInput[];
    NOT?: Prisma.SceneScalarWhereInput | Prisma.SceneScalarWhereInput[];
    id?: Prisma.StringFilter<"Scene"> | string;
    chapterId?: Prisma.StringFilter<"Scene"> | string;
    number?: Prisma.IntFilter<"Scene"> | number;
    location?: Prisma.StringFilter<"Scene"> | string;
    time?: Prisma.StringFilter<"Scene"> | string;
    content?: Prisma.StringFilter<"Scene"> | string;
    scriptFormat?: Prisma.StringFilter<"Scene"> | string;
    createdAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Scene"> | Date | string;
};
export type SceneCreateManyChapterInput = {
    id?: string;
    number: number;
    location: string;
    time: string;
    content: string;
    scriptFormat: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SceneUpdateWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneUncheckedUpdateWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneUncheckedUpdateManyWithoutChapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    location?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    scriptFormat?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SceneSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterId?: boolean;
    number?: boolean;
    location?: boolean;
    time?: boolean;
    content?: boolean;
    scriptFormat?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scene"]>;
export type SceneSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterId?: boolean;
    number?: boolean;
    location?: boolean;
    time?: boolean;
    content?: boolean;
    scriptFormat?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scene"]>;
export type SceneSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chapterId?: boolean;
    number?: boolean;
    location?: boolean;
    time?: boolean;
    content?: boolean;
    scriptFormat?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["scene"]>;
export type SceneSelectScalar = {
    id?: boolean;
    chapterId?: boolean;
    number?: boolean;
    location?: boolean;
    time?: boolean;
    content?: boolean;
    scriptFormat?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SceneOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chapterId" | "number" | "location" | "time" | "content" | "scriptFormat" | "createdAt" | "updatedAt", ExtArgs["result"]["scene"]>;
export type SceneInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type SceneIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type SceneIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapter?: boolean | Prisma.ChapterDefaultArgs<ExtArgs>;
};
export type $ScenePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Scene";
    objects: {
        chapter: Prisma.$ChapterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        chapterId: string;
        number: number;
        location: string;
        time: string;
        content: string;
        scriptFormat: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["scene"]>;
    composites: {};
};
export type SceneGetPayload<S extends boolean | null | undefined | SceneDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScenePayload, S>;
export type SceneCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SceneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SceneCountAggregateInputType | true;
};
export interface SceneDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Scene'];
        meta: {
            name: 'Scene';
        };
    };
    /**
     * Find zero or one Scene that matches the filter.
     * @param {SceneFindUniqueArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SceneFindUniqueArgs>(args: Prisma.SelectSubset<T, SceneFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Scene that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SceneFindUniqueOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SceneFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SceneFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Scene that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SceneFindFirstArgs>(args?: Prisma.SelectSubset<T, SceneFindFirstArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Scene that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindFirstOrThrowArgs} args - Arguments to find a Scene
     * @example
     * // Get one Scene
     * const scene = await prisma.scene.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SceneFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SceneFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Scenes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scenes
     * const scenes = await prisma.scene.findMany()
     *
     * // Get first 10 Scenes
     * const scenes = await prisma.scene.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sceneWithIdOnly = await prisma.scene.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SceneFindManyArgs>(args?: Prisma.SelectSubset<T, SceneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Scene.
     * @param {SceneCreateArgs} args - Arguments to create a Scene.
     * @example
     * // Create one Scene
     * const Scene = await prisma.scene.create({
     *   data: {
     *     // ... data to create a Scene
     *   }
     * })
     *
     */
    create<T extends SceneCreateArgs>(args: Prisma.SelectSubset<T, SceneCreateArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Scenes.
     * @param {SceneCreateManyArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SceneCreateManyArgs>(args?: Prisma.SelectSubset<T, SceneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Scenes and returns the data saved in the database.
     * @param {SceneCreateManyAndReturnArgs} args - Arguments to create many Scenes.
     * @example
     * // Create many Scenes
     * const scene = await prisma.scene.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SceneCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SceneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Scene.
     * @param {SceneDeleteArgs} args - Arguments to delete one Scene.
     * @example
     * // Delete one Scene
     * const Scene = await prisma.scene.delete({
     *   where: {
     *     // ... filter to delete one Scene
     *   }
     * })
     *
     */
    delete<T extends SceneDeleteArgs>(args: Prisma.SelectSubset<T, SceneDeleteArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Scene.
     * @param {SceneUpdateArgs} args - Arguments to update one Scene.
     * @example
     * // Update one Scene
     * const scene = await prisma.scene.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SceneUpdateArgs>(args: Prisma.SelectSubset<T, SceneUpdateArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Scenes.
     * @param {SceneDeleteManyArgs} args - Arguments to filter Scenes to delete.
     * @example
     * // Delete a few Scenes
     * const { count } = await prisma.scene.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SceneDeleteManyArgs>(args?: Prisma.SelectSubset<T, SceneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SceneUpdateManyArgs>(args: Prisma.SelectSubset<T, SceneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Scenes and returns the data updated in the database.
     * @param {SceneUpdateManyAndReturnArgs} args - Arguments to update many Scenes.
     * @example
     * // Update many Scenes
     * const scene = await prisma.scene.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Scenes and only return the `id`
     * const sceneWithIdOnly = await prisma.scene.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends SceneUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SceneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Scene.
     * @param {SceneUpsertArgs} args - Arguments to update or create a Scene.
     * @example
     * // Update or create a Scene
     * const scene = await prisma.scene.upsert({
     *   create: {
     *     // ... data to create a Scene
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scene we want to update
     *   }
     * })
     */
    upsert<T extends SceneUpsertArgs>(args: Prisma.SelectSubset<T, SceneUpsertArgs<ExtArgs>>): Prisma.Prisma__SceneClient<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Scenes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneCountArgs} args - Arguments to filter Scenes to count.
     * @example
     * // Count the number of Scenes
     * const count = await prisma.scene.count({
     *   where: {
     *     // ... the filter for the Scenes we want to count
     *   }
     * })
    **/
    count<T extends SceneCountArgs>(args?: Prisma.Subset<T, SceneCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SceneCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SceneAggregateArgs>(args: Prisma.Subset<T, SceneAggregateArgs>): Prisma.PrismaPromise<GetSceneAggregateType<T>>;
    /**
     * Group by Scene.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SceneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends SceneGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SceneGroupByArgs['orderBy'];
    } : {
        orderBy?: SceneGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SceneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSceneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Scene model
     */
    readonly fields: SceneFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Scene.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SceneClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chapter<T extends Prisma.ChapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChapterDefaultArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Scene model
 */
export interface SceneFieldRefs {
    readonly id: Prisma.FieldRef<"Scene", 'String'>;
    readonly chapterId: Prisma.FieldRef<"Scene", 'String'>;
    readonly number: Prisma.FieldRef<"Scene", 'Int'>;
    readonly location: Prisma.FieldRef<"Scene", 'String'>;
    readonly time: Prisma.FieldRef<"Scene", 'String'>;
    readonly content: Prisma.FieldRef<"Scene", 'String'>;
    readonly scriptFormat: Prisma.FieldRef<"Scene", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Scene", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Scene", 'DateTime'>;
}
/**
 * Scene findUnique
 */
export type SceneFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter, which Scene to fetch.
     */
    where: Prisma.SceneWhereUniqueInput;
};
/**
 * Scene findUniqueOrThrow
 */
export type SceneFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter, which Scene to fetch.
     */
    where: Prisma.SceneWhereUniqueInput;
};
/**
 * Scene findFirst
 */
export type SceneFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter, which Scene to fetch.
     */
    where?: Prisma.SceneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scenes to fetch.
     */
    orderBy?: Prisma.SceneOrderByWithRelationInput | Prisma.SceneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scenes.
     */
    cursor?: Prisma.SceneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scenes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scenes.
     */
    distinct?: Prisma.SceneScalarFieldEnum | Prisma.SceneScalarFieldEnum[];
};
/**
 * Scene findFirstOrThrow
 */
export type SceneFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter, which Scene to fetch.
     */
    where?: Prisma.SceneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scenes to fetch.
     */
    orderBy?: Prisma.SceneOrderByWithRelationInput | Prisma.SceneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scenes.
     */
    cursor?: Prisma.SceneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scenes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scenes.
     */
    distinct?: Prisma.SceneScalarFieldEnum | Prisma.SceneScalarFieldEnum[];
};
/**
 * Scene findMany
 */
export type SceneFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter, which Scenes to fetch.
     */
    where?: Prisma.SceneWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scenes to fetch.
     */
    orderBy?: Prisma.SceneOrderByWithRelationInput | Prisma.SceneOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Scenes.
     */
    cursor?: Prisma.SceneWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scenes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scenes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scenes.
     */
    distinct?: Prisma.SceneScalarFieldEnum | Prisma.SceneScalarFieldEnum[];
};
/**
 * Scene create
 */
export type SceneCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * The data needed to create a Scene.
     */
    data: Prisma.XOR<Prisma.SceneCreateInput, Prisma.SceneUncheckedCreateInput>;
};
/**
 * Scene createMany
 */
export type SceneCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scenes.
     */
    data: Prisma.SceneCreateManyInput | Prisma.SceneCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Scene createManyAndReturn
 */
export type SceneCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * The data used to create many Scenes.
     */
    data: Prisma.SceneCreateManyInput | Prisma.SceneCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Scene update
 */
export type SceneUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * The data needed to update a Scene.
     */
    data: Prisma.XOR<Prisma.SceneUpdateInput, Prisma.SceneUncheckedUpdateInput>;
    /**
     * Choose, which Scene to update.
     */
    where: Prisma.SceneWhereUniqueInput;
};
/**
 * Scene updateMany
 */
export type SceneUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Scenes.
     */
    data: Prisma.XOR<Prisma.SceneUpdateManyMutationInput, Prisma.SceneUncheckedUpdateManyInput>;
    /**
     * Filter which Scenes to update
     */
    where?: Prisma.SceneWhereInput;
    /**
     * Limit how many Scenes to update.
     */
    limit?: number;
};
/**
 * Scene updateManyAndReturn
 */
export type SceneUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * The data used to update Scenes.
     */
    data: Prisma.XOR<Prisma.SceneUpdateManyMutationInput, Prisma.SceneUncheckedUpdateManyInput>;
    /**
     * Filter which Scenes to update
     */
    where?: Prisma.SceneWhereInput;
    /**
     * Limit how many Scenes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Scene upsert
 */
export type SceneUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * The filter to search for the Scene to update in case it exists.
     */
    where: Prisma.SceneWhereUniqueInput;
    /**
     * In case the Scene found by the `where` argument doesn't exist, create a new Scene with this data.
     */
    create: Prisma.XOR<Prisma.SceneCreateInput, Prisma.SceneUncheckedCreateInput>;
    /**
     * In case the Scene was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SceneUpdateInput, Prisma.SceneUncheckedUpdateInput>;
};
/**
 * Scene delete
 */
export type SceneDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
    /**
     * Filter which Scene to delete.
     */
    where: Prisma.SceneWhereUniqueInput;
};
/**
 * Scene deleteMany
 */
export type SceneDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Scenes to delete
     */
    where?: Prisma.SceneWhereInput;
    /**
     * Limit how many Scenes to delete.
     */
    limit?: number;
};
/**
 * Scene without action
 */
export type SceneDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scene
     */
    select?: Prisma.SceneSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Scene
     */
    omit?: Prisma.SceneOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SceneInclude<ExtArgs> | null;
};
//# sourceMappingURL=Scene.d.ts.map