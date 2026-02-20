import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3881 } from "./fragment3881";
import type { FragmentToken3882 } from "./fragment3882";

export const FRAGMENT_3883 = gql(`
  fragment Fragment3883 on Member242 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_242
    memberCount_242
    memberMetric_242
  }
`);

type FragmentResult3883 = ResultOf<typeof FRAGMENT_3883>;
type FragmentSelf3883 = NonNullable<FragmentResult3883>;

export type FragmentToken3883 =
  | FragmentSelf3883["__typename"]
  | FragmentSelf3883["typenameHint"] | FragmentToken3881 | FragmentToken3882;
