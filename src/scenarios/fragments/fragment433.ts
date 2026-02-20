import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken431 } from "./fragment431";
import type { FragmentToken432 } from "./fragment432";

export const FRAGMENT_433 = gql(`
  fragment Fragment433 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult433 = ResultOf<typeof FRAGMENT_433>;
type FragmentSelf433 = NonNullable<FragmentResult433>;

export type FragmentToken433 =
  | FragmentSelf433["__typename"]
  | FragmentSelf433["typenameHint"] | FragmentToken431 | FragmentToken432;
