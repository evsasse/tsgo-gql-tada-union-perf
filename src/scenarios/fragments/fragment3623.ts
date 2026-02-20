import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3621 } from "./fragment3621";
import type { FragmentToken3622 } from "./fragment3622";

export const FRAGMENT_3623 = gql(`
  fragment Fragment3623 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult3623 = ResultOf<typeof FRAGMENT_3623>;
type FragmentSelf3623 = NonNullable<FragmentResult3623>;

export type FragmentToken3623 =
  | FragmentSelf3623["__typename"]
  | FragmentSelf3623["typenameHint"] | FragmentToken3621 | FragmentToken3622;
