import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1096 } from "./fragment1096";
import type { FragmentToken1097 } from "./fragment1097";

export const FRAGMENT_1098 = gql(`
  fragment Fragment1098 on Member257 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_257
    memberCount_257
    memberMetric_257
  }
`);

type FragmentResult1098 = ResultOf<typeof FRAGMENT_1098>;
type FragmentSelf1098 = NonNullable<FragmentResult1098>;

export type FragmentToken1098 =
  | FragmentSelf1098["__typename"]
  | FragmentSelf1098["typenameHint"] | FragmentToken1096 | FragmentToken1097;
