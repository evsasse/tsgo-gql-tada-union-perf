import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3005 } from "./fragment3005";
import type { FragmentToken3006 } from "./fragment3006";

export const FRAGMENT_3007 = gql(`
  fragment Fragment3007 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult3007 = ResultOf<typeof FRAGMENT_3007>;
type FragmentSelf3007 = NonNullable<FragmentResult3007>;

export type FragmentToken3007 =
  | FragmentSelf3007["__typename"]
  | FragmentSelf3007["typenameHint"] | FragmentToken3005 | FragmentToken3006;
