import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2066 } from "./fragment2066";
import type { FragmentToken2067 } from "./fragment2067";

export const FRAGMENT_2068 = gql(`
  fragment Fragment2068 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult2068 = ResultOf<typeof FRAGMENT_2068>;
type FragmentSelf2068 = NonNullable<FragmentResult2068>;

export type FragmentToken2068 =
  | FragmentSelf2068["__typename"]
  | FragmentSelf2068["typenameHint"] | FragmentToken2066 | FragmentToken2067;
