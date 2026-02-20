import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2759 } from "./fragment2759";
import type { FragmentToken2760 } from "./fragment2760";

export const FRAGMENT_2761 = gql(`
  fragment Fragment2761 on Member240 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_240
    memberCount_240
    memberMetric_240
  }
`);

type FragmentResult2761 = ResultOf<typeof FRAGMENT_2761>;
type FragmentSelf2761 = NonNullable<FragmentResult2761>;

export type FragmentToken2761 =
  | FragmentSelf2761["__typename"]
  | FragmentSelf2761["typenameHint"] | FragmentToken2759 | FragmentToken2760;
