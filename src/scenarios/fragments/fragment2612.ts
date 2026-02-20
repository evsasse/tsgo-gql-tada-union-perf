import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2610 } from "./fragment2610";
import type { FragmentToken2611 } from "./fragment2611";

export const FRAGMENT_2612 = gql(`
  fragment Fragment2612 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult2612 = ResultOf<typeof FRAGMENT_2612>;
type FragmentSelf2612 = NonNullable<FragmentResult2612>;

export type FragmentToken2612 =
  | FragmentSelf2612["__typename"]
  | FragmentSelf2612["typenameHint"] | FragmentToken2610 | FragmentToken2611;
