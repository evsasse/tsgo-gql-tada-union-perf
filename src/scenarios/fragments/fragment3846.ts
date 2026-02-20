import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3844 } from "./fragment3844";
import type { FragmentToken3845 } from "./fragment3845";

export const FRAGMENT_3846 = gql(`
  fragment Fragment3846 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult3846 = ResultOf<typeof FRAGMENT_3846>;
type FragmentSelf3846 = NonNullable<FragmentResult3846>;

export type FragmentToken3846 =
  | FragmentSelf3846["__typename"]
  | FragmentSelf3846["typenameHint"] | FragmentToken3844 | FragmentToken3845;
