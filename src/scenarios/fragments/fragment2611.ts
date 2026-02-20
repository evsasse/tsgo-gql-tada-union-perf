import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2609 } from "./fragment2609";
import type { FragmentToken2610 } from "./fragment2610";

export const FRAGMENT_2611 = gql(`
  fragment Fragment2611 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult2611 = ResultOf<typeof FRAGMENT_2611>;
type FragmentSelf2611 = NonNullable<FragmentResult2611>;

export type FragmentToken2611 =
  | FragmentSelf2611["__typename"]
  | FragmentSelf2611["typenameHint"] | FragmentToken2609 | FragmentToken2610;
