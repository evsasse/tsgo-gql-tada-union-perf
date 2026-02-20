import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2817 } from "./fragment2817";
import type { FragmentToken2818 } from "./fragment2818";

export const FRAGMENT_2819 = gql(`
  fragment Fragment2819 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult2819 = ResultOf<typeof FRAGMENT_2819>;
type FragmentSelf2819 = NonNullable<FragmentResult2819>;

export type FragmentToken2819 =
  | FragmentSelf2819["__typename"]
  | FragmentSelf2819["typenameHint"] | FragmentToken2817 | FragmentToken2818;
