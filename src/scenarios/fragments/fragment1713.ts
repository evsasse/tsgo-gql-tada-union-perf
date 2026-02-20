import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1711 } from "./fragment1711";
import type { FragmentToken1712 } from "./fragment1712";

export const FRAGMENT_1713 = gql(`
  fragment Fragment1713 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult1713 = ResultOf<typeof FRAGMENT_1713>;
type FragmentSelf1713 = NonNullable<FragmentResult1713>;

export type FragmentToken1713 =
  | FragmentSelf1713["__typename"]
  | FragmentSelf1713["typenameHint"] | FragmentToken1711 | FragmentToken1712;
