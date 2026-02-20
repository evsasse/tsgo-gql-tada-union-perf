import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3355 } from "./fragment3355";
import type { FragmentToken3356 } from "./fragment3356";

export const FRAGMENT_3357 = gql(`
  fragment Fragment3357 on Member276 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_276
    memberCount_276
    memberMetric_276
  }
`);

type FragmentResult3357 = ResultOf<typeof FRAGMENT_3357>;
type FragmentSelf3357 = NonNullable<FragmentResult3357>;

export type FragmentToken3357 =
  | FragmentSelf3357["__typename"]
  | FragmentSelf3357["typenameHint"] | FragmentToken3355 | FragmentToken3356;
