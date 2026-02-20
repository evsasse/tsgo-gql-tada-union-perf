import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2645 } from "./fragment2645";
import type { FragmentToken2646 } from "./fragment2646";

export const FRAGMENT_2647 = gql(`
  fragment Fragment2647 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult2647 = ResultOf<typeof FRAGMENT_2647>;
type FragmentSelf2647 = NonNullable<FragmentResult2647>;

export type FragmentToken2647 =
  | FragmentSelf2647["__typename"]
  | FragmentSelf2647["typenameHint"] | FragmentToken2645 | FragmentToken2646;
