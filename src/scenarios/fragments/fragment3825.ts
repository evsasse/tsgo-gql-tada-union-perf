import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3823 } from "./fragment3823";
import type { FragmentToken3824 } from "./fragment3824";

export const FRAGMENT_3825 = gql(`
  fragment Fragment3825 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult3825 = ResultOf<typeof FRAGMENT_3825>;
type FragmentSelf3825 = NonNullable<FragmentResult3825>;

export type FragmentToken3825 =
  | FragmentSelf3825["__typename"]
  | FragmentSelf3825["typenameHint"] | FragmentToken3823 | FragmentToken3824;
