import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1092 } from "./fragment1092";
import type { FragmentToken1093 } from "./fragment1093";

export const FRAGMENT_1094 = gql(`
  fragment Fragment1094 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult1094 = ResultOf<typeof FRAGMENT_1094>;
type FragmentSelf1094 = NonNullable<FragmentResult1094>;

export type FragmentToken1094 =
  | FragmentSelf1094["__typename"]
  | FragmentSelf1094["typenameHint"] | FragmentToken1092 | FragmentToken1093;
