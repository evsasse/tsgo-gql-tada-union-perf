import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3758 } from "./fragment3758";
import type { FragmentToken3759 } from "./fragment3759";

export const FRAGMENT_3760 = gql(`
  fragment Fragment3760 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult3760 = ResultOf<typeof FRAGMENT_3760>;
type FragmentSelf3760 = NonNullable<FragmentResult3760>;

export type FragmentToken3760 =
  | FragmentSelf3760["__typename"]
  | FragmentSelf3760["typenameHint"] | FragmentToken3758 | FragmentToken3759;
