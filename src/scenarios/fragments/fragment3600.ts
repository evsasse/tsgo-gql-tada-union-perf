import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3598 } from "./fragment3598";
import type { FragmentToken3599 } from "./fragment3599";

export const FRAGMENT_3600 = gql(`
  fragment Fragment3600 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult3600 = ResultOf<typeof FRAGMENT_3600>;
type FragmentSelf3600 = NonNullable<FragmentResult3600>;

export type FragmentToken3600 =
  | FragmentSelf3600["__typename"]
  | FragmentSelf3600["typenameHint"] | FragmentToken3598 | FragmentToken3599;
