import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1230 } from "./fragment1230";
import type { FragmentToken1231 } from "./fragment1231";

export const FRAGMENT_1232 = gql(`
  fragment Fragment1232 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult1232 = ResultOf<typeof FRAGMENT_1232>;
type FragmentSelf1232 = NonNullable<FragmentResult1232>;

export type FragmentToken1232 =
  | FragmentSelf1232["__typename"]
  | FragmentSelf1232["typenameHint"] | FragmentToken1230 | FragmentToken1231;
