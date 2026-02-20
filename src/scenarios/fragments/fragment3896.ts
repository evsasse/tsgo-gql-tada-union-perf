import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3894 } from "./fragment3894";
import type { FragmentToken3895 } from "./fragment3895";

export const FRAGMENT_3896 = gql(`
  fragment Fragment3896 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult3896 = ResultOf<typeof FRAGMENT_3896>;
type FragmentSelf3896 = NonNullable<FragmentResult3896>;

export type FragmentToken3896 =
  | FragmentSelf3896["__typename"]
  | FragmentSelf3896["typenameHint"] | FragmentToken3894 | FragmentToken3895;
