import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2620 } from "./fragment2620";
import type { FragmentToken2621 } from "./fragment2621";

export const FRAGMENT_2622 = gql(`
  fragment Fragment2622 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult2622 = ResultOf<typeof FRAGMENT_2622>;
type FragmentSelf2622 = NonNullable<FragmentResult2622>;

export type FragmentToken2622 =
  | FragmentSelf2622["__typename"]
  | FragmentSelf2622["typenameHint"] | FragmentToken2620 | FragmentToken2621;
