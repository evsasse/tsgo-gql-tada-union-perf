import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3745 } from "./fragment3745";
import type { FragmentToken3746 } from "./fragment3746";

export const FRAGMENT_3747 = gql(`
  fragment Fragment3747 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult3747 = ResultOf<typeof FRAGMENT_3747>;
type FragmentSelf3747 = NonNullable<FragmentResult3747>;

export type FragmentToken3747 =
  | FragmentSelf3747["__typename"]
  | FragmentSelf3747["typenameHint"] | FragmentToken3745 | FragmentToken3746;
