import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3619 } from "./fragment3619";
import type { FragmentToken3620 } from "./fragment3620";

export const FRAGMENT_3621 = gql(`
  fragment Fragment3621 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult3621 = ResultOf<typeof FRAGMENT_3621>;
type FragmentSelf3621 = NonNullable<FragmentResult3621>;

export type FragmentToken3621 =
  | FragmentSelf3621["__typename"]
  | FragmentSelf3621["typenameHint"] | FragmentToken3619 | FragmentToken3620;
