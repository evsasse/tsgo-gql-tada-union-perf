import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2707 } from "./fragment2707";
import type { FragmentToken2708 } from "./fragment2708";

export const FRAGMENT_2709 = gql(`
  fragment Fragment2709 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult2709 = ResultOf<typeof FRAGMENT_2709>;
type FragmentSelf2709 = NonNullable<FragmentResult2709>;

export type FragmentToken2709 =
  | FragmentSelf2709["__typename"]
  | FragmentSelf2709["typenameHint"] | FragmentToken2707 | FragmentToken2708;
