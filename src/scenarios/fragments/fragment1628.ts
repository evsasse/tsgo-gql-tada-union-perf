import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1626 } from "./fragment1626";
import type { FragmentToken1627 } from "./fragment1627";

export const FRAGMENT_1628 = gql(`
  fragment Fragment1628 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult1628 = ResultOf<typeof FRAGMENT_1628>;
type FragmentSelf1628 = NonNullable<FragmentResult1628>;

export type FragmentToken1628 =
  | FragmentSelf1628["__typename"]
  | FragmentSelf1628["typenameHint"] | FragmentToken1626 | FragmentToken1627;
