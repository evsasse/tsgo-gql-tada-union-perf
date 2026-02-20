import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1202 } from "./fragment1202";
import type { FragmentToken1203 } from "./fragment1203";

export const FRAGMENT_1204 = gql(`
  fragment Fragment1204 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult1204 = ResultOf<typeof FRAGMENT_1204>;
type FragmentSelf1204 = NonNullable<FragmentResult1204>;

export type FragmentToken1204 =
  | FragmentSelf1204["__typename"]
  | FragmentSelf1204["typenameHint"] | FragmentToken1202 | FragmentToken1203;
