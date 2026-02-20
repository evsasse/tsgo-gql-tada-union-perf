import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3354 } from "./fragment3354";
import type { FragmentToken3355 } from "./fragment3355";

export const FRAGMENT_3356 = gql(`
  fragment Fragment3356 on Member275 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_275
    memberCount_275
    memberMetric_275
  }
`);

type FragmentResult3356 = ResultOf<typeof FRAGMENT_3356>;
type FragmentSelf3356 = NonNullable<FragmentResult3356>;

export type FragmentToken3356 =
  | FragmentSelf3356["__typename"]
  | FragmentSelf3356["typenameHint"] | FragmentToken3354 | FragmentToken3355;
