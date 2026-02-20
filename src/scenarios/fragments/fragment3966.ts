import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3964 } from "./fragment3964";
import type { FragmentToken3965 } from "./fragment3965";

export const FRAGMENT_3966 = gql(`
  fragment Fragment3966 on Member45 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_45
    memberCount_45
    memberMetric_45
  }
`);

type FragmentResult3966 = ResultOf<typeof FRAGMENT_3966>;
type FragmentSelf3966 = NonNullable<FragmentResult3966>;

export type FragmentToken3966 =
  | FragmentSelf3966["__typename"]
  | FragmentSelf3966["typenameHint"] | FragmentToken3964 | FragmentToken3965;
