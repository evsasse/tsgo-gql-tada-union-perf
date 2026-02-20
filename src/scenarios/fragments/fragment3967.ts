import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3965 } from "./fragment3965";
import type { FragmentToken3966 } from "./fragment3966";

export const FRAGMENT_3967 = gql(`
  fragment Fragment3967 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult3967 = ResultOf<typeof FRAGMENT_3967>;
type FragmentSelf3967 = NonNullable<FragmentResult3967>;

export type FragmentToken3967 =
  | FragmentSelf3967["__typename"]
  | FragmentSelf3967["typenameHint"] | FragmentToken3965 | FragmentToken3966;
