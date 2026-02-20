import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1228 } from "./fragment1228";
import type { FragmentToken1229 } from "./fragment1229";

export const FRAGMENT_1230 = gql(`
  fragment Fragment1230 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult1230 = ResultOf<typeof FRAGMENT_1230>;
type FragmentSelf1230 = NonNullable<FragmentResult1230>;

export type FragmentToken1230 =
  | FragmentSelf1230["__typename"]
  | FragmentSelf1230["typenameHint"] | FragmentToken1228 | FragmentToken1229;
