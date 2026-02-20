import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2628 } from "./fragment2628";
import type { FragmentToken2629 } from "./fragment2629";

export const FRAGMENT_2630 = gql(`
  fragment Fragment2630 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult2630 = ResultOf<typeof FRAGMENT_2630>;
type FragmentSelf2630 = NonNullable<FragmentResult2630>;

export type FragmentToken2630 =
  | FragmentSelf2630["__typename"]
  | FragmentSelf2630["typenameHint"] | FragmentToken2628 | FragmentToken2629;
