import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2995 } from "./fragment2995";
import type { FragmentToken2996 } from "./fragment2996";

export const FRAGMENT_2997 = gql(`
  fragment Fragment2997 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult2997 = ResultOf<typeof FRAGMENT_2997>;
type FragmentSelf2997 = NonNullable<FragmentResult2997>;

export type FragmentToken2997 =
  | FragmentSelf2997["__typename"]
  | FragmentSelf2997["typenameHint"] | FragmentToken2995 | FragmentToken2996;
