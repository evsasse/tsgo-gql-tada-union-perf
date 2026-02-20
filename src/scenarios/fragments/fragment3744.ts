import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3742 } from "./fragment3742";
import type { FragmentToken3743 } from "./fragment3743";

export const FRAGMENT_3744 = gql(`
  fragment Fragment3744 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult3744 = ResultOf<typeof FRAGMENT_3744>;
type FragmentSelf3744 = NonNullable<FragmentResult3744>;

export type FragmentToken3744 =
  | FragmentSelf3744["__typename"]
  | FragmentSelf3744["typenameHint"] | FragmentToken3742 | FragmentToken3743;
