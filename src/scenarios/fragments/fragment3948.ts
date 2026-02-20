import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3946 } from "./fragment3946";
import type { FragmentToken3947 } from "./fragment3947";

export const FRAGMENT_3948 = gql(`
  fragment Fragment3948 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult3948 = ResultOf<typeof FRAGMENT_3948>;
type FragmentSelf3948 = NonNullable<FragmentResult3948>;

export type FragmentToken3948 =
  | FragmentSelf3948["__typename"]
  | FragmentSelf3948["typenameHint"] | FragmentToken3946 | FragmentToken3947;
