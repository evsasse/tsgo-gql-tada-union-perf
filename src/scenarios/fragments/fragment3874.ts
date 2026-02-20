import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3872 } from "./fragment3872";
import type { FragmentToken3873 } from "./fragment3873";

export const FRAGMENT_3874 = gql(`
  fragment Fragment3874 on Member233 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_233
    memberCount_233
    memberMetric_233
  }
`);

type FragmentResult3874 = ResultOf<typeof FRAGMENT_3874>;
type FragmentSelf3874 = NonNullable<FragmentResult3874>;

export type FragmentToken3874 =
  | FragmentSelf3874["__typename"]
  | FragmentSelf3874["typenameHint"] | FragmentToken3872 | FragmentToken3873;
