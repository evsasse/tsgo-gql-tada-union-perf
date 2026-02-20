import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3743 } from "./fragment3743";
import type { FragmentToken3744 } from "./fragment3744";

export const FRAGMENT_3745 = gql(`
  fragment Fragment3745 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult3745 = ResultOf<typeof FRAGMENT_3745>;
type FragmentSelf3745 = NonNullable<FragmentResult3745>;

export type FragmentToken3745 =
  | FragmentSelf3745["__typename"]
  | FragmentSelf3745["typenameHint"] | FragmentToken3743 | FragmentToken3744;
