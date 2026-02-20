import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1676 } from "./fragment1676";
import type { FragmentToken1677 } from "./fragment1677";

export const FRAGMENT_1678 = gql(`
  fragment Fragment1678 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult1678 = ResultOf<typeof FRAGMENT_1678>;
type FragmentSelf1678 = NonNullable<FragmentResult1678>;

export type FragmentToken1678 =
  | FragmentSelf1678["__typename"]
  | FragmentSelf1678["typenameHint"] | FragmentToken1676 | FragmentToken1677;
