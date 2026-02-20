import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3669 } from "./fragment3669";
import type { FragmentToken3670 } from "./fragment3670";

export const FRAGMENT_3671 = gql(`
  fragment Fragment3671 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult3671 = ResultOf<typeof FRAGMENT_3671>;
type FragmentSelf3671 = NonNullable<FragmentResult3671>;

export type FragmentToken3671 =
  | FragmentSelf3671["__typename"]
  | FragmentSelf3671["typenameHint"] | FragmentToken3669 | FragmentToken3670;
