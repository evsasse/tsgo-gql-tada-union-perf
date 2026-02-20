import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2741 } from "./fragment2741";
import type { FragmentToken2742 } from "./fragment2742";

export const FRAGMENT_2743 = gql(`
  fragment Fragment2743 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult2743 = ResultOf<typeof FRAGMENT_2743>;
type FragmentSelf2743 = NonNullable<FragmentResult2743>;

export type FragmentToken2743 =
  | FragmentSelf2743["__typename"]
  | FragmentSelf2743["typenameHint"] | FragmentToken2741 | FragmentToken2742;
