import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3535 } from "./fragment3535";
import type { FragmentToken3536 } from "./fragment3536";

export const FRAGMENT_3537 = gql(`
  fragment Fragment3537 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult3537 = ResultOf<typeof FRAGMENT_3537>;
type FragmentSelf3537 = NonNullable<FragmentResult3537>;

export type FragmentToken3537 =
  | FragmentSelf3537["__typename"]
  | FragmentSelf3537["typenameHint"] | FragmentToken3535 | FragmentToken3536;
