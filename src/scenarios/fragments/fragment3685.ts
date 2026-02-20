import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3683 } from "./fragment3683";
import type { FragmentToken3684 } from "./fragment3684";

export const FRAGMENT_3685 = gql(`
  fragment Fragment3685 on Member44 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_44
    memberCount_44
    memberMetric_44
  }
`);

type FragmentResult3685 = ResultOf<typeof FRAGMENT_3685>;
type FragmentSelf3685 = NonNullable<FragmentResult3685>;

export type FragmentToken3685 =
  | FragmentSelf3685["__typename"]
  | FragmentSelf3685["typenameHint"] | FragmentToken3683 | FragmentToken3684;
