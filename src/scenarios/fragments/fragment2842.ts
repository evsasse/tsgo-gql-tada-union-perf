import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2840 } from "./fragment2840";
import type { FragmentToken2841 } from "./fragment2841";

export const FRAGMENT_2842 = gql(`
  fragment Fragment2842 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult2842 = ResultOf<typeof FRAGMENT_2842>;
type FragmentSelf2842 = NonNullable<FragmentResult2842>;

export type FragmentToken2842 =
  | FragmentSelf2842["__typename"]
  | FragmentSelf2842["typenameHint"] | FragmentToken2840 | FragmentToken2841;
