import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2926 } from "./fragment2926";
import type { FragmentToken2927 } from "./fragment2927";

export const FRAGMENT_2928 = gql(`
  fragment Fragment2928 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult2928 = ResultOf<typeof FRAGMENT_2928>;
type FragmentSelf2928 = NonNullable<FragmentResult2928>;

export type FragmentToken2928 =
  | FragmentSelf2928["__typename"]
  | FragmentSelf2928["typenameHint"] | FragmentToken2926 | FragmentToken2927;
