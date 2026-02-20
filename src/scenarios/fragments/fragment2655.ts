import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2653 } from "./fragment2653";
import type { FragmentToken2654 } from "./fragment2654";

export const FRAGMENT_2655 = gql(`
  fragment Fragment2655 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult2655 = ResultOf<typeof FRAGMENT_2655>;
type FragmentSelf2655 = NonNullable<FragmentResult2655>;

export type FragmentToken2655 =
  | FragmentSelf2655["__typename"]
  | FragmentSelf2655["typenameHint"] | FragmentToken2653 | FragmentToken2654;
