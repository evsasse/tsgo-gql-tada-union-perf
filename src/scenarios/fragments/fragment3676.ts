import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3674 } from "./fragment3674";
import type { FragmentToken3675 } from "./fragment3675";

export const FRAGMENT_3676 = gql(`
  fragment Fragment3676 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult3676 = ResultOf<typeof FRAGMENT_3676>;
type FragmentSelf3676 = NonNullable<FragmentResult3676>;

export type FragmentToken3676 =
  | FragmentSelf3676["__typename"]
  | FragmentSelf3676["typenameHint"] | FragmentToken3674 | FragmentToken3675;
