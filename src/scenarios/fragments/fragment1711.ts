import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1709 } from "./fragment1709";
import type { FragmentToken1710 } from "./fragment1710";

export const FRAGMENT_1711 = gql(`
  fragment Fragment1711 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult1711 = ResultOf<typeof FRAGMENT_1711>;
type FragmentSelf1711 = NonNullable<FragmentResult1711>;

export type FragmentToken1711 =
  | FragmentSelf1711["__typename"]
  | FragmentSelf1711["typenameHint"] | FragmentToken1709 | FragmentToken1710;
