import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3769 } from "./fragment3769";
import type { FragmentToken3770 } from "./fragment3770";

export const FRAGMENT_3771 = gql(`
  fragment Fragment3771 on Member130 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_130
    memberCount_130
    memberMetric_130
  }
`);

type FragmentResult3771 = ResultOf<typeof FRAGMENT_3771>;
type FragmentSelf3771 = NonNullable<FragmentResult3771>;

export type FragmentToken3771 =
  | FragmentSelf3771["__typename"]
  | FragmentSelf3771["typenameHint"] | FragmentToken3769 | FragmentToken3770;
