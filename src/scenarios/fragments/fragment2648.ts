import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2646 } from "./fragment2646";
import type { FragmentToken2647 } from "./fragment2647";

export const FRAGMENT_2648 = gql(`
  fragment Fragment2648 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult2648 = ResultOf<typeof FRAGMENT_2648>;
type FragmentSelf2648 = NonNullable<FragmentResult2648>;

export type FragmentToken2648 =
  | FragmentSelf2648["__typename"]
  | FragmentSelf2648["typenameHint"] | FragmentToken2646 | FragmentToken2647;
