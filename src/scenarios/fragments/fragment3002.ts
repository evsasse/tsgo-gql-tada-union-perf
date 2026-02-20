import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3000 } from "./fragment3000";
import type { FragmentToken3001 } from "./fragment3001";

export const FRAGMENT_3002 = gql(`
  fragment Fragment3002 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult3002 = ResultOf<typeof FRAGMENT_3002>;
type FragmentSelf3002 = NonNullable<FragmentResult3002>;

export type FragmentToken3002 =
  | FragmentSelf3002["__typename"]
  | FragmentSelf3002["typenameHint"] | FragmentToken3000 | FragmentToken3001;
