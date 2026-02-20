import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1048 } from "./fragment1048";
import type { FragmentToken1049 } from "./fragment1049";

export const FRAGMENT_1050 = gql(`
  fragment Fragment1050 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult1050 = ResultOf<typeof FRAGMENT_1050>;
type FragmentSelf1050 = NonNullable<FragmentResult1050>;

export type FragmentToken1050 =
  | FragmentSelf1050["__typename"]
  | FragmentSelf1050["typenameHint"] | FragmentToken1048 | FragmentToken1049;
