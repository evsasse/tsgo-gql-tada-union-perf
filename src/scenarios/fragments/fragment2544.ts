import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2542 } from "./fragment2542";
import type { FragmentToken2543 } from "./fragment2543";

export const FRAGMENT_2544 = gql(`
  fragment Fragment2544 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult2544 = ResultOf<typeof FRAGMENT_2544>;
type FragmentSelf2544 = NonNullable<FragmentResult2544>;

export type FragmentToken2544 =
  | FragmentSelf2544["__typename"]
  | FragmentSelf2544["typenameHint"] | FragmentToken2542 | FragmentToken2543;
