import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1068 } from "./fragment1068";
import type { FragmentToken1069 } from "./fragment1069";

export const FRAGMENT_1070 = gql(`
  fragment Fragment1070 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult1070 = ResultOf<typeof FRAGMENT_1070>;
type FragmentSelf1070 = NonNullable<FragmentResult1070>;

export type FragmentToken1070 =
  | FragmentSelf1070["__typename"]
  | FragmentSelf1070["typenameHint"] | FragmentToken1068 | FragmentToken1069;
