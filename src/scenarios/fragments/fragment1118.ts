import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1116 } from "./fragment1116";
import type { FragmentToken1117 } from "./fragment1117";

export const FRAGMENT_1118 = gql(`
  fragment Fragment1118 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult1118 = ResultOf<typeof FRAGMENT_1118>;
type FragmentSelf1118 = NonNullable<FragmentResult1118>;

export type FragmentToken1118 =
  | FragmentSelf1118["__typename"]
  | FragmentSelf1118["typenameHint"] | FragmentToken1116 | FragmentToken1117;
