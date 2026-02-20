import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken867 } from "./fragment867";
import type { FragmentToken868 } from "./fragment868";

export const FRAGMENT_869 = gql(`
  fragment Fragment869 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult869 = ResultOf<typeof FRAGMENT_869>;
type FragmentSelf869 = NonNullable<FragmentResult869>;

export type FragmentToken869 =
  | FragmentSelf869["__typename"]
  | FragmentSelf869["typenameHint"] | FragmentToken867 | FragmentToken868;
