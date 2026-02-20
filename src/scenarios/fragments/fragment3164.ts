import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3162 } from "./fragment3162";
import type { FragmentToken3163 } from "./fragment3163";

export const FRAGMENT_3164 = gql(`
  fragment Fragment3164 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult3164 = ResultOf<typeof FRAGMENT_3164>;
type FragmentSelf3164 = NonNullable<FragmentResult3164>;

export type FragmentToken3164 =
  | FragmentSelf3164["__typename"]
  | FragmentSelf3164["typenameHint"] | FragmentToken3162 | FragmentToken3163;
