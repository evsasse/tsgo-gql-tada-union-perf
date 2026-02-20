import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2660 } from "./fragment2660";
import type { FragmentToken2661 } from "./fragment2661";

export const FRAGMENT_2662 = gql(`
  fragment Fragment2662 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult2662 = ResultOf<typeof FRAGMENT_2662>;
type FragmentSelf2662 = NonNullable<FragmentResult2662>;

export type FragmentToken2662 =
  | FragmentSelf2662["__typename"]
  | FragmentSelf2662["typenameHint"] | FragmentToken2660 | FragmentToken2661;
