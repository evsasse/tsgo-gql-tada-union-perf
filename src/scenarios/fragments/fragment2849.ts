import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2847 } from "./fragment2847";
import type { FragmentToken2848 } from "./fragment2848";

export const FRAGMENT_2849 = gql(`
  fragment Fragment2849 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult2849 = ResultOf<typeof FRAGMENT_2849>;
type FragmentSelf2849 = NonNullable<FragmentResult2849>;

export type FragmentToken2849 =
  | FragmentSelf2849["__typename"]
  | FragmentSelf2849["typenameHint"] | FragmentToken2847 | FragmentToken2848;
