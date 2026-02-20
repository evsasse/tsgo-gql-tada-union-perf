import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3635 } from "./fragment3635";
import type { FragmentToken3636 } from "./fragment3636";

export const FRAGMENT_3637 = gql(`
  fragment Fragment3637 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult3637 = ResultOf<typeof FRAGMENT_3637>;
type FragmentSelf3637 = NonNullable<FragmentResult3637>;

export type FragmentToken3637 =
  | FragmentSelf3637["__typename"]
  | FragmentSelf3637["typenameHint"] | FragmentToken3635 | FragmentToken3636;
