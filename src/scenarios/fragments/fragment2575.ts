import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2573 } from "./fragment2573";
import type { FragmentToken2574 } from "./fragment2574";

export const FRAGMENT_2575 = gql(`
  fragment Fragment2575 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult2575 = ResultOf<typeof FRAGMENT_2575>;
type FragmentSelf2575 = NonNullable<FragmentResult2575>;

export type FragmentToken2575 =
  | FragmentSelf2575["__typename"]
  | FragmentSelf2575["typenameHint"] | FragmentToken2573 | FragmentToken2574;
