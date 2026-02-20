import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3059 } from "./fragment3059";
import type { FragmentToken3060 } from "./fragment3060";

export const FRAGMENT_3061 = gql(`
  fragment Fragment3061 on Member260 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_260
    memberCount_260
    memberMetric_260
  }
`);

type FragmentResult3061 = ResultOf<typeof FRAGMENT_3061>;
type FragmentSelf3061 = NonNullable<FragmentResult3061>;

export type FragmentToken3061 =
  | FragmentSelf3061["__typename"]
  | FragmentSelf3061["typenameHint"] | FragmentToken3059 | FragmentToken3060;
