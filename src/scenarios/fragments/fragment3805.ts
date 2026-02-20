import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3803 } from "./fragment3803";
import type { FragmentToken3804 } from "./fragment3804";

export const FRAGMENT_3805 = gql(`
  fragment Fragment3805 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult3805 = ResultOf<typeof FRAGMENT_3805>;
type FragmentSelf3805 = NonNullable<FragmentResult3805>;

export type FragmentToken3805 =
  | FragmentSelf3805["__typename"]
  | FragmentSelf3805["typenameHint"] | FragmentToken3803 | FragmentToken3804;
