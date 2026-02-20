import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1185 } from "./fragment1185";
import type { FragmentToken1186 } from "./fragment1186";

export const FRAGMENT_1187 = gql(`
  fragment Fragment1187 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult1187 = ResultOf<typeof FRAGMENT_1187>;
type FragmentSelf1187 = NonNullable<FragmentResult1187>;

export type FragmentToken1187 =
  | FragmentSelf1187["__typename"]
  | FragmentSelf1187["typenameHint"] | FragmentToken1185 | FragmentToken1186;
