import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3992 } from "./fragment3992";
import type { FragmentToken3993 } from "./fragment3993";

export const FRAGMENT_3994 = gql(`
  fragment Fragment3994 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult3994 = ResultOf<typeof FRAGMENT_3994>;
type FragmentSelf3994 = NonNullable<FragmentResult3994>;

export type FragmentToken3994 =
  | FragmentSelf3994["__typename"]
  | FragmentSelf3994["typenameHint"] | FragmentToken3992 | FragmentToken3993;
