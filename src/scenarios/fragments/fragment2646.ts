import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2644 } from "./fragment2644";
import type { FragmentToken2645 } from "./fragment2645";

export const FRAGMENT_2646 = gql(`
  fragment Fragment2646 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult2646 = ResultOf<typeof FRAGMENT_2646>;
type FragmentSelf2646 = NonNullable<FragmentResult2646>;

export type FragmentToken2646 =
  | FragmentSelf2646["__typename"]
  | FragmentSelf2646["typenameHint"] | FragmentToken2644 | FragmentToken2645;
