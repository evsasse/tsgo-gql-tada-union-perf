import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2708 } from "./fragment2708";
import type { FragmentToken2709 } from "./fragment2709";

export const FRAGMENT_2710 = gql(`
  fragment Fragment2710 on Member189 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_189
    memberCount_189
    memberMetric_189
  }
`);

type FragmentResult2710 = ResultOf<typeof FRAGMENT_2710>;
type FragmentSelf2710 = NonNullable<FragmentResult2710>;

export type FragmentToken2710 =
  | FragmentSelf2710["__typename"]
  | FragmentSelf2710["typenameHint"] | FragmentToken2708 | FragmentToken2709;
