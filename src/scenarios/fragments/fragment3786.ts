import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3784 } from "./fragment3784";
import type { FragmentToken3785 } from "./fragment3785";

export const FRAGMENT_3786 = gql(`
  fragment Fragment3786 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult3786 = ResultOf<typeof FRAGMENT_3786>;
type FragmentSelf3786 = NonNullable<FragmentResult3786>;

export type FragmentToken3786 =
  | FragmentSelf3786["__typename"]
  | FragmentSelf3786["typenameHint"] | FragmentToken3784 | FragmentToken3785;
