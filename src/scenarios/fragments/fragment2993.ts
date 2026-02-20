import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2991 } from "./fragment2991";
import type { FragmentToken2992 } from "./fragment2992";

export const FRAGMENT_2993 = gql(`
  fragment Fragment2993 on Member192 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_192
    memberCount_192
    memberMetric_192
  }
`);

type FragmentResult2993 = ResultOf<typeof FRAGMENT_2993>;
type FragmentSelf2993 = NonNullable<FragmentResult2993>;

export type FragmentToken2993 =
  | FragmentSelf2993["__typename"]
  | FragmentSelf2993["typenameHint"] | FragmentToken2991 | FragmentToken2992;
