import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3318 } from "./fragment3318";
import type { FragmentToken3319 } from "./fragment3319";

export const FRAGMENT_3320 = gql(`
  fragment Fragment3320 on Member239 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_239
    memberCount_239
    memberMetric_239
  }
`);

type FragmentResult3320 = ResultOf<typeof FRAGMENT_3320>;
type FragmentSelf3320 = NonNullable<FragmentResult3320>;

export type FragmentToken3320 =
  | FragmentSelf3320["__typename"]
  | FragmentSelf3320["typenameHint"] | FragmentToken3318 | FragmentToken3319;
