import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1282 } from "./fragment1282";
import type { FragmentToken1283 } from "./fragment1283";

export const FRAGMENT_1284 = gql(`
  fragment Fragment1284 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult1284 = ResultOf<typeof FRAGMENT_1284>;
type FragmentSelf1284 = NonNullable<FragmentResult1284>;

export type FragmentToken1284 =
  | FragmentSelf1284["__typename"]
  | FragmentSelf1284["typenameHint"] | FragmentToken1282 | FragmentToken1283;
