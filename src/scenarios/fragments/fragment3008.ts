import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3006 } from "./fragment3006";
import type { FragmentToken3007 } from "./fragment3007";

export const FRAGMENT_3008 = gql(`
  fragment Fragment3008 on Member207 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_207
    memberCount_207
    memberMetric_207
  }
`);

type FragmentResult3008 = ResultOf<typeof FRAGMENT_3008>;
type FragmentSelf3008 = NonNullable<FragmentResult3008>;

export type FragmentToken3008 =
  | FragmentSelf3008["__typename"]
  | FragmentSelf3008["typenameHint"] | FragmentToken3006 | FragmentToken3007;
