import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2700 } from "./fragment2700";
import type { FragmentToken2701 } from "./fragment2701";

export const FRAGMENT_2702 = gql(`
  fragment Fragment2702 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult2702 = ResultOf<typeof FRAGMENT_2702>;
type FragmentSelf2702 = NonNullable<FragmentResult2702>;

export type FragmentToken2702 =
  | FragmentSelf2702["__typename"]
  | FragmentSelf2702["typenameHint"] | FragmentToken2700 | FragmentToken2701;
