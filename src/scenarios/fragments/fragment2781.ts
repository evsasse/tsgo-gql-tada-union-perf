import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2779 } from "./fragment2779";
import type { FragmentToken2780 } from "./fragment2780";

export const FRAGMENT_2781 = gql(`
  fragment Fragment2781 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult2781 = ResultOf<typeof FRAGMENT_2781>;
type FragmentSelf2781 = NonNullable<FragmentResult2781>;

export type FragmentToken2781 =
  | FragmentSelf2781["__typename"]
  | FragmentSelf2781["typenameHint"] | FragmentToken2779 | FragmentToken2780;
