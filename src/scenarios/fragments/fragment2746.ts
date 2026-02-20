import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2744 } from "./fragment2744";
import type { FragmentToken2745 } from "./fragment2745";

export const FRAGMENT_2746 = gql(`
  fragment Fragment2746 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult2746 = ResultOf<typeof FRAGMENT_2746>;
type FragmentSelf2746 = NonNullable<FragmentResult2746>;

export type FragmentToken2746 =
  | FragmentSelf2746["__typename"]
  | FragmentSelf2746["typenameHint"] | FragmentToken2744 | FragmentToken2745;
