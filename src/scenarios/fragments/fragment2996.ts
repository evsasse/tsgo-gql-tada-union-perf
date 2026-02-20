import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2994 } from "./fragment2994";
import type { FragmentToken2995 } from "./fragment2995";

export const FRAGMENT_2996 = gql(`
  fragment Fragment2996 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult2996 = ResultOf<typeof FRAGMENT_2996>;
type FragmentSelf2996 = NonNullable<FragmentResult2996>;

export type FragmentToken2996 =
  | FragmentSelf2996["__typename"]
  | FragmentSelf2996["typenameHint"] | FragmentToken2994 | FragmentToken2995;
