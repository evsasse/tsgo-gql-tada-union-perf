import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2196 } from "./fragment2196";
import type { FragmentToken2197 } from "./fragment2197";

export const FRAGMENT_2198 = gql(`
  fragment Fragment2198 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult2198 = ResultOf<typeof FRAGMENT_2198>;
type FragmentSelf2198 = NonNullable<FragmentResult2198>;

export type FragmentToken2198 =
  | FragmentSelf2198["__typename"]
  | FragmentSelf2198["typenameHint"] | FragmentToken2196 | FragmentToken2197;
