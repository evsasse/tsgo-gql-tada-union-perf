import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3073 } from "./fragment3073";
import type { FragmentToken3074 } from "./fragment3074";

export const FRAGMENT_3075 = gql(`
  fragment Fragment3075 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult3075 = ResultOf<typeof FRAGMENT_3075>;
type FragmentSelf3075 = NonNullable<FragmentResult3075>;

export type FragmentToken3075 =
  | FragmentSelf3075["__typename"]
  | FragmentSelf3075["typenameHint"] | FragmentToken3073 | FragmentToken3074;
