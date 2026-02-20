import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2853 } from "./fragment2853";
import type { FragmentToken2854 } from "./fragment2854";

export const FRAGMENT_2855 = gql(`
  fragment Fragment2855 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult2855 = ResultOf<typeof FRAGMENT_2855>;
type FragmentSelf2855 = NonNullable<FragmentResult2855>;

export type FragmentToken2855 =
  | FragmentSelf2855["__typename"]
  | FragmentSelf2855["typenameHint"] | FragmentToken2853 | FragmentToken2854;
