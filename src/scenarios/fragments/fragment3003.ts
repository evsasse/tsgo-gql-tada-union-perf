import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3001 } from "./fragment3001";
import type { FragmentToken3002 } from "./fragment3002";

export const FRAGMENT_3003 = gql(`
  fragment Fragment3003 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult3003 = ResultOf<typeof FRAGMENT_3003>;
type FragmentSelf3003 = NonNullable<FragmentResult3003>;

export type FragmentToken3003 =
  | FragmentSelf3003["__typename"]
  | FragmentSelf3003["typenameHint"] | FragmentToken3001 | FragmentToken3002;
