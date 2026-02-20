import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1165 } from "./fragment1165";
import type { FragmentToken1166 } from "./fragment1166";

export const FRAGMENT_1167 = gql(`
  fragment Fragment1167 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult1167 = ResultOf<typeof FRAGMENT_1167>;
type FragmentSelf1167 = NonNullable<FragmentResult1167>;

export type FragmentToken1167 =
  | FragmentSelf1167["__typename"]
  | FragmentSelf1167["typenameHint"] | FragmentToken1165 | FragmentToken1166;
