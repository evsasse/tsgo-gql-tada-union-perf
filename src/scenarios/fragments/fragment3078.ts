import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3076 } from "./fragment3076";
import type { FragmentToken3077 } from "./fragment3077";

export const FRAGMENT_3078 = gql(`
  fragment Fragment3078 on Member277 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_277
    memberCount_277
    memberMetric_277
  }
`);

type FragmentResult3078 = ResultOf<typeof FRAGMENT_3078>;
type FragmentSelf3078 = NonNullable<FragmentResult3078>;

export type FragmentToken3078 =
  | FragmentSelf3078["__typename"]
  | FragmentSelf3078["typenameHint"] | FragmentToken3076 | FragmentToken3077;
