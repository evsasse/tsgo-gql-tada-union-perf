import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3995 } from "./fragment3995";
import type { FragmentToken3996 } from "./fragment3996";

export const FRAGMENT_3997 = gql(`
  fragment Fragment3997 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult3997 = ResultOf<typeof FRAGMENT_3997>;
type FragmentSelf3997 = NonNullable<FragmentResult3997>;

export type FragmentToken3997 =
  | FragmentSelf3997["__typename"]
  | FragmentSelf3997["typenameHint"] | FragmentToken3995 | FragmentToken3996;
