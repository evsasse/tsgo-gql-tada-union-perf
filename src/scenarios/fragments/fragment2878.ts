import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2876 } from "./fragment2876";
import type { FragmentToken2877 } from "./fragment2877";

export const FRAGMENT_2878 = gql(`
  fragment Fragment2878 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult2878 = ResultOf<typeof FRAGMENT_2878>;
type FragmentSelf2878 = NonNullable<FragmentResult2878>;

export type FragmentToken2878 =
  | FragmentSelf2878["__typename"]
  | FragmentSelf2878["typenameHint"] | FragmentToken2876 | FragmentToken2877;
