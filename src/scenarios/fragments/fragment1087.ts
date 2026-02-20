import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1085 } from "./fragment1085";
import type { FragmentToken1086 } from "./fragment1086";

export const FRAGMENT_1087 = gql(`
  fragment Fragment1087 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult1087 = ResultOf<typeof FRAGMENT_1087>;
type FragmentSelf1087 = NonNullable<FragmentResult1087>;

export type FragmentToken1087 =
  | FragmentSelf1087["__typename"]
  | FragmentSelf1087["typenameHint"] | FragmentToken1085 | FragmentToken1086;
