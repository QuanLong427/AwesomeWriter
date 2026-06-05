import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Chapter
 *
 */
export type ChapterModel = runtime.Types.Result.DefaultSelection<Prisma.$ChapterPayload>;
export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
export type ChapterAvgAggregateOutputType = {
    number: number | null;
};
export type ChapterSumAggregateOutputType = {
    number: number | null;
};
export type ChapterMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    number: number | null;
    title: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChapterMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    number: number | null;
    title: string | null;
    content: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChapterCountAggregateOutputType = {
    id: number;
    projectId: number;
    number: number;
    title: number;
    content: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChapterAvgAggregateInputType = {
    number?: true;
};
export type ChapterSumAggregateInputType = {
    number?: true;
};
export type ChapterMinAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChapterMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChapterCountAggregateInputType = {
    id?: true;
    projectId?: true;
    number?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChapterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType;
};
export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
    [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChapter[P]> : Prisma.GetScalarType<T[P], AggregateChapter[P]>;
};
export type ChapterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithAggregationInput | Prisma.ChapterOrderByWithAggregationInput[];
    by: Prisma.ChapterScalarFieldEnum[] | Prisma.ChapterScalarFieldEnum;
    having?: Prisma.ChapterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChapterCountAggregateInputType | true;
    _avg?: ChapterAvgAggregateInputType;
    _sum?: ChapterSumAggregateInputType;
    _min?: ChapterMinAggregateInputType;
    _max?: ChapterMaxAggregateInputType;
};
export type ChapterGroupByOutputType = {
    id: string;
    projectId: string;
    number: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
export type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChapterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]>;
}>>;
export type ChapterWhereInput = {
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    id?: Prisma.StringFilter<"Chapter"> | string;
    projectId?: Prisma.StringFilter<"Chapter"> | string;
    number?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringFilter<"Chapter"> | string;
    content?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    scenes?: Prisma.SceneListRelationFilter;
};
export type ChapterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    scenes?: Prisma.SceneOrderByRelationAggregateInput;
};
export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    projectId?: Prisma.StringFilter<"Chapter"> | string;
    number?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringFilter<"Chapter"> | string;
    content?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    scenes?: Prisma.SceneListRelationFilter;
}, "id">;
export type ChapterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChapterCountOrderByAggregateInput;
    _avg?: Prisma.ChapterAvgOrderByAggregateInput;
    _max?: Prisma.ChapterMaxOrderByAggregateInput;
    _min?: Prisma.ChapterMinOrderByAggregateInput;
    _sum?: Prisma.ChapterSumOrderByAggregateInput;
};
export type ChapterScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChapterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    number?: Prisma.IntWithAggregatesFilter<"Chapter"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Chapter"> | Date | string;
};
export type ChapterCreateInput = {
    id?: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutChaptersInput;
    scenes?: Prisma.SceneCreateNestedManyWithoutChapterInput;
};
export type ChapterUncheckedCreateInput = {
    id?: string;
    projectId: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    scenes?: Prisma.SceneUncheckedCreateNestedManyWithoutChapterInput;
};
export type ChapterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutChaptersNestedInput;
    scenes?: Prisma.SceneUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scenes?: Prisma.SceneUncheckedUpdateManyWithoutChapterNestedInput;
};
export type ChapterCreateManyInput = {
    id?: string;
    projectId: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterListRelationFilter = {
    every?: Prisma.ChapterWhereInput;
    some?: Prisma.ChapterWhereInput;
    none?: Prisma.ChapterWhereInput;
};
export type ChapterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChapterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterAvgOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type ChapterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    number?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterSumOrderByAggregateInput = {
    number?: Prisma.SortOrder;
};
export type ChapterScalarRelationFilter = {
    is?: Prisma.ChapterWhereInput;
    isNot?: Prisma.ChapterWhereInput;
};
export type ChapterCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput> | Prisma.ChapterCreateWithoutProjectInput[] | Prisma.ChapterUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutProjectInput | Prisma.ChapterCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ChapterCreateManyProjectInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput> | Prisma.ChapterCreateWithoutProjectInput[] | Prisma.ChapterUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutProjectInput | Prisma.ChapterCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ChapterCreateManyProjectInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput> | Prisma.ChapterCreateWithoutProjectInput[] | Prisma.ChapterUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutProjectInput | Prisma.ChapterCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutProjectInput | Prisma.ChapterUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ChapterCreateManyProjectInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutProjectInput | Prisma.ChapterUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutProjectInput | Prisma.ChapterUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type ChapterUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput> | Prisma.ChapterCreateWithoutProjectInput[] | Prisma.ChapterUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutProjectInput | Prisma.ChapterCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutProjectInput | Prisma.ChapterUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ChapterCreateManyProjectInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutProjectInput | Prisma.ChapterUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutProjectInput | Prisma.ChapterUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ChapterCreateNestedOneWithoutScenesInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutScenesInput, Prisma.ChapterUncheckedCreateWithoutScenesInput>;
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutScenesInput;
    connect?: Prisma.ChapterWhereUniqueInput;
};
export type ChapterUpdateOneRequiredWithoutScenesNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutScenesInput, Prisma.ChapterUncheckedCreateWithoutScenesInput>;
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutScenesInput;
    upsert?: Prisma.ChapterUpsertWithoutScenesInput;
    connect?: Prisma.ChapterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChapterUpdateToOneWithWhereWithoutScenesInput, Prisma.ChapterUpdateWithoutScenesInput>, Prisma.ChapterUncheckedUpdateWithoutScenesInput>;
};
export type ChapterCreateWithoutProjectInput = {
    id?: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    scenes?: Prisma.SceneCreateNestedManyWithoutChapterInput;
};
export type ChapterUncheckedCreateWithoutProjectInput = {
    id?: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    scenes?: Prisma.SceneUncheckedCreateNestedManyWithoutChapterInput;
};
export type ChapterCreateOrConnectWithoutProjectInput = {
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput>;
};
export type ChapterCreateManyProjectInputEnvelope = {
    data: Prisma.ChapterCreateManyProjectInput | Prisma.ChapterCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ChapterUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ChapterWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChapterUpdateWithoutProjectInput, Prisma.ChapterUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutProjectInput, Prisma.ChapterUncheckedCreateWithoutProjectInput>;
};
export type ChapterUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ChapterWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChapterUpdateWithoutProjectInput, Prisma.ChapterUncheckedUpdateWithoutProjectInput>;
};
export type ChapterUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ChapterScalarWhereInput;
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyWithoutProjectInput>;
};
export type ChapterScalarWhereInput = {
    AND?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    OR?: Prisma.ChapterScalarWhereInput[];
    NOT?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    id?: Prisma.StringFilter<"Chapter"> | string;
    projectId?: Prisma.StringFilter<"Chapter"> | string;
    number?: Prisma.IntFilter<"Chapter"> | number;
    title?: Prisma.StringFilter<"Chapter"> | string;
    content?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
};
export type ChapterCreateWithoutScenesInput = {
    id?: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutChaptersInput;
};
export type ChapterUncheckedCreateWithoutScenesInput = {
    id?: string;
    projectId: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterCreateOrConnectWithoutScenesInput = {
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutScenesInput, Prisma.ChapterUncheckedCreateWithoutScenesInput>;
};
export type ChapterUpsertWithoutScenesInput = {
    update: Prisma.XOR<Prisma.ChapterUpdateWithoutScenesInput, Prisma.ChapterUncheckedUpdateWithoutScenesInput>;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutScenesInput, Prisma.ChapterUncheckedCreateWithoutScenesInput>;
    where?: Prisma.ChapterWhereInput;
};
export type ChapterUpdateToOneWithWhereWithoutScenesInput = {
    where?: Prisma.ChapterWhereInput;
    data: Prisma.XOR<Prisma.ChapterUpdateWithoutScenesInput, Prisma.ChapterUncheckedUpdateWithoutScenesInput>;
};
export type ChapterUpdateWithoutScenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutChaptersNestedInput;
};
export type ChapterUncheckedUpdateWithoutScenesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterCreateManyProjectInput = {
    id?: string;
    number: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scenes?: Prisma.SceneUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scenes?: Prisma.SceneUncheckedUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    number?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ChapterCountOutputType
 */
export type ChapterCountOutputType = {
    scenes: number;
};
export type ChapterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scenes?: boolean | ChapterCountOutputTypeCountScenesArgs;
};
/**
 * ChapterCountOutputType without action
 */
export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: Prisma.ChapterCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ChapterCountOutputType without action
 */
export type ChapterCountOutputTypeCountScenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SceneWhereInput;
};
export type ChapterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    title?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    scenes?: boolean | Prisma.Chapter$scenesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChapterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    title?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    title?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    number?: boolean;
    title?: boolean;
    content?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChapterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "number" | "title" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>;
export type ChapterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    scenes?: boolean | Prisma.Chapter$scenesArgs<ExtArgs>;
    _count?: boolean | Prisma.ChapterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChapterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ChapterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $ChapterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chapter";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        scenes: Prisma.$ScenePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        number: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["chapter"]>;
    composites: {};
};
export type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChapterPayload, S>;
export type ChapterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChapterCountAggregateInputType | true;
};
export interface ChapterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chapter'];
        meta: {
            name: 'Chapter';
        };
    };
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     *
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChapterFindManyArgs>(args?: Prisma.SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     *
     */
    create<T extends ChapterCreateArgs>(args: Prisma.SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChapterCreateManyArgs>(args?: Prisma.SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {ChapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ChapterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     *
     */
    delete<T extends ChapterDeleteArgs>(args: Prisma.SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChapterUpdateArgs>(args: Prisma.SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: Prisma.SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {ChapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChapterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: Prisma.SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(args?: Prisma.Subset<T, ChapterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChapterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Prisma.Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>;
    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ChapterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChapterGroupByArgs['orderBy'];
    } : {
        orderBy?: ChapterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Chapter model
     */
    readonly fields: ChapterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Chapter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    scenes<T extends Prisma.Chapter$scenesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chapter$scenesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScenePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Chapter model
 */
export interface ChapterFieldRefs {
    readonly id: Prisma.FieldRef<"Chapter", 'String'>;
    readonly projectId: Prisma.FieldRef<"Chapter", 'String'>;
    readonly number: Prisma.FieldRef<"Chapter", 'Int'>;
    readonly title: Prisma.FieldRef<"Chapter", 'String'>;
    readonly content: Prisma.FieldRef<"Chapter", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Chapter", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Chapter", 'DateTime'>;
}
/**
 * Chapter findUnique
 */
export type ChapterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter, which Chapter to fetch.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter findUniqueOrThrow
 */
export type ChapterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter, which Chapter to fetch.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter findFirst
 */
export type ChapterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter, which Chapter to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chapters.
     */
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter findFirstOrThrow
 */
export type ChapterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter, which Chapter to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chapters.
     */
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter findMany
 */
export type ChapterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter, which Chapters to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chapters.
     */
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter create
 */
export type ChapterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Chapter.
     */
    data: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
};
/**
 * Chapter createMany
 */
export type ChapterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: Prisma.ChapterCreateManyInput | Prisma.ChapterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Chapter createManyAndReturn
 */
export type ChapterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * The data used to create many Chapters.
     */
    data: Prisma.ChapterCreateManyInput | Prisma.ChapterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Chapter update
 */
export type ChapterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Chapter.
     */
    data: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
    /**
     * Choose, which Chapter to update.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter updateMany
 */
export type ChapterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyInput>;
    /**
     * Filter which Chapters to update
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * Limit how many Chapters to update.
     */
    limit?: number;
};
/**
 * Chapter updateManyAndReturn
 */
export type ChapterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * The data used to update Chapters.
     */
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyInput>;
    /**
     * Filter which Chapters to update
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * Limit how many Chapters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Chapter upsert
 */
export type ChapterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: Prisma.ChapterWhereUniqueInput;
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
};
/**
 * Chapter delete
 */
export type ChapterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    /**
     * Filter which Chapter to delete.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter deleteMany
 */
export type ChapterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number;
};
/**
 * Chapter.scenes
 */
export type Chapter$scenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SceneWhereInput;
    orderBy?: Prisma.SceneOrderByWithRelationInput | Prisma.SceneOrderByWithRelationInput[];
    cursor?: Prisma.SceneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SceneScalarFieldEnum | Prisma.SceneScalarFieldEnum[];
};
/**
 * Chapter without action
 */
export type ChapterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
};
//# sourceMappingURL=Chapter.d.ts.map