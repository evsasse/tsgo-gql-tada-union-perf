import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1281 } from "./fragment1281";
import type { FragmentToken1282 } from "./fragment1282";

export const FRAGMENT_1283 = gql(`
  fragment Fragment1283 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult1283 = ResultOf<typeof FRAGMENT_1283>;
type FragmentSelf1283 = NonNullable<FragmentResult1283>;

export type FragmentToken1283 =
  | FragmentSelf1283["__typename"]
  | FragmentSelf1283["typenameHint"] | FragmentToken1281 | FragmentToken1282;
