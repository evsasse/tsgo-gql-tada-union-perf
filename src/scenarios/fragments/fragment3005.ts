import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3003 } from "./fragment3003";
import type { FragmentToken3004 } from "./fragment3004";

export const FRAGMENT_3005 = gql(`
  fragment Fragment3005 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult3005 = ResultOf<typeof FRAGMENT_3005>;
type FragmentSelf3005 = NonNullable<FragmentResult3005>;

export type FragmentToken3005 =
  | FragmentSelf3005["__typename"]
  | FragmentSelf3005["typenameHint"] | FragmentToken3003 | FragmentToken3004;
