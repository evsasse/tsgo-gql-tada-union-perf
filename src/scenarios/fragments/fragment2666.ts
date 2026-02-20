import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2664 } from "./fragment2664";
import type { FragmentToken2665 } from "./fragment2665";

export const FRAGMENT_2666 = gql(`
  fragment Fragment2666 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult2666 = ResultOf<typeof FRAGMENT_2666>;
type FragmentSelf2666 = NonNullable<FragmentResult2666>;

export type FragmentToken2666 =
  | FragmentSelf2666["__typename"]
  | FragmentSelf2666["typenameHint"] | FragmentToken2664 | FragmentToken2665;
