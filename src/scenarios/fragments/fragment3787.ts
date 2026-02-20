import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3785 } from "./fragment3785";
import type { FragmentToken3786 } from "./fragment3786";

export const FRAGMENT_3787 = gql(`
  fragment Fragment3787 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult3787 = ResultOf<typeof FRAGMENT_3787>;
type FragmentSelf3787 = NonNullable<FragmentResult3787>;

export type FragmentToken3787 =
  | FragmentSelf3787["__typename"]
  | FragmentSelf3787["typenameHint"] | FragmentToken3785 | FragmentToken3786;
