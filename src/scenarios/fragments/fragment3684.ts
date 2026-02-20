import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3682 } from "./fragment3682";
import type { FragmentToken3683 } from "./fragment3683";

export const FRAGMENT_3684 = gql(`
  fragment Fragment3684 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult3684 = ResultOf<typeof FRAGMENT_3684>;
type FragmentSelf3684 = NonNullable<FragmentResult3684>;

export type FragmentToken3684 =
  | FragmentSelf3684["__typename"]
  | FragmentSelf3684["typenameHint"] | FragmentToken3682 | FragmentToken3683;
