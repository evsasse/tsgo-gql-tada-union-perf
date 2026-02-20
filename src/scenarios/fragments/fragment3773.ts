import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3771 } from "./fragment3771";
import type { FragmentToken3772 } from "./fragment3772";

export const FRAGMENT_3773 = gql(`
  fragment Fragment3773 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult3773 = ResultOf<typeof FRAGMENT_3773>;
type FragmentSelf3773 = NonNullable<FragmentResult3773>;

export type FragmentToken3773 =
  | FragmentSelf3773["__typename"]
  | FragmentSelf3773["typenameHint"] | FragmentToken3771 | FragmentToken3772;
