import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2982 } from "./fragment2982";
import type { FragmentToken2983 } from "./fragment2983";

export const FRAGMENT_2984 = gql(`
  fragment Fragment2984 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult2984 = ResultOf<typeof FRAGMENT_2984>;
type FragmentSelf2984 = NonNullable<FragmentResult2984>;

export type FragmentToken2984 =
  | FragmentSelf2984["__typename"]
  | FragmentSelf2984["typenameHint"] | FragmentToken2982 | FragmentToken2983;
