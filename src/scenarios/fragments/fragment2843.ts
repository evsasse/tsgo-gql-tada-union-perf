import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2841 } from "./fragment2841";
import type { FragmentToken2842 } from "./fragment2842";

export const FRAGMENT_2843 = gql(`
  fragment Fragment2843 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult2843 = ResultOf<typeof FRAGMENT_2843>;
type FragmentSelf2843 = NonNullable<FragmentResult2843>;

export type FragmentToken2843 =
  | FragmentSelf2843["__typename"]
  | FragmentSelf2843["typenameHint"] | FragmentToken2841 | FragmentToken2842;
