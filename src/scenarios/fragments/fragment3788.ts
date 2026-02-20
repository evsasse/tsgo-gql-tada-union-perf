import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3786 } from "./fragment3786";
import type { FragmentToken3787 } from "./fragment3787";

export const FRAGMENT_3788 = gql(`
  fragment Fragment3788 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult3788 = ResultOf<typeof FRAGMENT_3788>;
type FragmentSelf3788 = NonNullable<FragmentResult3788>;

export type FragmentToken3788 =
  | FragmentSelf3788["__typename"]
  | FragmentSelf3788["typenameHint"] | FragmentToken3786 | FragmentToken3787;
