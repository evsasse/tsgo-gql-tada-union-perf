import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2710 } from "./fragment2710";
import type { FragmentToken2711 } from "./fragment2711";

export const FRAGMENT_2712 = gql(`
  fragment Fragment2712 on Member191 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_191
    memberCount_191
    memberMetric_191
  }
`);

type FragmentResult2712 = ResultOf<typeof FRAGMENT_2712>;
type FragmentSelf2712 = NonNullable<FragmentResult2712>;

export type FragmentToken2712 =
  | FragmentSelf2712["__typename"]
  | FragmentSelf2712["typenameHint"] | FragmentToken2710 | FragmentToken2711;
