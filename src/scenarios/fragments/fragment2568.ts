import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2566 } from "./fragment2566";
import type { FragmentToken2567 } from "./fragment2567";

export const FRAGMENT_2568 = gql(`
  fragment Fragment2568 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult2568 = ResultOf<typeof FRAGMENT_2568>;
type FragmentSelf2568 = NonNullable<FragmentResult2568>;

export type FragmentToken2568 =
  | FragmentSelf2568["__typename"]
  | FragmentSelf2568["typenameHint"] | FragmentToken2566 | FragmentToken2567;
