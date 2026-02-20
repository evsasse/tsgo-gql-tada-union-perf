import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1510 } from "./fragment1510";
import type { FragmentToken1511 } from "./fragment1511";

export const FRAGMENT_1512 = gql(`
  fragment Fragment1512 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult1512 = ResultOf<typeof FRAGMENT_1512>;
type FragmentSelf1512 = NonNullable<FragmentResult1512>;

export type FragmentToken1512 =
  | FragmentSelf1512["__typename"]
  | FragmentSelf1512["typenameHint"] | FragmentToken1510 | FragmentToken1511;
