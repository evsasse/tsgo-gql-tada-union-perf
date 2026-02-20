import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3113 } from "./fragment3113";
import type { FragmentToken3114 } from "./fragment3114";

export const FRAGMENT_3115 = gql(`
  fragment Fragment3115 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult3115 = ResultOf<typeof FRAGMENT_3115>;
type FragmentSelf3115 = NonNullable<FragmentResult3115>;

export type FragmentToken3115 =
  | FragmentSelf3115["__typename"]
  | FragmentSelf3115["typenameHint"] | FragmentToken3113 | FragmentToken3114;
