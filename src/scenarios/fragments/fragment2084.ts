import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2082 } from "./fragment2082";
import type { FragmentToken2083 } from "./fragment2083";

export const FRAGMENT_2084 = gql(`
  fragment Fragment2084 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult2084 = ResultOf<typeof FRAGMENT_2084>;
type FragmentSelf2084 = NonNullable<FragmentResult2084>;

export type FragmentToken2084 =
  | FragmentSelf2084["__typename"]
  | FragmentSelf2084["typenameHint"] | FragmentToken2082 | FragmentToken2083;
