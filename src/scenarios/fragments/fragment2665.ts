import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2663 } from "./fragment2663";
import type { FragmentToken2664 } from "./fragment2664";

export const FRAGMENT_2665 = gql(`
  fragment Fragment2665 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult2665 = ResultOf<typeof FRAGMENT_2665>;
type FragmentSelf2665 = NonNullable<FragmentResult2665>;

export type FragmentToken2665 =
  | FragmentSelf2665["__typename"]
  | FragmentSelf2665["typenameHint"] | FragmentToken2663 | FragmentToken2664;
