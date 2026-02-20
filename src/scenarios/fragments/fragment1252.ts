import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1250 } from "./fragment1250";
import type { FragmentToken1251 } from "./fragment1251";

export const FRAGMENT_1252 = gql(`
  fragment Fragment1252 on Member131 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_131
    memberCount_131
    memberMetric_131
  }
`);

type FragmentResult1252 = ResultOf<typeof FRAGMENT_1252>;
type FragmentSelf1252 = NonNullable<FragmentResult1252>;

export type FragmentToken1252 =
  | FragmentSelf1252["__typename"]
  | FragmentSelf1252["typenameHint"] | FragmentToken1250 | FragmentToken1251;
