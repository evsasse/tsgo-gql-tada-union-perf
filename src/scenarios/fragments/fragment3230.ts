import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3228 } from "./fragment3228";
import type { FragmentToken3229 } from "./fragment3229";

export const FRAGMENT_3230 = gql(`
  fragment Fragment3230 on Member149 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_149
    memberCount_149
    memberMetric_149
  }
`);

type FragmentResult3230 = ResultOf<typeof FRAGMENT_3230>;
type FragmentSelf3230 = NonNullable<FragmentResult3230>;

export type FragmentToken3230 =
  | FragmentSelf3230["__typename"]
  | FragmentSelf3230["typenameHint"] | FragmentToken3228 | FragmentToken3229;
