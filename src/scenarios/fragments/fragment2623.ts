import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2621 } from "./fragment2621";
import type { FragmentToken2622 } from "./fragment2622";

export const FRAGMENT_2623 = gql(`
  fragment Fragment2623 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult2623 = ResultOf<typeof FRAGMENT_2623>;
type FragmentSelf2623 = NonNullable<FragmentResult2623>;

export type FragmentToken2623 =
  | FragmentSelf2623["__typename"]
  | FragmentSelf2623["typenameHint"] | FragmentToken2621 | FragmentToken2622;
