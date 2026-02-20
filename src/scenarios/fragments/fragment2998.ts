import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2996 } from "./fragment2996";
import type { FragmentToken2997 } from "./fragment2997";

export const FRAGMENT_2998 = gql(`
  fragment Fragment2998 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult2998 = ResultOf<typeof FRAGMENT_2998>;
type FragmentSelf2998 = NonNullable<FragmentResult2998>;

export type FragmentToken2998 =
  | FragmentSelf2998["__typename"]
  | FragmentSelf2998["typenameHint"] | FragmentToken2996 | FragmentToken2997;
