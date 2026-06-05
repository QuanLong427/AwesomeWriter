import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Script
 *
 */
export type ScriptModel = runtime.Types.Result.DefaultSelection<Prisma.$ScriptPayload>;
export type AggregateScript = {
    _count: ScriptCountAggregateOutputType | null;
    _min: ScriptMinAggregateOutputType | null;
    _max: ScriptMaxAggregateOutputType | null;
};
export type ScriptMinAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    title: string | null;
    content: string | null;
    format: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ScriptMaxAggregateOutputType = {
    id: string | null;
    projectId: string | null;
    title: string | null;
    content: string | null;
    format: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ScriptCountAggregateOutputType = {
    id: number;
    projectId: number;
    title: number;
    content: number;
    format: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ScriptMinAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    content?: true;
    format?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ScriptMaxAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    content?: true;
    format?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ScriptCountAggregateInputType = {
    id?: true;
    projectId?: true;
    title?: true;
    content?: true;
    format?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ScriptAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Script to aggregate.
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scripts to fetch.
     */
    orderBy?: Prisma.ScriptOrderByWithRelationInput | Prisma.ScriptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ScriptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scripts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Scripts
    **/
    _count?: true | ScriptCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ScriptMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ScriptMaxAggregateInputType;
};
export type GetScriptAggregateType<T extends ScriptAggregateArgs> = {
    [P in keyof T & keyof AggregateScript]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScript[P]> : Prisma.GetScalarType<T[P], AggregateScript[P]>;
};
export type ScriptGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScriptWhereInput;
    orderBy?: Prisma.ScriptOrderByWithAggregationInput | Prisma.ScriptOrderByWithAggregationInput[];
    by: Prisma.ScriptScalarFieldEnum[] | Prisma.ScriptScalarFieldEnum;
    having?: Prisma.ScriptScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScriptCountAggregateInputType | true;
    _min?: ScriptMinAggregateInputType;
    _max?: ScriptMaxAggregateInputType;
};
export type ScriptGroupByOutputType = {
    id: string;
    projectId: string;
    title: string;
    content: string;
    format: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ScriptCountAggregateOutputType | null;
    _min: ScriptMinAggregateOutputType | null;
    _max: ScriptMaxAggregateOutputType | null;
};
export type GetScriptGroupByPayload<T extends ScriptGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScriptGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScriptGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScriptGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScriptGroupByOutputType[P]>;
}>>;
export type ScriptWhereInput = {
    AND?: Prisma.ScriptWhereInput | Prisma.ScriptWhereInput[];
    OR?: Prisma.ScriptWhereInput[];
    NOT?: Prisma.ScriptWhereInput | Prisma.ScriptWhereInput[];
    id?: Prisma.StringFilter<"Script"> | string;
    projectId?: Prisma.StringFilter<"Script"> | string;
    title?: Prisma.StringFilter<"Script"> | string;
    content?: Prisma.StringFilter<"Script"> | string;
    format?: Prisma.StringFilter<"Script"> | string;
    createdAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
};
export type ScriptOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
};
export type ScriptWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScriptWhereInput | Prisma.ScriptWhereInput[];
    OR?: Prisma.ScriptWhereInput[];
    NOT?: Prisma.ScriptWhereInput | Prisma.ScriptWhereInput[];
    projectId?: Prisma.StringFilter<"Script"> | string;
    title?: Prisma.StringFilter<"Script"> | string;
    content?: Prisma.StringFilter<"Script"> | string;
    format?: Prisma.StringFilter<"Script"> | string;
    createdAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
}, "id">;
export type ScriptOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ScriptCountOrderByAggregateInput;
    _max?: Prisma.ScriptMaxOrderByAggregateInput;
    _min?: Prisma.ScriptMinOrderByAggregateInput;
};
export type ScriptScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScriptScalarWhereWithAggregatesInput | Prisma.ScriptScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScriptScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScriptScalarWhereWithAggregatesInput | Prisma.ScriptScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Script"> | string;
    projectId?: Prisma.StringWithAggregatesFilter<"Script"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Script"> | string;
    content?: Prisma.StringWithAggregatesFilter<"Script"> | string;
    format?: Prisma.StringWithAggregatesFilter<"Script"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Script"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Script"> | Date | string;
};
export type ScriptCreateInput = {
    id?: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutScriptsInput;
};
export type ScriptUncheckedCreateInput = {
    id?: string;
    projectId: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScriptUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutScriptsNestedInput;
};
export type ScriptUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptCreateManyInput = {
    id?: string;
    projectId: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScriptUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptListRelationFilter = {
    every?: Prisma.ScriptWhereInput;
    some?: Prisma.ScriptWhereInput;
    none?: Prisma.ScriptWhereInput;
};
export type ScriptOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScriptCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScriptMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScriptMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    format?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ScriptCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput> | Prisma.ScriptCreateWithoutProjectInput[] | Prisma.ScriptUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ScriptCreateOrConnectWithoutProjectInput | Prisma.ScriptCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ScriptCreateManyProjectInputEnvelope;
    connect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
};
export type ScriptUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput> | Prisma.ScriptCreateWithoutProjectInput[] | Prisma.ScriptUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ScriptCreateOrConnectWithoutProjectInput | Prisma.ScriptCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.ScriptCreateManyProjectInputEnvelope;
    connect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
};
export type ScriptUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput> | Prisma.ScriptCreateWithoutProjectInput[] | Prisma.ScriptUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ScriptCreateOrConnectWithoutProjectInput | Prisma.ScriptCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ScriptUpsertWithWhereUniqueWithoutProjectInput | Prisma.ScriptUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ScriptCreateManyProjectInputEnvelope;
    set?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    disconnect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    delete?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    connect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    update?: Prisma.ScriptUpdateWithWhereUniqueWithoutProjectInput | Prisma.ScriptUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ScriptUpdateManyWithWhereWithoutProjectInput | Prisma.ScriptUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ScriptScalarWhereInput | Prisma.ScriptScalarWhereInput[];
};
export type ScriptUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput> | Prisma.ScriptCreateWithoutProjectInput[] | Prisma.ScriptUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.ScriptCreateOrConnectWithoutProjectInput | Prisma.ScriptCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.ScriptUpsertWithWhereUniqueWithoutProjectInput | Prisma.ScriptUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.ScriptCreateManyProjectInputEnvelope;
    set?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    disconnect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    delete?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    connect?: Prisma.ScriptWhereUniqueInput | Prisma.ScriptWhereUniqueInput[];
    update?: Prisma.ScriptUpdateWithWhereUniqueWithoutProjectInput | Prisma.ScriptUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.ScriptUpdateManyWithWhereWithoutProjectInput | Prisma.ScriptUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.ScriptScalarWhereInput | Prisma.ScriptScalarWhereInput[];
};
export type ScriptCreateWithoutProjectInput = {
    id?: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScriptUncheckedCreateWithoutProjectInput = {
    id?: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScriptCreateOrConnectWithoutProjectInput = {
    where: Prisma.ScriptWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput>;
};
export type ScriptCreateManyProjectInputEnvelope = {
    data: Prisma.ScriptCreateManyProjectInput | Prisma.ScriptCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type ScriptUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ScriptWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScriptUpdateWithoutProjectInput, Prisma.ScriptUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.ScriptCreateWithoutProjectInput, Prisma.ScriptUncheckedCreateWithoutProjectInput>;
};
export type ScriptUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.ScriptWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScriptUpdateWithoutProjectInput, Prisma.ScriptUncheckedUpdateWithoutProjectInput>;
};
export type ScriptUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.ScriptScalarWhereInput;
    data: Prisma.XOR<Prisma.ScriptUpdateManyMutationInput, Prisma.ScriptUncheckedUpdateManyWithoutProjectInput>;
};
export type ScriptScalarWhereInput = {
    AND?: Prisma.ScriptScalarWhereInput | Prisma.ScriptScalarWhereInput[];
    OR?: Prisma.ScriptScalarWhereInput[];
    NOT?: Prisma.ScriptScalarWhereInput | Prisma.ScriptScalarWhereInput[];
    id?: Prisma.StringFilter<"Script"> | string;
    projectId?: Prisma.StringFilter<"Script"> | string;
    title?: Prisma.StringFilter<"Script"> | string;
    content?: Prisma.StringFilter<"Script"> | string;
    format?: Prisma.StringFilter<"Script"> | string;
    createdAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Script"> | Date | string;
};
export type ScriptCreateManyProjectInput = {
    id?: string;
    title: string;
    content: string;
    format?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ScriptUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    format?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScriptSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    content?: boolean;
    format?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["script"]>;
export type ScriptSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    content?: boolean;
    format?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["script"]>;
export type ScriptSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    content?: boolean;
    format?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["script"]>;
export type ScriptSelectScalar = {
    id?: boolean;
    projectId?: boolean;
    title?: boolean;
    content?: boolean;
    format?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ScriptOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "projectId" | "title" | "content" | "format" | "createdAt" | "updatedAt", ExtArgs["result"]["script"]>;
export type ScriptInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ScriptIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type ScriptIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
};
export type $ScriptPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Script";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        projectId: string;
        title: string;
        content: string;
        format: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["script"]>;
    composites: {};
};
export type ScriptGetPayload<S extends boolean | null | undefined | ScriptDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScriptPayload, S>;
export type ScriptCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScriptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScriptCountAggregateInputType | true;
};
export interface ScriptDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Script'];
        meta: {
            name: 'Script';
        };
    };
    /**
     * Find zero or one Script that matches the filter.
     * @param {ScriptFindUniqueArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScriptFindUniqueArgs>(args: Prisma.SelectSubset<T, ScriptFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Script that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScriptFindUniqueOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScriptFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScriptFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Script that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScriptFindFirstArgs>(args?: Prisma.SelectSubset<T, ScriptFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Script that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindFirstOrThrowArgs} args - Arguments to find a Script
     * @example
     * // Get one Script
     * const script = await prisma.script.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScriptFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScriptFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Scripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scripts
     * const scripts = await prisma.script.findMany()
     *
     * // Get first 10 Scripts
     * const scripts = await prisma.script.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scriptWithIdOnly = await prisma.script.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ScriptFindManyArgs>(args?: Prisma.SelectSubset<T, ScriptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Script.
     * @param {ScriptCreateArgs} args - Arguments to create a Script.
     * @example
     * // Create one Script
     * const Script = await prisma.script.create({
     *   data: {
     *     // ... data to create a Script
     *   }
     * })
     *
     */
    create<T extends ScriptCreateArgs>(args: Prisma.SelectSubset<T, ScriptCreateArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Scripts.
     * @param {ScriptCreateManyArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ScriptCreateManyArgs>(args?: Prisma.SelectSubset<T, ScriptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Scripts and returns the data saved in the database.
     * @param {ScriptCreateManyAndReturnArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const script = await prisma.script.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ScriptCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScriptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Script.
     * @param {ScriptDeleteArgs} args - Arguments to delete one Script.
     * @example
     * // Delete one Script
     * const Script = await prisma.script.delete({
     *   where: {
     *     // ... filter to delete one Script
     *   }
     * })
     *
     */
    delete<T extends ScriptDeleteArgs>(args: Prisma.SelectSubset<T, ScriptDeleteArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Script.
     * @param {ScriptUpdateArgs} args - Arguments to update one Script.
     * @example
     * // Update one Script
     * const script = await prisma.script.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ScriptUpdateArgs>(args: Prisma.SelectSubset<T, ScriptUpdateArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Scripts.
     * @param {ScriptDeleteManyArgs} args - Arguments to filter Scripts to delete.
     * @example
     * // Delete a few Scripts
     * const { count } = await prisma.script.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ScriptDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScriptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ScriptUpdateManyArgs>(args: Prisma.SelectSubset<T, ScriptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Scripts and returns the data updated in the database.
     * @param {ScriptUpdateManyAndReturnArgs} args - Arguments to update many Scripts.
     * @example
     * // Update many Scripts
     * const script = await prisma.script.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Scripts and only return the `id`
     * const scriptWithIdOnly = await prisma.script.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScriptUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScriptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Script.
     * @param {ScriptUpsertArgs} args - Arguments to update or create a Script.
     * @example
     * // Update or create a Script
     * const script = await prisma.script.upsert({
     *   create: {
     *     // ... data to create a Script
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Script we want to update
     *   }
     * })
     */
    upsert<T extends ScriptUpsertArgs>(args: Prisma.SelectSubset<T, ScriptUpsertArgs<ExtArgs>>): Prisma.Prisma__ScriptClient<runtime.Types.Result.GetResult<Prisma.$ScriptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptCountArgs} args - Arguments to filter Scripts to count.
     * @example
     * // Count the number of Scripts
     * const count = await prisma.script.count({
     *   where: {
     *     // ... the filter for the Scripts we want to count
     *   }
     * })
    **/
    count<T extends ScriptCountArgs>(args?: Prisma.Subset<T, ScriptCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScriptCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScriptAggregateArgs>(args: Prisma.Subset<T, ScriptAggregateArgs>): Prisma.PrismaPromise<GetScriptAggregateType<T>>;
    /**
     * Group by Script.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ScriptGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScriptGroupByArgs['orderBy'];
    } : {
        orderBy?: ScriptGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScriptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Script model
     */
    readonly fields: ScriptFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Script.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ScriptClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Script model
 */
export interface ScriptFieldRefs {
    readonly id: Prisma.FieldRef<"Script", 'String'>;
    readonly projectId: Prisma.FieldRef<"Script", 'String'>;
    readonly title: Prisma.FieldRef<"Script", 'String'>;
    readonly content: Prisma.FieldRef<"Script", 'String'>;
    readonly format: Prisma.FieldRef<"Script", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Script", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Script", 'DateTime'>;
}
/**
 * Script findUnique
 */
export type ScriptFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter, which Script to fetch.
     */
    where: Prisma.ScriptWhereUniqueInput;
};
/**
 * Script findUniqueOrThrow
 */
export type ScriptFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter, which Script to fetch.
     */
    where: Prisma.ScriptWhereUniqueInput;
};
/**
 * Script findFirst
 */
export type ScriptFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter, which Script to fetch.
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scripts to fetch.
     */
    orderBy?: Prisma.ScriptOrderByWithRelationInput | Prisma.ScriptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scripts.
     */
    cursor?: Prisma.ScriptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scripts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scripts.
     */
    distinct?: Prisma.ScriptScalarFieldEnum | Prisma.ScriptScalarFieldEnum[];
};
/**
 * Script findFirstOrThrow
 */
export type ScriptFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter, which Script to fetch.
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scripts to fetch.
     */
    orderBy?: Prisma.ScriptOrderByWithRelationInput | Prisma.ScriptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Scripts.
     */
    cursor?: Prisma.ScriptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scripts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scripts.
     */
    distinct?: Prisma.ScriptScalarFieldEnum | Prisma.ScriptScalarFieldEnum[];
};
/**
 * Script findMany
 */
export type ScriptFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter, which Scripts to fetch.
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Scripts to fetch.
     */
    orderBy?: Prisma.ScriptOrderByWithRelationInput | Prisma.ScriptOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Scripts.
     */
    cursor?: Prisma.ScriptWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Scripts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Scripts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Scripts.
     */
    distinct?: Prisma.ScriptScalarFieldEnum | Prisma.ScriptScalarFieldEnum[];
};
/**
 * Script create
 */
export type ScriptCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * The data needed to create a Script.
     */
    data: Prisma.XOR<Prisma.ScriptCreateInput, Prisma.ScriptUncheckedCreateInput>;
};
/**
 * Script createMany
 */
export type ScriptCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scripts.
     */
    data: Prisma.ScriptCreateManyInput | Prisma.ScriptCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Script createManyAndReturn
 */
export type ScriptCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * The data used to create many Scripts.
     */
    data: Prisma.ScriptCreateManyInput | Prisma.ScriptCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Script update
 */
export type ScriptUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * The data needed to update a Script.
     */
    data: Prisma.XOR<Prisma.ScriptUpdateInput, Prisma.ScriptUncheckedUpdateInput>;
    /**
     * Choose, which Script to update.
     */
    where: Prisma.ScriptWhereUniqueInput;
};
/**
 * Script updateMany
 */
export type ScriptUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Scripts.
     */
    data: Prisma.XOR<Prisma.ScriptUpdateManyMutationInput, Prisma.ScriptUncheckedUpdateManyInput>;
    /**
     * Filter which Scripts to update
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * Limit how many Scripts to update.
     */
    limit?: number;
};
/**
 * Script updateManyAndReturn
 */
export type ScriptUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * The data used to update Scripts.
     */
    data: Prisma.XOR<Prisma.ScriptUpdateManyMutationInput, Prisma.ScriptUncheckedUpdateManyInput>;
    /**
     * Filter which Scripts to update
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * Limit how many Scripts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Script upsert
 */
export type ScriptUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * The filter to search for the Script to update in case it exists.
     */
    where: Prisma.ScriptWhereUniqueInput;
    /**
     * In case the Script found by the `where` argument doesn't exist, create a new Script with this data.
     */
    create: Prisma.XOR<Prisma.ScriptCreateInput, Prisma.ScriptUncheckedCreateInput>;
    /**
     * In case the Script was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ScriptUpdateInput, Prisma.ScriptUncheckedUpdateInput>;
};
/**
 * Script delete
 */
export type ScriptDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
    /**
     * Filter which Script to delete.
     */
    where: Prisma.ScriptWhereUniqueInput;
};
/**
 * Script deleteMany
 */
export type ScriptDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Scripts to delete
     */
    where?: Prisma.ScriptWhereInput;
    /**
     * Limit how many Scripts to delete.
     */
    limit?: number;
};
/**
 * Script without action
 */
export type ScriptDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Script
     */
    select?: Prisma.ScriptSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Script
     */
    omit?: Prisma.ScriptOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ScriptInclude<ExtArgs> | null;
};
//# sourceMappingURL=Script.d.ts.map