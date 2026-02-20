import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1710 } from "./fragment1710";
import type { FragmentToken1711 } from "./fragment1711";

export const FRAGMENT_1712 = gql(`
  fragment Fragment1712 on Member31 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_31
    memberCount_31
    memberMetric_31
  }
`);

type FragmentResult1712 = ResultOf<typeof FRAGMENT_1712>;
type FragmentSelf1712 = NonNullable<FragmentResult1712>;

export type FragmentToken1712 =
  | FragmentSelf1712["__typename"]
  | FragmentSelf1712["typenameHint"] | FragmentToken1710 | FragmentToken1711;
