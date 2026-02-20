import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2686 } from "./fragment2686";
import type { FragmentToken2687 } from "./fragment2687";

export const FRAGMENT_2688 = gql(`
  fragment Fragment2688 on Member167 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_167
    memberCount_167
    memberMetric_167
  }
`);

type FragmentResult2688 = ResultOf<typeof FRAGMENT_2688>;
type FragmentSelf2688 = NonNullable<FragmentResult2688>;

export type FragmentToken2688 =
  | FragmentSelf2688["__typename"]
  | FragmentSelf2688["typenameHint"] | FragmentToken2686 | FragmentToken2687;
