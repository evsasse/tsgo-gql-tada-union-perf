import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1200 } from "./fragment1200";
import type { FragmentToken1201 } from "./fragment1201";

export const FRAGMENT_1202 = gql(`
  fragment Fragment1202 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult1202 = ResultOf<typeof FRAGMENT_1202>;
type FragmentSelf1202 = NonNullable<FragmentResult1202>;

export type FragmentToken1202 =
  | FragmentSelf1202["__typename"]
  | FragmentSelf1202["typenameHint"] | FragmentToken1200 | FragmentToken1201;
