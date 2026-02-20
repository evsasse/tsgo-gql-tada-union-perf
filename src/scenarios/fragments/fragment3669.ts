import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3667 } from "./fragment3667";
import type { FragmentToken3668 } from "./fragment3668";

export const FRAGMENT_3669 = gql(`
  fragment Fragment3669 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult3669 = ResultOf<typeof FRAGMENT_3669>;
type FragmentSelf3669 = NonNullable<FragmentResult3669>;

export type FragmentToken3669 =
  | FragmentSelf3669["__typename"]
  | FragmentSelf3669["typenameHint"] | FragmentToken3667 | FragmentToken3668;
