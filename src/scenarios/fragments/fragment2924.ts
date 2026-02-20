import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2922 } from "./fragment2922";
import type { FragmentToken2923 } from "./fragment2923";

export const FRAGMENT_2924 = gql(`
  fragment Fragment2924 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult2924 = ResultOf<typeof FRAGMENT_2924>;
type FragmentSelf2924 = NonNullable<FragmentResult2924>;

export type FragmentToken2924 =
  | FragmentSelf2924["__typename"]
  | FragmentSelf2924["typenameHint"] | FragmentToken2922 | FragmentToken2923;
