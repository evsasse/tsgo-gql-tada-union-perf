import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3991 } from "./fragment3991";
import type { FragmentToken3992 } from "./fragment3992";

export const FRAGMENT_3993 = gql(`
  fragment Fragment3993 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult3993 = ResultOf<typeof FRAGMENT_3993>;
type FragmentSelf3993 = NonNullable<FragmentResult3993>;

export type FragmentToken3993 =
  | FragmentSelf3993["__typename"]
  | FragmentSelf3993["typenameHint"] | FragmentToken3991 | FragmentToken3992;
