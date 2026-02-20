import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2992 } from "./fragment2992";
import type { FragmentToken2993 } from "./fragment2993";

export const FRAGMENT_2994 = gql(`
  fragment Fragment2994 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult2994 = ResultOf<typeof FRAGMENT_2994>;
type FragmentSelf2994 = NonNullable<FragmentResult2994>;

export type FragmentToken2994 =
  | FragmentSelf2994["__typename"]
  | FragmentSelf2994["typenameHint"] | FragmentToken2992 | FragmentToken2993;
