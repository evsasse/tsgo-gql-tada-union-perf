import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3944 } from "./fragment3944";
import type { FragmentToken3945 } from "./fragment3945";

export const FRAGMENT_3946 = gql(`
  fragment Fragment3946 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult3946 = ResultOf<typeof FRAGMENT_3946>;
type FragmentSelf3946 = NonNullable<FragmentResult3946>;

export type FragmentToken3946 =
  | FragmentSelf3946["__typename"]
  | FragmentSelf3946["typenameHint"] | FragmentToken3944 | FragmentToken3945;
