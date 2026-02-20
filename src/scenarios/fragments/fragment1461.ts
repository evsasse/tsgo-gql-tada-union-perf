import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1459 } from "./fragment1459";
import type { FragmentToken1460 } from "./fragment1460";

export const FRAGMENT_1461 = gql(`
  fragment Fragment1461 on Member60 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_60
    memberCount_60
    memberMetric_60
  }
`);

type FragmentResult1461 = ResultOf<typeof FRAGMENT_1461>;
type FragmentSelf1461 = NonNullable<FragmentResult1461>;

export type FragmentToken1461 =
  | FragmentSelf1461["__typename"]
  | FragmentSelf1461["typenameHint"] | FragmentToken1459 | FragmentToken1460;
