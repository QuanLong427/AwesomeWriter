import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model ConversionJob
 *
 */
export type ConversionJobModel = runtime.Types.Result.DefaultSelection<Prisma.$ConversionJobPayload>;
export type AggregateConversionJob = {
    _count: ConversionJobCountAggregateOutputType | null;
    _min: ConversionJobMinAggregateOutputType | null;
    _max: ConversionJobMaxAggregateOutputType | null;
};
export type ConversionJobMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectId: string | null;
    status: string | null;
    input: string | null;
    output: string | null;
    error: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type ConversionJobMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    projectId: string | null;
    status: string | null;
    input: string | null;
    output: string | null;
    error: string | null;
    createdAt: Date | null;
    completedAt: Date | null;
};
export type ConversionJobCountAggregateOutputType = {
    id: number;
    userId: number;
    projectId: number;
    status: number;
    input: number;
    output: number;
    error: number;
    createdAt: number;
    completedAt: number;
    _all: number;
};
export type ConversionJobMinAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    status?: true;
    input?: true;
    output?: true;
    error?: true;
    createdAt?: true;
    completedAt?: true;
};
export type ConversionJobMaxAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    status?: true;
    input?: true;
    output?: true;
    error?: true;
    createdAt?: true;
    completedAt?: true;
};
export type ConversionJobCountAggregateInputType = {
    id?: true;
    userId?: true;
    projectId?: true;
    status?: true;
    input?: true;
    output?: true;
    error?: true;
    createdAt?: true;
    completedAt?: true;
    _all?: true;
};
export type ConversionJobAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionJob to aggregate.
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: Prisma.ConversionJobOrderByWithRelationInput | Prisma.ConversionJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ConversionJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversionJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ConversionJobs
    **/
    _count?: true | ConversionJobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ConversionJobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ConversionJobMaxAggregateInputType;
};
export type GetConversionJobAggregateType<T extends ConversionJobAggregateArgs> = {
    [P in keyof T & keyof AggregateConversionJob]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversionJob[P]> : Prisma.GetScalarType<T[P], AggregateConversionJob[P]>;
};
export type ConversionJobGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConversionJobWhereInput;
    orderBy?: Prisma.ConversionJobOrderByWithAggregationInput | Prisma.ConversionJobOrderByWithAggregationInput[];
    by: Prisma.ConversionJobScalarFieldEnum[] | Prisma.ConversionJobScalarFieldEnum;
    having?: Prisma.ConversionJobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversionJobCountAggregateInputType | true;
    _min?: ConversionJobMinAggregateInputType;
    _max?: ConversionJobMaxAggregateInputType;
};
export type ConversionJobGroupByOutputType = {
    id: string;
    userId: string;
    projectId: string | null;
    status: string;
    input: string;
    output: string | null;
    error: string | null;
    createdAt: Date;
    completedAt: Date | null;
    _count: ConversionJobCountAggregateOutputType | null;
    _min: ConversionJobMinAggregateOutputType | null;
    _max: ConversionJobMaxAggregateOutputType | null;
};
export type GetConversionJobGroupByPayload<T extends ConversionJobGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConversionJobGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConversionJobGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConversionJobGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConversionJobGroupByOutputType[P]>;
}>>;
export type ConversionJobWhereInput = {
    AND?: Prisma.ConversionJobWhereInput | Prisma.ConversionJobWhereInput[];
    OR?: Prisma.ConversionJobWhereInput[];
    NOT?: Prisma.ConversionJobWhereInput | Prisma.ConversionJobWhereInput[];
    id?: Prisma.StringFilter<"ConversionJob"> | string;
    userId?: Prisma.StringFilter<"ConversionJob"> | string;
    projectId?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    status?: Prisma.StringFilter<"ConversionJob"> | string;
    input?: Prisma.StringFilter<"ConversionJob"> | string;
    output?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    error?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ConversionJob"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"ConversionJob"> | Date | string | null;
};
export type ConversionJobOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type ConversionJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ConversionJobWhereInput | Prisma.ConversionJobWhereInput[];
    OR?: Prisma.ConversionJobWhereInput[];
    NOT?: Prisma.ConversionJobWhereInput | Prisma.ConversionJobWhereInput[];
    userId?: Prisma.StringFilter<"ConversionJob"> | string;
    projectId?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    status?: Prisma.StringFilter<"ConversionJob"> | string;
    input?: Prisma.StringFilter<"ConversionJob"> | string;
    output?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    error?: Prisma.StringNullableFilter<"ConversionJob"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ConversionJob"> | Date | string;
    completedAt?: Prisma.DateTimeNullableFilter<"ConversionJob"> | Date | string | null;
}, "id">;
export type ConversionJobOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ConversionJobCountOrderByAggregateInput;
    _max?: Prisma.ConversionJobMaxOrderByAggregateInput;
    _min?: Prisma.ConversionJobMinOrderByAggregateInput;
};
export type ConversionJobScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConversionJobScalarWhereWithAggregatesInput | Prisma.ConversionJobScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConversionJobScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConversionJobScalarWhereWithAggregatesInput | Prisma.ConversionJobScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ConversionJob"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ConversionJob"> | string;
    projectId?: Prisma.StringNullableWithAggregatesFilter<"ConversionJob"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"ConversionJob"> | string;
    input?: Prisma.StringWithAggregatesFilter<"ConversionJob"> | string;
    output?: Prisma.StringNullableWithAggregatesFilter<"ConversionJob"> | string | null;
    error?: Prisma.StringNullableWithAggregatesFilter<"ConversionJob"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ConversionJob"> | Date | string;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ConversionJob"> | Date | string | null;
};
export type ConversionJobCreateInput = {
    id?: string;
    userId: string;
    projectId?: string | null;
    status?: string;
    input: string;
    output?: string | null;
    error?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type ConversionJobUncheckedCreateInput = {
    id?: string;
    userId: string;
    projectId?: string | null;
    status?: string;
    input: string;
    output?: string | null;
    error?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type ConversionJobUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversionJobUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversionJobCreateManyInput = {
    id?: string;
    userId: string;
    projectId?: string | null;
    status?: string;
    input: string;
    output?: string | null;
    error?: string | null;
    createdAt?: Date | string;
    completedAt?: Date | string | null;
};
export type ConversionJobUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversionJobUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    projectId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    input?: Prisma.StringFieldUpdateOperationsInput | string;
    output?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ConversionJobCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type ConversionJobMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type ConversionJobMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    input?: Prisma.SortOrder;
    output?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ConversionJobSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    projectId?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
}, ExtArgs["result"]["conversionJob"]>;
export type ConversionJobSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    projectId?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
}, ExtArgs["result"]["conversionJob"]>;
export type ConversionJobSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    projectId?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
}, ExtArgs["result"]["conversionJob"]>;
export type ConversionJobSelectScalar = {
    id?: boolean;
    userId?: boolean;
    projectId?: boolean;
    status?: boolean;
    input?: boolean;
    output?: boolean;
    error?: boolean;
    createdAt?: boolean;
    completedAt?: boolean;
};
export type ConversionJobOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "projectId" | "status" | "input" | "output" | "error" | "createdAt" | "completedAt", ExtArgs["result"]["conversionJob"]>;
export type $ConversionJobPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ConversionJob";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        projectId: string | null;
        status: string;
        input: string;
        output: string | null;
        error: string | null;
        createdAt: Date;
        completedAt: Date | null;
    }, ExtArgs["result"]["conversionJob"]>;
    composites: {};
};
export type ConversionJobGetPayload<S extends boolean | null | undefined | ConversionJobDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload, S>;
export type ConversionJobCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConversionJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConversionJobCountAggregateInputType | true;
};
export interface ConversionJobDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ConversionJob'];
        meta: {
            name: 'ConversionJob';
        };
    };
    /**
     * Find zero or one ConversionJob that matches the filter.
     * @param {ConversionJobFindUniqueArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversionJobFindUniqueArgs>(args: Prisma.SelectSubset<T, ConversionJobFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ConversionJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversionJobFindUniqueOrThrowArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversionJobFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConversionJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConversionJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindFirstArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversionJobFindFirstArgs>(args?: Prisma.SelectSubset<T, ConversionJobFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ConversionJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindFirstOrThrowArgs} args - Arguments to find a ConversionJob
     * @example
     * // Get one ConversionJob
     * const conversionJob = await prisma.conversionJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversionJobFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConversionJobFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ConversionJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConversionJobs
     * const conversionJobs = await prisma.conversionJob.findMany()
     *
     * // Get first 10 ConversionJobs
     * const conversionJobs = await prisma.conversionJob.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ConversionJobFindManyArgs>(args?: Prisma.SelectSubset<T, ConversionJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ConversionJob.
     * @param {ConversionJobCreateArgs} args - Arguments to create a ConversionJob.
     * @example
     * // Create one ConversionJob
     * const ConversionJob = await prisma.conversionJob.create({
     *   data: {
     *     // ... data to create a ConversionJob
     *   }
     * })
     *
     */
    create<T extends ConversionJobCreateArgs>(args: Prisma.SelectSubset<T, ConversionJobCreateArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ConversionJobs.
     * @param {ConversionJobCreateManyArgs} args - Arguments to create many ConversionJobs.
     * @example
     * // Create many ConversionJobs
     * const conversionJob = await prisma.conversionJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ConversionJobCreateManyArgs>(args?: Prisma.SelectSubset<T, ConversionJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ConversionJobs and returns the data saved in the database.
     * @param {ConversionJobCreateManyAndReturnArgs} args - Arguments to create many ConversionJobs.
     * @example
     * // Create many ConversionJobs
     * const conversionJob = await prisma.conversionJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ConversionJobs and only return the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ConversionJobCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConversionJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ConversionJob.
     * @param {ConversionJobDeleteArgs} args - Arguments to delete one ConversionJob.
     * @example
     * // Delete one ConversionJob
     * const ConversionJob = await prisma.conversionJob.delete({
     *   where: {
     *     // ... filter to delete one ConversionJob
     *   }
     * })
     *
     */
    delete<T extends ConversionJobDeleteArgs>(args: Prisma.SelectSubset<T, ConversionJobDeleteArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ConversionJob.
     * @param {ConversionJobUpdateArgs} args - Arguments to update one ConversionJob.
     * @example
     * // Update one ConversionJob
     * const conversionJob = await prisma.conversionJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ConversionJobUpdateArgs>(args: Prisma.SelectSubset<T, ConversionJobUpdateArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ConversionJobs.
     * @param {ConversionJobDeleteManyArgs} args - Arguments to filter ConversionJobs to delete.
     * @example
     * // Delete a few ConversionJobs
     * const { count } = await prisma.conversionJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ConversionJobDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConversionJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConversionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConversionJobs
     * const conversionJob = await prisma.conversionJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ConversionJobUpdateManyArgs>(args: Prisma.SelectSubset<T, ConversionJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ConversionJobs and returns the data updated in the database.
     * @param {ConversionJobUpdateManyAndReturnArgs} args - Arguments to update many ConversionJobs.
     * @example
     * // Update many ConversionJobs
     * const conversionJob = await prisma.conversionJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ConversionJobs and only return the `id`
     * const conversionJobWithIdOnly = await prisma.conversionJob.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConversionJobUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConversionJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ConversionJob.
     * @param {ConversionJobUpsertArgs} args - Arguments to update or create a ConversionJob.
     * @example
     * // Update or create a ConversionJob
     * const conversionJob = await prisma.conversionJob.upsert({
     *   create: {
     *     // ... data to create a ConversionJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConversionJob we want to update
     *   }
     * })
     */
    upsert<T extends ConversionJobUpsertArgs>(args: Prisma.SelectSubset<T, ConversionJobUpsertArgs<ExtArgs>>): Prisma.Prisma__ConversionJobClient<runtime.Types.Result.GetResult<Prisma.$ConversionJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ConversionJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobCountArgs} args - Arguments to filter ConversionJobs to count.
     * @example
     * // Count the number of ConversionJobs
     * const count = await prisma.conversionJob.count({
     *   where: {
     *     // ... the filter for the ConversionJobs we want to count
     *   }
     * })
    **/
    count<T extends ConversionJobCountArgs>(args?: Prisma.Subset<T, ConversionJobCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConversionJobCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ConversionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionJobAggregateArgs>(args: Prisma.Subset<T, ConversionJobAggregateArgs>): Prisma.PrismaPromise<GetConversionJobAggregateType<T>>;
    /**
     * Group by ConversionJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionJobGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ConversionJobGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConversionJobGroupByArgs['orderBy'];
    } : {
        orderBy?: ConversionJobGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConversionJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversionJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ConversionJob model
     */
    readonly fields: ConversionJobFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ConversionJob.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ConversionJobClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the ConversionJob model
 */
export interface ConversionJobFieldRefs {
    readonly id: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly userId: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly projectId: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly status: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly input: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly output: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly error: Prisma.FieldRef<"ConversionJob", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ConversionJob", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"ConversionJob", 'DateTime'>;
}
/**
 * ConversionJob findUnique
 */
export type ConversionJobFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter, which ConversionJob to fetch.
     */
    where: Prisma.ConversionJobWhereUniqueInput;
};
/**
 * ConversionJob findUniqueOrThrow
 */
export type ConversionJobFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter, which ConversionJob to fetch.
     */
    where: Prisma.ConversionJobWhereUniqueInput;
};
/**
 * ConversionJob findFirst
 */
export type ConversionJobFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter, which ConversionJob to fetch.
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: Prisma.ConversionJobOrderByWithRelationInput | Prisma.ConversionJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConversionJobs.
     */
    cursor?: Prisma.ConversionJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversionJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversionJobs.
     */
    distinct?: Prisma.ConversionJobScalarFieldEnum | Prisma.ConversionJobScalarFieldEnum[];
};
/**
 * ConversionJob findFirstOrThrow
 */
export type ConversionJobFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter, which ConversionJob to fetch.
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: Prisma.ConversionJobOrderByWithRelationInput | Prisma.ConversionJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ConversionJobs.
     */
    cursor?: Prisma.ConversionJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversionJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversionJobs.
     */
    distinct?: Prisma.ConversionJobScalarFieldEnum | Prisma.ConversionJobScalarFieldEnum[];
};
/**
 * ConversionJob findMany
 */
export type ConversionJobFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter, which ConversionJobs to fetch.
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ConversionJobs to fetch.
     */
    orderBy?: Prisma.ConversionJobOrderByWithRelationInput | Prisma.ConversionJobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ConversionJobs.
     */
    cursor?: Prisma.ConversionJobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ConversionJobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ConversionJobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ConversionJobs.
     */
    distinct?: Prisma.ConversionJobScalarFieldEnum | Prisma.ConversionJobScalarFieldEnum[];
};
/**
 * ConversionJob create
 */
export type ConversionJobCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * The data needed to create a ConversionJob.
     */
    data: Prisma.XOR<Prisma.ConversionJobCreateInput, Prisma.ConversionJobUncheckedCreateInput>;
};
/**
 * ConversionJob createMany
 */
export type ConversionJobCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConversionJobs.
     */
    data: Prisma.ConversionJobCreateManyInput | Prisma.ConversionJobCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConversionJob createManyAndReturn
 */
export type ConversionJobCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * The data used to create many ConversionJobs.
     */
    data: Prisma.ConversionJobCreateManyInput | Prisma.ConversionJobCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ConversionJob update
 */
export type ConversionJobUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * The data needed to update a ConversionJob.
     */
    data: Prisma.XOR<Prisma.ConversionJobUpdateInput, Prisma.ConversionJobUncheckedUpdateInput>;
    /**
     * Choose, which ConversionJob to update.
     */
    where: Prisma.ConversionJobWhereUniqueInput;
};
/**
 * ConversionJob updateMany
 */
export type ConversionJobUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ConversionJobs.
     */
    data: Prisma.XOR<Prisma.ConversionJobUpdateManyMutationInput, Prisma.ConversionJobUncheckedUpdateManyInput>;
    /**
     * Filter which ConversionJobs to update
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * Limit how many ConversionJobs to update.
     */
    limit?: number;
};
/**
 * ConversionJob updateManyAndReturn
 */
export type ConversionJobUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * The data used to update ConversionJobs.
     */
    data: Prisma.XOR<Prisma.ConversionJobUpdateManyMutationInput, Prisma.ConversionJobUncheckedUpdateManyInput>;
    /**
     * Filter which ConversionJobs to update
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * Limit how many ConversionJobs to update.
     */
    limit?: number;
};
/**
 * ConversionJob upsert
 */
export type ConversionJobUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * The filter to search for the ConversionJob to update in case it exists.
     */
    where: Prisma.ConversionJobWhereUniqueInput;
    /**
     * In case the ConversionJob found by the `where` argument doesn't exist, create a new ConversionJob with this data.
     */
    create: Prisma.XOR<Prisma.ConversionJobCreateInput, Prisma.ConversionJobUncheckedCreateInput>;
    /**
     * In case the ConversionJob was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ConversionJobUpdateInput, Prisma.ConversionJobUncheckedUpdateInput>;
};
/**
 * ConversionJob delete
 */
export type ConversionJobDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
    /**
     * Filter which ConversionJob to delete.
     */
    where: Prisma.ConversionJobWhereUniqueInput;
};
/**
 * ConversionJob deleteMany
 */
export type ConversionJobDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ConversionJobs to delete
     */
    where?: Prisma.ConversionJobWhereInput;
    /**
     * Limit how many ConversionJobs to delete.
     */
    limit?: number;
};
/**
 * ConversionJob without action
 */
export type ConversionJobDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversionJob
     */
    select?: Prisma.ConversionJobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ConversionJob
     */
    omit?: Prisma.ConversionJobOmit<ExtArgs> | null;
};
//# sourceMappingURL=ConversionJob.d.ts.map