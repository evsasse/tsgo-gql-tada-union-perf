import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1115 } from "./fragment1115";
import type { FragmentToken1116 } from "./fragment1116";

export const FRAGMENT_1117 = gql(`
  fragment Fragment1117 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult1117 = ResultOf<typeof FRAGMENT_1117>;
type FragmentSelf1117 = NonNullable<FragmentResult1117>;

export type FragmentToken1117 =
  | FragmentSelf1117["__typename"]
  | FragmentSelf1117["typenameHint"] | FragmentToken1115 | FragmentToken1116;
