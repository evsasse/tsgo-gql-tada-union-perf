import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2709 } from "./fragment2709";
import type { FragmentToken2710 } from "./fragment2710";

export const FRAGMENT_2711 = gql(`
  fragment Fragment2711 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult2711 = ResultOf<typeof FRAGMENT_2711>;
type FragmentSelf2711 = NonNullable<FragmentResult2711>;

export type FragmentToken2711 =
  | FragmentSelf2711["__typename"]
  | FragmentSelf2711["typenameHint"] | FragmentToken2709 | FragmentToken2710;
