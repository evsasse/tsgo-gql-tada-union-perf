import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3671 } from "./fragment3671";
import type { FragmentToken3672 } from "./fragment3672";

export const FRAGMENT_3673 = gql(`
  fragment Fragment3673 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult3673 = ResultOf<typeof FRAGMENT_3673>;
type FragmentSelf3673 = NonNullable<FragmentResult3673>;

export type FragmentToken3673 =
  | FragmentSelf3673["__typename"]
  | FragmentSelf3673["typenameHint"] | FragmentToken3671 | FragmentToken3672;
