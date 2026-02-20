import { initGraphQLTada } from "gql.tada";
import type { introspection } from "./__generated_schema";

export const gql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    ID: string;
    String: string;
    Int: number;
    Float: number;
    Boolean: boolean;
  };
}>();

export type { ResultOf, VariablesOf } from "gql.tada";
