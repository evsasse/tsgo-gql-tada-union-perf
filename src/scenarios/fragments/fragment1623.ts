import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1621 } from "./fragment1621";
import type { FragmentToken1622 } from "./fragment1622";

export const FRAGMENT_1623 = gql(`
  fragment Fragment1623 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult1623 = ResultOf<typeof FRAGMENT_1623>;
type FragmentSelf1623 = NonNullable<FragmentResult1623>;

export type FragmentToken1623 =
  | FragmentSelf1623["__typename"]
  | FragmentSelf1623["typenameHint"] | FragmentToken1621 | FragmentToken1622;
