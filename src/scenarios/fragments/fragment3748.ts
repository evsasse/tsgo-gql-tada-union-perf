import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3746 } from "./fragment3746";
import type { FragmentToken3747 } from "./fragment3747";

export const FRAGMENT_3748 = gql(`
  fragment Fragment3748 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult3748 = ResultOf<typeof FRAGMENT_3748>;
type FragmentSelf3748 = NonNullable<FragmentResult3748>;

export type FragmentToken3748 =
  | FragmentSelf3748["__typename"]
  | FragmentSelf3748["typenameHint"] | FragmentToken3746 | FragmentToken3747;
