import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3534 } from "./fragment3534";
import type { FragmentToken3535 } from "./fragment3535";

export const FRAGMENT_3536 = gql(`
  fragment Fragment3536 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult3536 = ResultOf<typeof FRAGMENT_3536>;
type FragmentSelf3536 = NonNullable<FragmentResult3536>;

export type FragmentToken3536 =
  | FragmentSelf3536["__typename"]
  | FragmentSelf3536["typenameHint"] | FragmentToken3534 | FragmentToken3535;
