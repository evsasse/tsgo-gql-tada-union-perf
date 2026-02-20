import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3765 } from "./fragment3765";
import type { FragmentToken3766 } from "./fragment3766";

export const FRAGMENT_3767 = gql(`
  fragment Fragment3767 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult3767 = ResultOf<typeof FRAGMENT_3767>;
type FragmentSelf3767 = NonNullable<FragmentResult3767>;

export type FragmentToken3767 =
  | FragmentSelf3767["__typename"]
  | FragmentSelf3767["typenameHint"] | FragmentToken3765 | FragmentToken3766;
