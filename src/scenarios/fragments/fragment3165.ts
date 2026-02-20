import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3163 } from "./fragment3163";
import type { FragmentToken3164 } from "./fragment3164";

export const FRAGMENT_3165 = gql(`
  fragment Fragment3165 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult3165 = ResultOf<typeof FRAGMENT_3165>;
type FragmentSelf3165 = NonNullable<FragmentResult3165>;

export type FragmentToken3165 =
  | FragmentSelf3165["__typename"]
  | FragmentSelf3165["typenameHint"] | FragmentToken3163 | FragmentToken3164;
